var basePage = require('./BasePage');

var SignUpPage = function () {

    var loginOrRegister_btn = element(by.id('login-btn'));

    var fullname_txt = element(by.css('#fullName'));

    var dob_month_dropdown = element(by.name('dobMonth'));
    var dob_day_dropdown = element(by.name('dobDay'));
    var dob_year_dropdown = element(by.name('dobYear'));

    var mobile_txt = element(by.name('mobileNum'));
    var email_txt = element(by.name('emailId'));
    var password_txt = element(by.name('password'));
    var confirmPassword_txt = element(by.name('confirmPassword'));

    var drivingLicense_file = element(by.name('licenceFileSelect'));
    var aadharCard_file = element(by.name('addressProofSelect'));
    var register_btn = element(by.css('.btn.btn-primary.pull-right.ng-binding'));

    this.clickOnSignUp = async () => {
        await basePage.clickOn(loginOrRegister_btn);
        var register_link = element.all(by.css("a[href='/register']"));
        await basePage.clickOn(register_link.get(1));
    };

    this.enterInvalidDetails = async () => {
        await basePage.enterText(fullname_txt, 'FullName');
        await basePage.assertOnAttributeValue(fullname_txt, 'FullName');

        await basePage.selectFromDropdown(dob_month_dropdown, 'Jan');
        await basePage.selectFromDropdown(dob_day_dropdown, '2');
        await basePage.selectFromDropdown(dob_year_dropdown, '2018');

        await basePage.enterText(mobile_txt, '9123456789');
        await basePage.enterText(email_txt, 'email');
        await basePage.enterText(password_txt, 'password');
        await basePage.enterText(confirmPassword_txt, 'password');

        await basePage.uploadFile(drivingLicense_file, '/src/resources/files/Document.png');
        await basePage.uploadFile(aadharCard_file, '/src/resources/files/Document.png');
        await basePage.clickOn(register_btn);
    }

};
module.exports = new SignUpPage();