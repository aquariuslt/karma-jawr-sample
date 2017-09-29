var pathUtil = require('../utils/path.util');
var webpackTestConfig = require('./webpack.test.config');

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
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-jawr'
    ],
    frameworks: [
      'jawr',
      'mocha',
      'sinon-chai'
    ],
    files: [
      pathUtil.resolve('src/test/js/unit/specs') + '/**/*.spec.js'
    ],
    reporters: [
      'spec',
      'coverage-istanbul'
    ],
    preprocessors: {
      '/**/*.spec.js': ['webpack', 'sourcemap']
    },
    jawr: {
      configLocation: pathUtil.resolve('src/main/resources/jawr/') + 'jawr.properties',
      webappLocation: pathUtil.resolve('src/main/webapp'),
      targetLocation: pathUtil.resolve('src/test/js/build'),
      localeConfigLocation: pathUtil.resolve('src/main/resources')
    },
    coverageIstanbulReporter: {
      dir: pathUtil.resolve('src/test/js/unit') + '/coverage',
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
      skipFilesWithNoCoverage: true,
      thresholds: {
        emitWarning: false,
        global: {
          statements: 1,
          lines: 1,
          branches: 1,
          functions: 1
        }
      }
    },
    webpack: webpackTestConfig,
    webpackMiddleware: {
      stats: 'errors-only',
      noInfo: true
    }
  });
};
