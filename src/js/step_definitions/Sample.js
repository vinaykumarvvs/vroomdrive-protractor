
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {

    this.setDefaultTimeout(60 * 1000);

    this.Given(/^I navigates to the URL$/, function (callback) {
        browser.get("https://www.vroomdrive.com/").then(callback);
    });

    this.Then(/^I enter To and From date$/, function (callback) {
        browser.driver.sleep(10000)
            .then(() => element(by.id('dateRangeStart')).click());

        // Select To-Date
        var tomorrow = new Date();
        var day = tomorrow.getDate + 1;
        var length = element.all("//*[text()='4']").count();
        console.log("jhbghdjbf")
    });
};