/* eslint-disable max-len */
const commands = require('./build/helpers/customCommands');
const allure = require('allure-commandline')
const argv = require("yargs").argv;
const wdioParallel = require('wdio-cucumber-parallel-execution');
const sourceSpecDirectory = `./build/features`;

let featureFilePath = `${sourceSpecDirectory}/*.feature`;
let otherFeaturefilePath = './build/features'

// If parallel execution is set to true, then create the Split the feature files
// And store then in a tmp spec directory (created inside `the source spec directory)
//if (argv.parallel === 'true') {
    tmpSpecDirectory = `${sourceSpecDirectory}/tmp`;
    wdioParallel.performSetup({
        sourceSpecDirectory: sourceSpecDirectory,
        tmpSpecDirectory: tmpSpecDirectory,
        cleanTmpSpecDirectory: true
    });
    featureFilePath = `${tmpSpecDirectory}/*.feature`
  // } else {
  //  otherFeaturefilePath = './build/features/*.feature'
  // }

   const drivers = {
    chrome: { version: '98.0.4758.102' }
   }

exports.config = {
  // ====================
  // Runner Configuration
  // ====================
  // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
  // on a remote machine).
  'runner': 'local',
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called. Notice that, if you are calling `wdio` from an
  // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
  // directory is where your package.json resides, so `wdio` will be called from there.
  'chromeOptions': {
    prefs: {
      'profile.managed_default_content_settings.popups': 2,
      'profile.managed_default_content_settings.notifications': 2,
    },
  },
  'specs': [
     featureFilePath,
    //'./test/inbox/addNotes.spec.js',
  ],
  'suites': {
    //feat: [otherFeaturefilePath],
    temp : [featureFilePath]
  },
     
  // Patterns to exclude.
  // 'exclude': [
  //   // 'path/to/excluded/files'
  // ],
  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  'maxInstances': 1,
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://docs.saucelabs.com/reference/platforms-configurator
  //

  'capabilities': [
    {
      'maxInstances': 1,
      'browserName': 'chrome',
      
      'goog:chromeOptions': {
       args: ['--headless', '--disable-gpu', '--window-size=1366,768'],
        prefs: {
          'profile.managed_default_content_settings.popups': 1,
          'profile.managed_default_content_settings.notifications': 1,
        },
        binary: process.env.executablePath
      },
    },
  //  {
  //  'browserName': 'firefox',
  // },
  ],

  // capabilities: {
  //   myChromeBrowser: {
  //     capabilities: {
  //       browserName: 'firefox',
  //       'goog:chromeOptions': {
  //         prefs: {
  //           'profile.managed_default_content_settings.popups': 1,
  //           'profile.managed_default_content_settings.notifications': 1,
  //         },
  //       },
  //     },
  //   },
  //   myChromeBrowser2: {
  //     capabilities: {
  //       browserName: 'firefox',
  //     },
  //   },
  // },

  // capabilities: [{ browserName: 'chrome', 'goog:chromeOptions': { args: [ 'disable-infobars', 'disable-popup-blocking', 'disable-notifications' ], } }],
  // maxInstances can get overwritten per capability. So if you have an in-house Selenium
  // grid with only 5 firefox instances available you can make sure that not more than
  // 5 instances get started at a time.
  // maxInstances: 2,
  //
  // browserName: 'chrome',
  // (acceptInsecureCerts: true),
  // If outputDir is provided WebdriverIO can capture driver session logs
  // it is possible to configure which logTypes to include/exclude.
  // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
  // excludeDriverLogs: ['bugreport', 'server'],
  //  },
  // ],
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  'logLevel': 'error',
  // logLevel: 'warn' | 'error',
  //
  // Set specific log levels per logger
  // loggers:
  // - webdriver, webdriverio
  // - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
  // - @wdio/mocha-framework, @wdio/jasmine-framework
  // - @wdio/local-runner
  // - @wdio/sumologic-reporter
  // - @wdio/cli, @wdio/config, @wdio/sync, @wdio/utils
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  // logLevels: {
  //     webdriver: 'info',
  //     '@wdio/applitools-service': 'info'
  // },
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  'bail': 0,
  //
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  // 'baseUrl': '',
  //baseUrl: 'https://pre-alpha.answerconnect.app/',
  baseUrl:'',
  // Default timeout for all waitFor* commands.
  'waitforTimeout': 15000,
  //
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  'connectionRetryTimeout': 30000,
  //
  // Default request retries count
  'connectionRetryCount': 1,
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  // 'services': ['selenium-standalone'],
    'services': [
        ['selenium-standalone', {
            logPath: 'logs',
            installArgs: { drivers },
            args: { drivers }
        }]
    ],
  //  services: [
  //   ['chromedriver', {
  //       logFileName: 'wdio-chromedriver.log', // default
  //       outputDir: 'driver-logs', // overwrites the config.outputDir
  //       args: ['--silent'],
  //       chromedriverCustomPath: '/Users/yokesh/Downloads/chromedriver'
  //   }]
  // ],
  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: https://webdriver.io/docs/frameworks.html
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  'framework': 'cucumber',
  'cucumberOpts': {
    require: ['./build/step-definition/*.js'],
    backtrace: false,
    dryRun: false,
    failFast: false, // Fail on first step, useful for debugging
    snippets: true, // Show pending step suggestions
    ignoreUndefinedDefinitions: true, // Treat undefined definitions as warnings
    timeout: 60000
  },
  //
  // The number of times to retry the entire specfile when it fails as a whole
  // specFileRetries: 1,
  //
  // Delay in seconds between the spec file retry attempts
  // specFileRetriesDelay: 0,
  //
  // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
  // specFileRetriesDeferred: false,
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: https://webdriver.io/docs/dot-reporter.html
   'reporters': [
  //   // [video, {
  //   //   saveAllVideos: false, // If true, also saves videos for successful test cases
  //   //   videoSlowdownMultiplier: 3, // Higher to get slower videos, lower for faster videos [Value 1-100]
  //   //   outputDir: 'video-reporting',
  //   // }],
    [
      'allure',
      {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],
  // Options to be passed to Mocha.
  // See the full list at http://mochajs.org/
  'mochaOpts': {
    // ui: 'bdd',
    timeout: 99999999,
  },
  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  /**
  * Gets executed once before all workers get launched.
  * @param {Object} config wdio configuration object
  * @param {Array.<Object>} capabilities list of capabilities details
  */
  // onPrepare: function (config, capabilities) {
  // },
  //   /**
  //    * Gets executed before a worker process is spawned and can be used to initialise specific service
  //    * for that worker as well as modify runtime environments in an async fashion.
  //    * @param  {String} cid      capability id (e.g 0-0)
  //    * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
  //    * @param  {[type]} specs    specs to be run in the worker process
  //    * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
  //    * @param  {[type]} execArgv list of string arguments passed to the worker process
  //    */
  //   // onWorkerStart: function (cid, caps, specs, args, execArgv) {
  //   // },
  //   /**
  //    * Gets executed just before initialising the webdriver session and test framework. It allows you
  //    * to manipulate configurations depending on the capability or spec.
  //    * @param {Object} config wdio configuration object
  //    * @param {Array.<Object>} capabilities list of capabilities details
  //    * @param {Array.<String>} specs List of spec file paths that are to be run
  //    */
  // beforeSession: function (config, capabilities, specs) {
  // },
  //   /**
  //    * Gets executed before test execution begins. At this point you can access to all global
  //    * variables like `browser`. It is the perfect place to define custom commands.
  //    * @param {Array.<Object>} capabilities list of capabilities details
  //    * @param {Array.<String>} specs        List of spec file paths that are to be run
  //    * @param {Object}         browser      instance of created browser/device session
  //    */

  'before': function(capabilities, specs) {
    Object.keys(commands).forEach((key) => {
      browser.addCommand(key, commands[key]);
    });
    require('expect-webdriverio'); // added except assertion
    global.wdioExpect = global.expect;

    const chai = require('chai'); // added chai assertion
    global.expect = chai.expect;
    global.should = chai.should;
    // added chai assertion for arrays
    const assertArrays = require('chai-arrays');
    chai.use(assertArrays);
  },
  /**
 * Runs before a WebdriverIO command gets executed.
 * @param {String} commandName hook command name
 * @param {Array} args arguments that command would receive
 */
  // beforeCommand: function (commandName, args) {
  // },
  /**
 * Hook that gets executed before the suite starts
 * @param {Object} suite suite details
 */
  // beforeSuite: function (suite) {
  // },
  /**
 * Function to be executed before a test (in Mocha/Jasmine) starts.
 */
  // beforeTest: function (test, context) {
  //     browser.url('/')
  //     browser.maximizeWindow()
  // },

  /**
 * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
 * beforeEach in Mocha)
 */
  // beforeHook: function (test, context) {
  // },
  /**
 * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
 * afterEach in Mocha)
 */
  // afterHook: function (test, context, { error, result, duration, passed, retries }) {
  // },
  /**
 * Function to be executed after a test (in Mocha/Jasmine).
 */

  // afterStep: function (test, context, { error, result, duration, passed, retries }) {
  //     if (error) {
  //         browser.takeScreenshot();
  //     }
  // },

  'afterTest': function(test, context, {error, result, duration, passed, retries}) {
    if (passed) {
      return;
    } else {
      browser.takeScreenshot();
    }
  },

  /**
 * Hook that gets executed after the suite has ended
 * @param {Object} suite suite details
 */
  // afterSuite: function (suite) {
  // },
  /**
 * Runs after a WebdriverIO command gets executed
 * @param {String} commandName hook command name
 * @param {Array} args arguments that command would receive
 * @param {Number} result 0 - command success, 1 - command error
 * @param {Object} error error object if any
 */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
 * Gets executed after all tests are done. You still have access to all global variables from
 * the test.
 * @param {Number} result 0 - test pass, 1 - test fail
 * @param {Array.<Object>} capabilities list of capabilities details
 * @param {Array.<String>} specs List of spec file paths that ran
 */
  // after: function (result, capabilities, specs) {
  // },
  /**
 * Gets executed right after terminating the webdriver session.
 * @param {Object} config wdio configuration object
 * @param {Array.<Object>} capabilities list of capabilities details
 * @param {Array.<String>} specs List of spec file paths that ran
 */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
 * Gets executed after all workers got shut down and the process is about to exit. An error
 * thrown in the onComplete hook will result in the test run failing.
 * @param {Object} exitCode 0 - success, 1 - fail
 * @param {Object} config wdio configuration object
 * @param {Array.<Object>} capabilities list of capabilities details
 * @param {<Object>} results object containing test results
 */
  // onComplete: function(exitCode, config, capabilities, results) {
  // },
  /**
 * Gets executed when a refresh happens.
 * @param {String} oldSessionId session ID of the old session
 * @param {String} newSessionId session ID of the new session
 */
  // onReload: function(oldSessionId, newSessionId) {
  // }
  // onPrepare: () => {
  //       // Remove the `tmp/` folder that holds the json report files
  //       removeSync(parallelExecutionReportDirectory);
  //   },
    // onComplete: () => {

    //     try{
    //         let consolidatedJsonArray = wdioParallel.getConsolidatedData({
    //             parallelExecutionReportDirectory: parallelExecutionReportDirectory
    //         });

    //         let jsonFile = `${parallelExecutionReportDirectory}report.json`;
    //         fs.writeFileSync(jsonFile, JSON.stringify(consolidatedJsonArray));
    
    //         // The below code is not part of wdio-cucumber-parallel-execution module
    //         // but is mentioned to show, how it can be used with other reporting modules
    //         var options = {
    //             theme: 'bootstrap',
    //             jsonFile: jsonFile,
    //             output: `tests/reports/html/report-${currentTime}.html`,
    //             reportSuiteAsScenarios: true,
    //             scenarioTimestamp: true,
    //             launchReport: true,
    //             ignoreBadJsonFile: true
    //         };
    
    //         reporter.generate(options);
    //     } catch(err){
    //         console.log('err', err);
    //     }
    // }
      onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    }
}
  //   plugins: {
  //     'wdio-webcomponents': {},
  //   }
