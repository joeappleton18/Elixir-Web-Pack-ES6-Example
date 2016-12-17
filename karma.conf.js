
// Karma configuration

var webpackConf = require('./webpack.config.js');
delete webpackConf.entry;

module.exports = function(config) {
    config.set({

        frameworks: ['jasmine'],

        colors: true,

        logLevel: config.LOG_INFO,

        reporters: ['progress'], // dots, progress

        autoWatch: true, // enable / disable watching files & then run tests

        browsers: ['Chrome'], //'PhantomJS', 'Firefox',

        singleRun: true, // if true, Karma captures browsers, runs the tests and exits

        concurrency: Infinity, // how many browser should be started simultaneous

        webpack: webpackConf, // Pass your webpack.config.js file's content

        webpackMiddleware: {
            noInfo: true,
            stats: 'errors-only'
        },

        files: [

            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'dist/js/app.js',
            'src/js/tests/**/*.js',
            'views/**/*.html',
            'dist/js/app.js'
        ],

        // list of files to exclude
        exclude: [
        ],

        /**
         * pre-process matching files before serving them to the browser
         * Add your App entry point as well as your Tests files which should be
         * stored under the tests directory in your basePath also this expects
         * you to save your tests with a .spec.js file extension. This assumes we
         * are writing in ES6 and would run our file through babel before webpack.
         */
        preprocessors: {
            'app.js': ['webpack', 'babel'],
            'tests/**/*.spec.js': ['babel', 'webpack'],
            'views/home/**/*.html': ['ng-html2js']
        },
        ngHtml2JsPreprocessor: {
            stripPrefix: 'views/',
            moduleName: 'ngTemplates' //you can name this whatever you want
        }
    })
}
