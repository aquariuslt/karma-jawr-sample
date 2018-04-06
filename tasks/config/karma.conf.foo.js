var webpackTestConfig = require('./webpack.test.config');
var profileConfig = require('./profile.config');
var pathUtil = require('../utils/path.util');

var puppeteer = require('puppeteer');
process.env.CHROMIUM_BIN = puppeteer.executablePath();

module.exports = function(config) {
  config.set({
    logLevel: config.LOG_DEBUG,
    customLaunchers: {
      ChromiumHeadlessNoSandbox: {
        base: 'ChromiumHeadless',
        flags: ['--no-sandbox']
      }
    },
    browsers: [
      'ChromiumHeadlessNoSandbox'
    ],
    plugins: [
      'karma-chrome-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-spec-reporter',
      'karma-coverage',
      'karma-coverage-istanbul-reporter',
      'karma-sourcemap-loader',
      'karma-sinon',
      'karma-webpack',
      'karma-jawr'
    ],
    frameworks: [
      'jawr',
      'mocha',
      'sinon',
      'chai'
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
      configLocation: profileConfig.foo.mappings[0].output,
      webappLocation: pathUtil.resolve('src/main/webapp'),
      targetLocation: pathUtil.resolve('src/test/js/build'),
      localeConfigLocation: pathUtil.resolve('src/main/resources')
    },
    webpack: webpackTestConfig,
    webpackMiddleware: {
      stats: 'errors-only',
      noInfo: true
    },
    coverageIstanbulReporter: {
      dir: pathUtil.resolve('src/test/js/unit') + '/coverage/foo',
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
    }
  });
};
