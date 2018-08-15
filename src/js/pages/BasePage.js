var EC = protractor.ExpectedConditions;
let wait = 10000;

let BasePage = {

    clickOn: function (element) {
        return browser.wait(EC.visibilityOf(element), wait)
            .then(element.click());
    },

    enterText: function (element, text) {
        return browser.wait(EC.visibilityOf(element), wait)
            .then(element.sendKeys(text));
    },

    selectFromDropdown: function (element, text) {
        return browser.wait(EC.visibilityOf(element), wait)
            .then(element.all(by.cssContainingText('option', text)).click());
    },

    uploadFile: function (element, path) {
        return browser.wait(EC.visibilityOf(element), wait)
            .then(element.sendKeys(process.env.PWD + path));
    },

    assertOnAttributeValue: function (element, text) {
        return browser.wait(EC.visibilityOf(element), wait).then(
            element.getAttribute('value').then(function (textFromWeb) {
                expect(textFromWeb).to.equal(text);
            })
        );
    },

    assertOnText: function (element, text) {
        return browser.wait(EC.visibilityOf(element), wait).then(
            element.getText().then(function (textFromWeb) {
                expect(textFromWeb).to.equal(text);
            })
        );
    }

}

module.exports = BasePage;
