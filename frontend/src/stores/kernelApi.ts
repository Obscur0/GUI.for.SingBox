import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

import { ProcessInfo, KillProcess, ExecBackground } from '@/bridge'
import { CoreWorkingDirectory } from '@/constant/kernel'
import { generateConfigFile, ignoredError, updateTrayMenus, getKernelFileName } from '@/utils'
import { getProxies, getProviders, getConfigs, setConfigs } from '@/api/kernel'
import { useAppSettingsStore, useProfilesStore, useLogsStore, useEnvStore } from '@/stores'

export type ProxyType = 'mixed' | 'http' | 'socks'

export const useKernelApiStore = defineStore('kernelApi', () => {
  /** RESTful API */
  const config = ref<IKernelApiConfig>({
    port: 0,
    'mixed-port': 0,
    'socks-port': 0,
    'interface-name': '',
    'allow-lan': false,
    mode: '',
    tun: {
      enable: false,
      stack: 'System',
      device: ''
    }
  })

  const proxies = ref<Record<string, IKernelProxy>>({})
  const providers = ref<{
    [key: string]: {
      name: string
      proxies: IKernelProxy[]
    }
  }>({})

  const refreshConfig = async () => {
    const _config = await getConfigs()
    config.value = {
      ..._config,
      tun: config.value.tun
    }

    const profilesStore = useProfilesStore()
    const appSettingsStore = useAppSettingsStore()
    const { profile: profileID } = appSettingsStore.app.kernel
    const profile = profilesStore.getProfileById(profileID)
    if (profile) {
      const mixed = profile.inbounds.find((v) => v.mixed)?.mixed?.listen.listen_port || 0
      config.value['mixed-port'] = mixed
    }
  }

  const updateConfig = async (options: Recordable) => {
    await setConfigs(options)
    await refreshConfig()
  }

  const refreshProviderProxies = async () => {
    const [{ providers: a }, { proxies: b }] = await Promise.all([getProviders(), getProxies()])
    providers.value = a
    proxies.value = b
  }

  /* Bridge API */
  const loading = ref(false)
  const statusLoading = ref(true)

  const isKernelRunning = async (pid: number) => {
    return pid && (await ProcessInfo(pid)).startsWith('sing-box')
  }

  const updateKernelState = async () => {
    const envStore = useEnvStore()
    const appSettingsStore = useAppSettingsStore()

    appSettingsStore.app.kernel.running = !!(await ignoredError(
      isKernelRunning,
      appSettingsStore.app.kernel.pid
    ))

    if (!appSettingsStore.app.kernel.running) {
      appSettingsStore.app.kernel.pid = 0
    }

    statusLoading.value = false

    if (appSettingsStore.app.kernel.running) {
      await refreshConfig()
      await refreshProviderProxies()
      await envStore.updateSystemProxyStatus()
    } else if (appSettingsStore.app.autoStartKernel) {
      await startKernel()
    }
  }

  const startKernel = async () => {
    const envStore = useEnvStore()
    const logsStore = useLogsStore()
    const profilesStore = useProfilesStore()
    const appSettingsStore = useAppSettingsStore()

    const { profile: profileID, branch } = appSettingsStore.app.kernel

    if (!profileID) throw 'Choose a profile first'

    const profile = profilesStore.getProfileById(profileID)

    if (!profile) throw 'Profile does not exist: ' + profileID

    await stopKernel()
    await generateConfigFile(profile)

    const fileName = await getKernelFileName(branch === 'latest')
    const kernelFilePath = CoreWorkingDirectory + '/' + fileName
    const kernelWorkDir = envStore.env.basePath + '/' + CoreWorkingDirectory

    loading.value = true

    const onOut = async (out: string, pid: number) => {
      logsStore.recordKernelLog(out)
      if (out.toLowerCase().includes('sing-box started')) {
        loading.value = false
        appSettingsStore.app.kernel.pid = pid
        appSettingsStore.app.kernel.running = true

        await Promise.all([refreshConfig(), refreshProviderProxies()])

        if (appSettingsStore.app.autoSetSystemProxy) {
          await envStore.setSystemProxy()
        }
      }
    }

    const onEnd = async () => {
      loading.value = false
      appSettingsStore.app.kernel.pid = 0
      appSettingsStore.app.kernel.running = false

      if (appSettingsStore.app.autoSetSystemProxy) {
        await envStore.clearSystemProxy()
      }
    }

    try {
      const pid = await ExecBackground(
        kernelFilePath,
        ['run', '--disable-color', '-c', kernelWorkDir + '/config.json', '-D', kernelWorkDir],
        // stdout
        (out: string) => onOut(out, pid),
        // end
        onEnd
      )
    } catch (error) {
      loading.value = false
      throw error
    }
  }

  const stopKernel = async () => {
    const envStore = useEnvStore()
    const logsStore = useLogsStore()
    const appSettingsStore = useAppSettingsStore()

    const { pid } = appSettingsStore.app.kernel
    const running = await ignoredError(isKernelRunning, pid)
    running && (await KillProcess(pid))

    appSettingsStore.app.kernel.pid = 0
    appSettingsStore.app.kernel.running = false

    if (appSettingsStore.app.autoSetSystemProxy) {
      await envStore.clearSystemProxy()
    }

    logsStore.clearKernelLog()
  }

  const restartKernel = async () => {
    await stopKernel()
    await startKernel()
  }

  const getProxyPort = ():
    | {
        port: number
        proxyType: ProxyType
      }
    | undefined => {
    const { port, 'socks-port': socksPort, 'mixed-port': mixedPort } = config.value

    if (mixedPort) {
      return {
        port: mixedPort,
        proxyType: 'mixed'
      }
    }
    if (port) {
      return {
        port,
        proxyType: 'http'
      }
    }
    if (socksPort) {
      return {
        port: socksPort,
        proxyType: 'socks'
      }
    }
    return undefined
  }

  watch(
    [() => config.value.mode, () => config.value.tun.enable, () => proxies.value],
    updateTrayMenus
  )

  return {
    startKernel,
    stopKernel,
    restartKernel,
    updateKernelState,
    loading,
    statusLoading,
    config,
    proxies,
    providers,
    refreshConfig,
    updateConfig,
    refreshProviderProxies,
    getProxyPort
  }
})
