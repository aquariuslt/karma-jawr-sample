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
    frameworks: [
      'mocha',
      'sinon-chai'
    ],
    files: [
      pathUtil.resolve('src/test/js/unit/specs/**/*.spec.js')
    ],
    reporters: [
      'spec',
      'coverage-istanbul'
    ],
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
    }
  });
};
