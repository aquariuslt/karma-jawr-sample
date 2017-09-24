var pathUtil = require('../utils/path.util');

var puppeteerPkg = require('puppeteer/package.json');
var Downloader = require('puppeteer/utils/ChromiumDownloader');

var ChromiumRevision = puppeteerPkg['puppeteer']['chromium_revision'];
var revisionInfo = Downloader.revisionInfo(Downloader.currentPlatform(), ChromiumRevision);
process.env.CHROMIUM_BIN = revisionInfo.executablePath;

module.exports = function(config) {
  config.set({
    browsers: [
      'ChromiumHeadless'
    ],
    plugins: [
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-coverage-istanbul-reporter',
      'karma-mocha',
      'karma-sinon-chai',
      'karma-spec-reporter',
      'karma-jawr',
      'karma-jawr-preprocessor'
    ],
    frameworks: [
      'mocha',
      'sinon-chai',
      'jawr'
    ],
    files: [
      pathUtil.resolve('src/test/js/unit/specs') + '/**/*.spec.js'
    ],
    reporters: [
      'spec',
      'coverage-istanbul'
    ],
    jawrPreprocessor: {
      jawrLoader: {
        resources: ['hello']
      }
    },
    coverageIstanbulReporter: {
      dir: pathUtil.resolve('src/test/js/unit') + '/coverage',
      reports: ['html', 'lcovonly', 'text-summary'],
      skipFilesWithNoCoverage: true,
      thresholds: {
        emitWarning: false,
        global: {
          statements: 80,
          lines: 80,
          branches: 80,
          functions: 80
        }
      }
    },
    jawr: {
      type: 'properties'
    }
  });
};
