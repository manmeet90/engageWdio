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
	server: false,
	serverPort: 8060,
	serverHost: 'localhost',
	sync: true,
	offline: false,
	showXolvioMessages: false,

  // - - - - CUCUMBER - - - -
	path: './features',
	format: 'pretty',
	tags: '~@ignore',
	singleSnippetPerFile: true,
	recommendedFilenameSeparator: '-',
	chai: false,
	screenshotsOnError: true,
	screenshotsPath: './error-screenshots',
	captureAllStepScreenshots: false,
	saveScreenshotsToDisk: true,
  // Note: With a large viewport size and captureAllStepScreenshots enabled,
  // you may run out of memory. Use browser.setViewportSize to make the
  // viewport size smaller.
	saveScreenshotsToReport: true,
	jsonOutput: './output/cucumber.json',
  // compiler: 'js:' + path.resolve(__dirname, '../lib/babel-register.js'),
	conditionOutput: true,

  // - - - - CUCUMBER REPORT - - - -
	htmlReport: true,
	theme: 'bootstrap',
	jsonFile: './output/cucumber.json',
	output: './output/report/cucumber.html',
	reportSuiteAsScenarios: true,
	launchReport: false,

  // - - - - SELENIUM  - - - -
	browser: 'phantomjs',
	platform: 'ANY',
	name: '',
	user: '',
	key: '',
	port: Math.floor(Math.random() * 8000) + 1000,
	host: null,

  // - - - - WEBDRIVER-IO  - - - -
	webdriverio: {
		desiredCapabilities: {},
		logLevel: 'verbose',
		logOutput: './logs',
		host: '127.0.0.1',
		port: 4444,
		path: '/wd/hub',
		baseUrl: 'https://qapartial-fourth-app.cs87.force.com/',
		coloredLogs: true,
		screenshotPath: './error-screenshots',
		waitforTimeout: 30000,
		waitforInterval: 250
	},

  // - - - - SELENIUM-STANDALONE
	seleniumStandaloneOptions: {
    // check for more recent versions of selenium here:
    // http://selenium-release.storage.googleapis.com/index.html
		version: '3.0.1',
		baseURL: 'https://selenium-release.storage.googleapis.com',
		drivers: {
			chrome: {
        // check for more recent versions of chrome driver here:
        // http://chromedriver.storage.googleapis.com/index.html
				version: '2.26',
				arch: process.arch,
				baseURL: 'https://chromedriver.storage.googleapis.com'
			}
		}
	},

  // - - - - SESSION-MANAGER  - - - -
	noSessionReuse: false,

  // - - - - SIMIAN  - - - -
	simianResultEndPoint: 'api.simian.io/v1.0/result',
	simianAccessToken: false,
	simianResultBranch: null,
	simianRepositoryId: null,

  // - - - - MOCHA  - - - -
	mocha: false,
	mochaCommandLineOptions: ['--color'],
	mochaConfig: {
    // tags and grep only work when watch mode is false
		tags: '',
		grep: null,
		timeout: 60000,
		reporter: 'spec',
		slow: 10000
	},

  // - - - - JASMINE  - - - -
	jasmine: false,
	jasmineConfig: {
		specDir: '.',
		specFiles: [
			'**/*@(_spec|-spec|Spec).@(js|jsx)'
		],
		helpers: [
			'support/**/*.@(js|jsx)'
		],
		stopSpecOnExpectationFailure: false,
		random: false
	},
	jasmineReporterConfig: {
    // This options are passed to jasmine.configureDefaultReporter(...)
    // See: http://jasmine.github.io/2.4/node.html#section-Reporters
	},

  // - - - - METEOR  - - - -
	ddp: false,
	serverExecuteTimeout: 10000,

  // - - - - PHANTOM  - - - -
	phantom_w: 1280,
	phantom_h: 1024,
	phantom_ignoreSSLErrors: false,

  // - - - - DEBUGGING  - - - -
	log: 'verbose',
	debug: false,
	seleniumDebug: null,
	debugCucumber: null,
	debugBrkCucumber: null,
	debugMocha: null,
	debugBrkMocha: null
};
