export default {
  common: {
    grid: 'Сетка',
    list: 'Список',
    add: 'Добавить',
    added: 'Добавлено',
    more: 'Еще',
    edit: 'Редактировать',
    clear: 'Очистить',
    update: 'Обновить',
    delete: 'Удалить',
    cancel: 'Отмена',
    save: 'Сохранить',
    nextStep: 'Далее',
    prevStep: 'Назад',
    disabled: 'Disabled',
    enabled: 'Enabled',
    preview: 'Preview',
    warning: 'Warning',
    disable: 'Выключить',
    enable: 'Enable',
    use: 'Использовать',
    none: 'none',
    close: 'Close',
    reset: 'Reset',
    pause: 'Pause',
    resume: 'Resume',
    details: 'Подробно',
    updateAll: 'Обновить все',
    updateTime: 'Время обновления',
    keywords: 'Keywords',
    success: 'Success',
    copy: 'Copy',
    copied: 'Copied',
    auto: 'Auto',
    import: 'Import',
    install: 'Установить',
    uninstall: 'Удалить',
    run: 'Run',
    refresh: 'Refresh',
    confirm: 'OK',
    selectAll: 'Select All',
    http: 'Remote',
    file: 'Local',
    openFile: 'Открыть файл',
    develop: 'Develop',
    canceled: 'Canceled',
    downloading: 'Downloading...'
  },
  kernel: {
    port: 'HTTP(s) Port',
    mode: 'Mode',
    ipv6: 'IPv6',
    secret: 'RESTful API Secret',
    'socks-port': 'SOCKS5 Port',
    'mixed-port': 'Mixed Port',
    'allow-lan': 'Allow Lan',
    'log-level': 'Log Level',
    'external-controller': 'External Controller',
    'external-ui': 'External UI',
    'interface-name': 'Interface Name',
    auto: 'Auto',
    info: 'Info',
    warning: 'Warning',
    error: 'Error',
    debug: 'Debug',
    silent: 'Silent',
    rule: 'Rule',
    global: 'Global',
    direct: 'Direct',
    ruleDesp: 'Route traffic based on rules',
    globalDesp: 'Only follow the Global group',
    directDesp: 'Directly connect all traffic',
    'keep-alive-interval': 'Keep Alive Interval',
    'find-process-mode': 'Find Process Mode',
    'external-controller-tls': 'External Controller Tls',
    'external-ui-name': 'External UI Name',
    'external-ui-url': 'External UI URL',
    'unified-delay': 'unified-delay',
    'tcp-fast-open': 'TCP Fast Open',
    domain_strategy: 'Domain Strategy',
    'tcp-multi-path': 'TCP Multi Path',
    'udp-fragment': 'UDP Fragment',
    sniff: 'Sniff',
    'sniff-override-destination': 'Sniff Override Destination',
    authentication: 'Http/Socks Auth',
    'skip-auth-prefixes': 'Skip Auth Prefixes',
    'store-cache': 'Store cache',
    'store-fake-ip': 'Store Fake-IP',
    'store-rdrc': 'Store Rejected DNS Response',
    'geo-auto-update': 'GEO Auto Update',
    'geo-update-interval': 'GEO Update Interval',
    'lan-allowed-ips': 'LAN Allowed IPs',
    'lan-disallowed-ips': 'LAN Disallowed IPs',
    tun: {
      enable: 'Enable',
      stack: 'Stack',
      'interface-name': 'Interface Name',
      'auto-route': 'Auto Route',
      'auto-detect-interface': 'Auto Detect Interface',
      'dns-hijack': 'DNS Hijack',
      'strict-route': 'Strict Route',
      mtu: 'MTU',
      'endpoint-independent-nat': 'Endpoint Independent NAT',
      address: 'IPv4 & IPv6 Prefix',
      system: 'System',
      gvisor: 'gVisor',
      mixed: 'Mixed',
      lwip: 'LWIP'
    },
    dns: {
      enable: 'Enable',
      'fake-ip-range-v4': 'Fake-IP Range(IPV4)',
      'fake-ip-range-v6': 'Fake-IP Range(IPV6)',
      'fake-ip-filter': 'Fake-IP Exclude',
      'fake-ip': 'Fake-IP',
      'local-dns': 'Local DNS',
      'remote-dns': 'Remote DNS',
      'resolver-dns': 'Resolver DNS',
      'remote-resolver-dns': 'Remote Resolver DNS',
      'local-dns-detour': 'Local DNS Detour',
      'remote-dns-detour': 'Remote DNS Detour',
      'final-dns': 'Fallback DNS',
      'fakeip-dns': 'Fake-IP DNS',
      'disable-cache': 'Disable Cache',
      'disable-expire': 'Disable Expire',
      'independent-cache': 'Independent Cache',
      'client-subnet': 'Client Subnet',
      block: 'BLOCK',
      default: 'Default',
      strategy: {
        name: 'Strategy',
        default: 'Default',
        prefer_ipv4: 'Prefer IPV4',
        prefer_ipv6: 'Prefer IPV6',
        ipv4_only: 'IPV4 Only',
        ipv6_only: 'IPV6 Only'
      }
    },
    tls: {
      certificate: 'certificate',
      'private-key': 'private-key'
    },
    'global-client-fingerprint': 'global-client-fingerprint',
    tracing: 'Tracing',
    'sniff-tls-sni': 'Sniff TLS SNI',
    'redirect-to-tun': 'eBPF Redirect to TUN',
    proxyGroups: {
      name: 'Name',
      lazy: 'Lazy',
      'disable-udp': 'Disable UDP',
      interval: 'Interval',
      tolerance: 'Tolerance',
      url: 'URL',
      filter: 'Filter',
      notFound: 'Some subscriptions or proxies are missing, please clean them up',
      needToAdd: 'References at least one proxy or subscription',
      sort: 'View and Sort',
      builtIn: 'Built-In',
      subscriptions: 'Subscriptions',
      type: {
        name: 'Type',
        select: 'select',
        'url-test': 'url-test',
        fallback: 'fallback',
        relay: 'relay',
        'load-balance': 'load-balance',
        Selector: 'Selector',
        UrlTest: 'UrlTest',
        Fallback: 'Fallback'
      },
      strategy: {
        name: 'Strategy',
        'consistent-hashing': 'consistent-hashing',
        'round-robin': 'round-robin'
      },
      empty: 'The subscription group is empty.',
      noSubs: 'The subscription list is empty.'
    },
    rules: {
      payload: 'Payload',
      proxy: 'Proxy',
      invert: 'Invert',
      ruleset: 'RuleSet',
      rulesets: 'RuleSets',
      'download-detour': 'Download Detour',
      'disable-cache': 'Disable Cache',
      name: 'Name',
      needGeodataMode: 'Please enable the "geodata-mode" option in the advanced settings',
      notFound: 'proxy group does not exist',
      inlineRuleError: 'error syntax',
      empty: 'Ruleset list is empty',
      type: {
        name: 'Type',
        DOMAIN: 'DOMAIN',
        GEOIP: 'GEOIP',
        GEOSITE: 'GEOSITE',
        IPSET: 'IPSET',
        SCRIPT: 'SCRIPT',
        FALLBACK: 'FALLBACK',
        'DOMAIN-SUFFIX': 'DOMAIN-SUFFIX',
        'DOMAIN-KEYWORD': 'DOMAIN-KEYWORD',
        'DOMAIN-REGEX': 'DOMAIN-REGEX',
        'IP-CIDR': 'IP-CIDR',
        'IP-CIDR6': 'IP-CIDR6',
        'SRC-PORT': 'SRC-PORT',
        'DST-PORT': 'DST-PORT',
        'PROCESS-NAME': 'PROCESS-NAME',
        'PROCESS-PATH': 'PROCESS-PATH',
        'RULE-SET': 'RULE-SET',
        'REMOTE-RULE-SET': 'REMOTE-RULE-SET',
        PROTOCOL: 'PROTOCOL',
        'IP-PRIVATE': 'IP-PRIVATE',
        'SRC-IP-PRIVATE': 'IP-PRIVATE',
        'SRC-IP-CIDR': 'SRC-IP-CIDR',
        'CLASH-MODE': 'CLASH-MODE',
        NETWORK: 'NETWORK',
        'IP-VERSION': 'IP-VERSION',
        'QUERY-TYPE': 'QUERY-TYPE',
        INBOUND: 'INBOUND',
        OUTBOUND: 'OUTBOUND',
        'FAKE-IP': 'FAKE-IP',
        INLINE: 'INLINE',
        'RULE-SET-IPCIDR-MATCH-SOURCE': 'RULE-SET-IPCIDR-MATCH-SOURCE'
      }
    },
    standard: 'Standard',
    memconservative: 'Memconservative',
    chrome: 'Chrome',
    firefox: 'Firefox',
    safari: 'Safari',
    iOS: 'IOS',
    android: 'Android',
    edge: 'Edge',
    '360': '360',
    qq: 'QQ',
    random: 'Random',
    always: 'Always',
    strict: 'Strict',
    off: 'Off',
    notFound: 'Kernel Not Found',
    requestFailed: 'Request Failed',
    local: 'Local',
    remote: 'Remote',
    update: 'Update',
    restart: 'Restart Kernel'
  },
  router: {
    overview: 'Обзор',
    subscriptions: 'Подписки',
    rulesets: 'Наборы правил',
    plugins: 'Плагины',
    settings: 'Настройки',
    debug: 'Debug',
    components: 'Компоненты',
    about: 'О программе',
    profiles: 'Профили',
    kernel: 'Ядро',
    scheduledtasks: 'Задачи'
  },
  home: {
    mode: 'Proxy Mode',
    global: 'Global',
    rule: 'Rule',
    direct: 'Direct',
    quickStart: 'Quick Start',
    noProfile: 'Welcome to the {0}, click the button to get started.',
    initSuccessful: 'Initialization successful',
    initFailed: 'Failed to update the subscription, you need to manually update the subscription',
    overview: {
      expandAll: 'Expand All',
      collapseAll: 'Collapse All',
      refresh: 'Refresh',
      delayTest: 'Delay Test',
      stop: 'Stop Kernel',
      restart: 'Restart Kernel',
      viewlog: 'view log',
      start: 'Click to Start',
      noLogs: 'Log is empty',
      systemProxy: 'System Proxy',
      tunMode: 'TUN Mode',
      traffic: 'Traffic',
      realtimeTraffic: 'Скорость интернета',
      totalTraffic: 'Траффик за сессию',
      connections: 'Соединения',
      memory: 'Память',
      transmit: 'Отдача',
      receive: 'Прием',
      settings: 'Настройка ядра',
      settingsTips: 'Действует временно, для сохранения, пожалуйста, измените настройки `профиля`.',
      updateGEO: 'Update GEO',
      needPort: 'Please set the proxy port first'
    },
    controller: {
      name: 'Controller',
      autoClose: 'Auto-close',
      unAvailable: 'Show UnAvailable',
      cardMode: 'Card Mode',
      sortBy: 'Sort By Delay',
      delay: 'Delay test URL',
      delayUrl: 'Please enter the delayed test URL'
    },
    connections: {
      type: 'Type',
      process: 'Process',
      processPath: 'Process Path ',
      sniffHost: 'Sniff Host',
      sourceIP: 'Source',
      remoteDestination: 'Destination',
      host: 'Host',
      inbound: 'Inbound',
      rule: 'Rule',
      chains: 'Chains',
      upload: 'Upload',
      download: 'Download',
      uploadSpeed: 'UL Speed',
      downSpeed: 'DL Speed',
      time: 'Time',
      close: 'Закрыть',
      addToDirect: 'Добавить в DIRECT',
      addToProxy: 'Добавить в PROXY',
      addToReject: 'Добавить в REJECT',
      active: 'Активные',
      closed: 'Закрытые',
      closeAll: 'Закрыть все соединения',
      sort: 'Сортировка и настройка видимости',
      details: 'Подробности подключения'
    }
  },
  subscribe: {
    manual: 'MANUAL',
    name: 'Name',
    url: 'Remote Url',
    localPath: 'Local Path',
    website: 'Website',
    path: 'Save Path',
    include: 'Include Keywords',
    exclude: 'Exclude Keywords',
    includeProtocol: 'Include Protocol',
    excludeProtocol: 'Exclude Protocol',
    proxyPrefix: 'Proxy Prefix',
    updating: 'Updating',
    useragent: 'User-Agent',
    resetUserAgent: 'Reset User-Agent',
    inSecure: 'InsecureSkipVerify',
    healthCheck: {
      name: 'Health Check',
      interval: 'interval(s)',
      url: 'url'
    }
  },
  subscribes: {
    download: 'Скачано',
    upload: 'Отдано',
    total: 'Всего',
    expire: 'Expire',
    subtype: 'Subscription Type',
    website: 'Website',
    empty: 'The subscription list is empty. Please{action}a subscription first.',
    enterLink: 'Enter subscription link',
    proxyCount: 'Колличество прокси',
    editProxies: 'Редактировать прокси',
    editSourceFile: 'Редактировать прокси(Исходник)',
    copySub: 'Copy Link',
    proxies: {
      type: 'Protocol',
      name: 'Name',
      add: 'Add Proxy'
    }
  },
  profile: {
    name: 'Name',
    generalSettings: 'General Settings',
    advancedSettings: 'Advanced Settings',
    step: {
      name: 'Name',
      general: 'General',
      tun: 'TUN',
      dns: 'DNS',
      groups: 'Proxy Groups',
      dnsRules: 'DNS Rules',
      rules: 'Route Rules',
      'mixin-script': 'Mixin & Script'
    },
    proxies: 'Reference proxies',
    use: 'Reference subscriptions',
    noSubs: 'There are no available subscriptions.',
    group: 'Group Details',
    rule: 'Rule Details',
    auto: 'This configuration is managed by subscription and will be overwritten when the subscription is updated!\nIf you want to modify this profile, please use the plugin system.',
    mixinSettings: {
      name: 'Mixin',
      priority: 'Priority',
      mixin: 'Mixin',
      gui: 'GUI'
    },
    scriptSettings: {
      name: 'Script'
    }
  },
  profiles: {
    shouldStop: 'Unable to delete, this profile is in use.',
    empty: 'The profiles list is empty, Please{action}a profile first.',
    copytoClipboard: 'Generate config to clipboard',
    generateAndView: 'Generate and View',
    copy: 'Copy and Paste',
    start: 'Start/Restart with this Profile',
    proxyGroups: 'Proxy Groups',
    rules: 'Rules'
  },
  ruleset: {
    manual: 'MANUAL',
    format: {
      name: 'Формат',
      source: 'Источник',
      binary: 'Binary'
    },
    rulesetType: 'Ruleset Type',
    name: 'Name',
    url: 'Remote Url',
    path: 'Save Path',
    interval: 'Interval',
    updating: 'Updating'
  },
  rulesets: {
    hub: 'Каталог наборов правил',
    total: 'Колличество наборов правил',
    noDesc: 'No description',
    updating: 'Обновление',
    fetching: 'fetching...',
    empty: 'The ruleset list is empty. Please{action}or import from the{import}first.',
    rulesetCount: 'Колличество правил',
    editRuleset: 'Редактирование правил',
    selectRuleType: 'Select Rule Type'
  },
  plugin: {
    trigger: 'Trigger',
    'on::manual': 'on::manual',
    'on::startup': 'on::startup',
    'on::shutdown': 'on::shutdown',
    'on::generate': 'on::generate',
    'on::subscribe': 'on::subscribe',
    'on::ready': 'on::ready',
    'on::task': 'on::task',
    'on::install': 'on::install',
    'on::uninstall': 'on::uninstall',
    'on::configure': 'on::configure',
    name: 'Name',
    description: 'Description',
    url: 'Remote Url',
    install: 'Installation required',
    installed: 'Installed',
    path: 'Save Path',
    type: 'Type',
    menus: 'Menus',
    configuration: ' Configuration',
    menuKey: 'Menu Title',
    menuValue: 'Trigger function name',
    selectComponent: 'Select a component',
    confName: 'Name',
    confDescription: 'Description',
    confKey: 'Key',
    confDefault: 'Default',
    options: 'Options',
    restore: 'Reset to default'
  },
  plugins: {
    updating: 'Обновление',
    empty: 'The plugin list is empty. Please{action}or import from the{import}first.',
    source: 'Source',
    reload: 'Перезагрузить',
    configuration: 'Конфигурация',
    hub: 'Каталог плагинов',
    update: 'Обновить список',
    updateSuccess: 'Обновление успешно',
    total: 'Колличество плагинов',
    removeConfiguration: 'Хотите удалить конфигурацию плагина?',
    testRun: 'TestRun'
  },
  scheduledtask: {
    name: 'Имя',
    type: 'Тип',
    script: 'Скрипт',
    subscriptions: 'Подписки',
    rulesets: 'Наборы правил',
    plugins: 'Плагины',
    cron: 'Cron',
    notification: 'Уведомление о завершении задачи',
    cronTips: 'Секунды Минуты Часы "День месяца" Месяц "День недели"',
    lastTime: 'Последний запуск',
    'update::subscription': 'update::subscription',
    'update::ruleset': 'update::ruleset',
    'update::plugin': 'update::plugin',
    'run::plugin': 'run::plugin',
    'run::script': 'run::script'
  },
  scheduledtasks: {
    logs: 'Лог',
    name: 'Плагин',
    duration: 'Продолжительность',
    startTime: 'Время начала',
    endTime: 'Время окончания',
    time: 'Время',
    result: 'Результат',
    empty: 'Список запланированных задач пуст. Пожалуйста, сначала {action} запланированную задачу.',
    run: 'Запустить сейчас',
    log: 'Посмотреть лог'
  },
  settings: {
    general: 'General',
    theme: {
      name: 'Темы',
      light: 'Светлая тема',
      dark: 'Тёмная тема',
      auto: 'Системная'
    },
    color: {
      name: 'Цвет',
      default: 'Стандартный',
      orange: 'Мел',
      yellow: 'Кура',
      skyblue: 'Каго',
      purple: 'Purple',
    },
    fontFamily: 'Шрифт',
    resetFont: 'Сбросить шрифт',
    appFolder: {
      name: 'Папка приложения',
      open: 'Открыть папку приложения'
    },
    kernelCache: {
      name: 'Кэш ядра',
      clear: 'Очистить кэш ядра'
    },
    lang: {
      name: 'Язык',
      zh: '简体中文',
      en: 'English',
      ru: 'Русский'
    },
    pages: {
      name: 'Видимость пунктов меню'
    },
    windowState: {
      normal: 'Нормальное окно',
      maximised: 'Maximised',
      minimised: 'Свернутое окно',
      fullscreen: 'Fullscreen'
    },
    webviewGpuPolicy: {
      name: 'Webview Gpu Policy',
      always: 'Always',
      onDemand: 'OnDemand',
      never: 'Never'
    },
    needRestart: 'Требуется перезапуск приложения',
    needAdmin: 'Требуются права Админа',
    exitOnClose: 'Выйти из приложения при закрытии окна',
    closeKernelOnExit: 'Выключить ядро при закрытии приложения',
    autoSetSystemProxy: 'Auto Set / Clear System Proxy',
    autoStartKernel: 'Авто старт ядра',
    admin: 'Запуск от администратора',
    addToMenu: 'Добавить плагин в меню',
    multipleInstance: 'Разрешить несколько экземпляров приложения',
    rollingRelease: 'Включить скользящий выпуск',
    startup: {
      name: 'Автозагрузка',
      delay: 'Задержка(сек)'
    },
    kernel: {
      name: 'sing-box',
      version: 'Switch version',
      stable: 'Stable version',
      alpha: 'Alpha version',
      grant: 'Grant Privileges'
    },
    userAgent: {
      name: 'User-Agent',
      reset: 'Reset User-Agent'
    },
    githubapi: {
      name: 'Authenticating to the REST API',
      tips: 'have a higher rate limit'
    }
  },
  about: {
    new: 'New',
    restart: 'Restart APP',
    noDownloadLink: 'No download link found',
    updateSuccessfulRestart: 'Update completed, please restart the App',
    updateSuccessfulReplace: 'Download completed, please manually replace the App',
    updateSuccessful: 'Update completed',
    newVersion: 'New version found',
    latestVersion: 'Already the latest version'
  },
  titlebar: {
    resetSize: 'Reset Window',
    reload: 'Reload Window',
    restart: 'Restart App',
    exitApp: 'Exit App',
    waiting: 'Waiting for the program to exit...',
    timeout: 'Exit timed out. Force exit？\n\nReason: Plugin exit timed out.'
  },
  format: {
    seconds: 'Seconds',
    minutes: 'Minutes',
    hours: 'Hours',
    days: 'Days',
    months: 'Months',
    years: 'Years',
    second: 'Second',
    minute: 'Minute',
    hour: 'Hour',
    day: 'Day',
    month: 'Month',
    year: 'Year',
    ago: 'Ago',
    later: 'Later'
  },
  outbound: {
    select: '🚀 Select',
    urltest: '🎈 Auto',
    direct: '🎯 Direct',
    block: '🛑 Block',
    fallback: '🐟 Fallback'
  },
  tray: {
    showMainWindow: 'Show Main Window',
    restart: 'Restart',
    restartTip: 'Restart App',
    exit: 'Exit',
    exitTip: 'Exit App',
    proxyGroup: 'Proxy Group',
    setSystemProxy: 'Set System Proxy',
    clearSystemProxy: 'Clear System Proxy',
    tun: 'Tun Mode',
    enableTunMode: 'Enable Tun Mode',
    disableTunMode: 'Disable Tun Mode',
    kernel: 'Kernel',
    proxy: 'System Proxy',
    startKernel: 'Start Kernel',
    stopKernel: 'Stop Kernel',
    restartKernel: 'Restart Kernel',
    plugins: 'Plugins'
  },
  commands: {
    noMatching: 'No matching commands'
  }
}
