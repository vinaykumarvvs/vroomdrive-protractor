var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    getPageTimeout: 1000000,

    allScriptsTimeout: 180000,

    framework: 'custom',

    baseUrl: 'https://www.vroomdrive.com',

    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // directConnect: true,

    // chromeDriver: '/src/resources/drivers/chromedriver',

    capabilities: {
        'browserName': 'chrome',
        shardTestFiles: true,
        maxInstances: 2,

        // Firefox Options
        // 'moz:firefoxOptions': {
        //     args: ['--headless']
        // }

        // Chrome Options
        chromeOptions: {
            // args: ["--headless", "--disable-gpu", "--window-size=800x600"]
            args: ["--headless",  "--disable-gpu"]
        }
    },

    // Run Chrome & Firefox Parallely
    // multiCapabilities: [{
    //     'browserName': 'firefox'
    // }, {
    //     'browserName': 'chrome'
    // }],

    specs: [
        './src/resources/features/*.feature'
    ],

    cucumberOpts: {
        compiler: ['js:babel-register'],
        require: './src/js/step_definitions/*.js',
        format: 'json:./reports/json/cucumber_report.json',
        // format: `pretty`
        // defaultTimeoutInterval: 160000,
    },

    onPrepare: function () {
        var chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);
        global.expect = chai.expect;
    }
};