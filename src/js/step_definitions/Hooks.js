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

});