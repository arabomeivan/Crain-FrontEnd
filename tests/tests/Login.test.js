// tests/Login.test.js
const { Builder } = require('selenium-webdriver');
const LoginPage = require('../pages/LoginPage.js');

let driver;
let loginPage;

beforeAll(async () => {
  driver = await new Builder().forBrowser('chrome').build();  // Ensure Chrome driver is available and installed
  loginPage = new LoginPage(driver);
}, 60000); // 60 seconds timeout for beforeAll

afterAll(async () => {
  await driver.quit();
}, 60000); // 60 seconds timeout for afterAll


test('should show error message for invalid login', async () => {
  await loginPage.open();
  await loginPage.enterUsername('invalidUser');
  await loginPage.enterPassword('invalidPass');
  await loginPage.clickLoginButton();


  const currentUrl = await loginPage.getCurrentUrl();
  expect(currentUrl).toBe(loginPage.url);

  const errorMessage = await loginPage.getErrorMessage();
  expect(errorMessage).toBe('Invalid username or password. Please try again.');
});
