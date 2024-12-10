export const ProfilesFilePath = 'data/profiles.yaml'

export const SubscribesFilePath = 'data/subscribes.yaml'

export const RulesetsFilePath = 'data/rulesets.yaml'

export const PluginsFilePath = 'data/plugins.yaml'

export const ScheduledTasksFilePath = 'data/scheduledtasks.yaml'

export const DefaultFontFamily =
  'system-ui, "Microsoft YaHei UI", "Source Han Sans CN", "Twemoji Mozilla", sans-serif'

export enum WindowStartState {
  Normal = 0,
  Minimised = 2
}

export enum WebviewGpuPolicy {
  Always = 0,
  OnDemand = 1,
  Never = 2
}

export enum Theme {
  Auto = 'auto',
  Light = 'light',
  Dark = 'dark'
}

export enum Lang {
  EN = 'en',
  ZH = 'zh',
  RU = 'ru'
}

export enum View {
  Grid = 'grid',
  List = 'list'
}

export enum Color {
  Default = 'default',
  Orange = 'orange',
  Yellow = 'yellow',
  Skyblue = 'skyblue',
  Purple = 'purple'
}

export const Colors = {
  [Color.Default]: {
    primary: 'rgb(0, 89, 214)',
    secondary: 'rgb(5, 62, 142)'
  },
  [Color.Orange]: {
    primary: '#d48022',
    secondary: '#d6a976'
  },
  [Color.Yellow]: {
    primary: '#ebc400',
    secondary: '#d9d214'
  },
  [Color.Skyblue]: {
    primary: '#1d88cf',
    secondary: '#144463'
  },
  [Color.Purple]: {
    primary: '#6b47a1',
    secondary: '#382654'
  }
}

// vue-draggable-plus config
export const DraggableOptions = {
  animation: 150
}

export enum PluginTrigger {
  OnManual = 'on::manual',
  OnSubscribe = 'on::subscribe',
  OnGenerate = 'on::generate',
  OnStartup = 'on::startup',
  OnShutdown = 'on::shutdown',
  OnReady = 'on::ready'
}

export enum PluginTriggerEvent {
  OnInstall = 'onInstall',
  OnUninstall = 'onUninstall',
  OnManual = 'onRun',
  OnSubscribe = 'onSubscribe',
  OnGenerate = 'onGenerate',
  OnStartup = 'onStartup',
  OnShutdown = 'onShutdown',
  OnReady = 'onReady',
  OnTask = 'onTask',
  OnConfigure = 'onConfigure'
}

export const PluginsTriggerOptions = [
  { label: 'plugin.on::manual', value: PluginTrigger.OnManual },
  { label: 'plugin.on::subscribe', value: PluginTrigger.OnSubscribe },
  { label: 'plugin.on::generate', value: PluginTrigger.OnGenerate },
  { label: 'plugin.on::startup', value: PluginTrigger.OnStartup },
  { label: 'plugin.on::shutdown', value: PluginTrigger.OnShutdown },
  { label: 'plugin.on::ready', value: PluginTrigger.OnReady }
]

export type MenuItem = {
  type: 'item' | 'separator'
  text?: string
  tooltip?: string
  event?: (() => void) | string
  children?: MenuItem[]
  hidden?: boolean
  checked?: boolean
}

export type TrayContent = {
  icon?: string
  title?: string
  tooltip?: string
}

export enum ScheduledTasksType {
  UpdateSubscription = 'update::subscription',
  UpdateRuleset = 'update::ruleset',
  UpdatePlugin = 'update::plugin',
  RunPlugin = 'run::plugin',
  RunScript = 'run::script'
}

export const ScheduledTaskOptions = [
  { label: 'scheduledtask.update::subscription', value: ScheduledTasksType.UpdateSubscription },
  { label: 'scheduledtask.update::ruleset', value: ScheduledTasksType.UpdateRuleset },
  { label: 'scheduledtask.update::plugin', value: ScheduledTasksType.UpdatePlugin },
  { label: 'scheduledtask.run::plugin', value: ScheduledTasksType.RunPlugin },
  { label: 'scheduledtask.run::script', value: ScheduledTasksType.RunScript }
]
