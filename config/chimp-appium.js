module.exports = {
  // - - - - CHIMP - - - -
  watch: false,
  watchTags: '@watch,@focus',
  domainSteps: null,
  e2eSteps: null,
  fullDomain: false,
  domainOnly: false,
  e2eTags: '@e2e',
  watchWithPolling: false,
  sync: true,
  offline: false,
  showXolvioMessages: false,

  // - - - - CUCUMBER - - - -
  path: './features-mobile',
  format: 'pretty',
  tags: '~@ignore',
  singleSnippetPerFile: true,
  recommendedFilenameSeparator: '_',
  chai: false,
  screenshotsOnError: false,
  screenshotsPath: '.screenshots',
  captureAllStepScreenshots: false,
  saveScreenshotsToDisk: true,
  saveScreenshotsToReport: false,
  jsonOutput: null,
  conditionOutput: true,

  host: 'localhost',
  port: 4723,
  deviceName: '87783bc4',

  // - - - - WEBDRIVER-IO  - - - -
  webdriverio: {
    logLevel: 'verbose',
    coloredLogs: true,
    waitforTimeout: 10000,
    waitforInterval: 250,
    desiredCapabilities: {
      platformName: 'Android',
      platformVersion: '6.0',
      deviceName: '87783bc4',
      app: '/Users/daniosif/Projects/GitLab/engage-chimp-complete-poc/mobile/apps/android-latest.apk',
      appPackage: 'com.fourth.marketplace',
      // appActivity: '.com.salesforce.androidsdk.ui.LoginActivity' // Option 1 doesn't exist as an activity.
      // appActivity: 'com.salesforce.androidsdk.ui.LoginActivity' // Option 2
      appActivity: 'com.salesforce.androidsdk.phonegap.ui.SalesforceDroidGapActivity' // Option 3
      // appActivity: '.com.salesforce.androidsdk.phonegap.ui.SalesforceDroidGapActivity' // Option 4
    }
  },

  // - - - - SESSION-MANAGER  - - - -
  noSessionReuse: false,

  // - - - - DEBUGGING  - - - -
  log: 'info',
  debug: false,
  seleniumDebug: null,
  debugCucumber: null,
  debugBrkCucumber: null,
  debugMocha: null,
  debugBrkMocha: null
};
