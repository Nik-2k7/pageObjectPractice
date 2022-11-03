const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      restart: false,
      ignoreHTTPSErrors: true,
      chrome: {
        args: ['--no-sandbox', '--disable-dev-shm-usage', '--start-maximized', '--single-process', '--ignore-certificate-errors', '--ignore-certificate-errors-spki-list',],
        defaultViewport: null,

      },
    }
  },
  include: {
    "I": "./steps_file.js",
    "practice_pageobjectPage": "./pages/Practice_pageobject.js"
  },
  name: 'page_objects_practices'
}