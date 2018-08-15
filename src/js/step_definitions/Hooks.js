import { defineSupportCode } from 'cucumber';
import { browser } from '../../../node_modules/protractor';

defineSupportCode(function ({ registerHandler }) {

  registerHandler('BeforeScenario', function (scenario) {
    browser.get('/');
    browser.driver.manage().window().maximize();
    browser.driver.manage().timeouts().implicitlyWait(2000);
  });

  registerHandler('AfterScenario', function (scenario) {
    browser.quit();
  });

  registerHandler('After', function (scenario) {
    if (scenario.result.status === Status.FAILED) {
      const attach = this.attach; // cucumber's world object has attach function which should be used
      return browser.takeScreenshot().then(function (png) {
        const decodedImage = new Buffer(png, "base64");
        return attach(decodedImage, "image/png");
      });
    }
  })

});