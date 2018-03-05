var pathUtil = require('../utils/path.util');
var webpackTestConfig = require('./webpack.test.config');

var puppeteer = require('puppeteer');

process.env.CHROMIUM_BIN = puppeteer.executablePath();

module.exports = function(config) {
  config.set({
    logLevel: config.LOG_DEBUG,
    browsers: [
      'ChromiumHeadlessNoSandbox'
    ],
    useIframe: true,
    runInParent: false,
    plugins: [
      'karma-chrome-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-coverage',
      'karma-coverage-istanbul-reporter',
      'karma-sourcemap-loader',
      'karma-spec-reporter',
      'karma-junit-reporter',
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
      pathUtil.resolve('src/main/webapp/js/vendor/ext') + '/ext-base.js',
      pathUtil.resolve('src/main/webapp/js/vendor/ext') + '/ext-all.js',
      pathUtil.resolve('src/test/js/unit/specs') + '/**/*.spec.js'
    ],
    reporters: [
      'spec',
      'coverage-istanbul',
      'junit'
    ],
    preprocessors: {
      '/**/*.spec.js': ['webpack', 'sourcemap']
    },
    jawr: {
      configLocation: pathUtil.resolve('src/main/resources/jawr') + '/jawr.properties',
      webappLocation: pathUtil.resolve('src/main/webapp'),
      targetLocation: pathUtil.resolve('src/test/js/build'),
      localeConfigLocation: pathUtil.resolve('src/main/resources')
    },
    coverageIstanbulReporter: {
      dir: pathUtil.resolve('src/test/js/unit') + '/coverage',
      reports: [
        'html',
        'lcovonly',
        'text-summary'
      ],
      fixWebpackSourcePaths: false,
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
    junitReporter: {
      outputDir: pathUtil.resolve('src/test/js/unit') + '/coverage',
      outputFile: 'test-results.xml',
      useBrowserName: false
    },
    webpack: webpackTestConfig,
    webpackMiddleware: {
      stats: 'errors-only',
      noInfo: true
    },
    customLaunchers: {
      ChromiumHeadlessNoSandbox: {
        base: 'ChromiumHeadless',
        flags: ['--no-sandbox']
      }
    }
  });
};
