import { defineSupportCode } from 'cucumber';
import { setDefaultTimeout } from 'cucumber';

let signUpPage = require('./../pages/SignUpPage');

setDefaultTimeout(60 * 1000);

defineSupportCode(({ Given, Then }) => {

    Given(/^an user clicks on register$/, function () {
        return signUpPage.clickOnSignUp();
    });

    Then(/^user will enter the details$/, function () {
        return signUpPage.enterInvalidDetails();
    });

});