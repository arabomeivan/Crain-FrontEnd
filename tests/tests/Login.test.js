// tests/Login.test.js
const { Builder } = require('selenium-webdriver');
const LoginPage = require('../pages/LoginPage.js');
const chrome = require('selenium-webdriver/chrome');
function delay(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}
let driver;
let loginPage;

beforeAll(async () => {

  const options = new chrome.Options();
  options.addArguments('--headless'); // Enable headless mode
  options.addArguments('--disable-gpu'); // Disable GPU acceleration (optional but recommended)
  options.addArguments('--no-sandbox'); // Disable the sandbox (optional but recommended)
  options.addArguments('--disable-dev-shm-usage'); // Disable the use of /dev/shm (optional but recommended)

  driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
  loginPage = new LoginPage(driver);

}, 60000); // 60 seconds timeout for beforeAll

afterAll(async () => {
  await driver.quit();
}, 60000); // 60 seconds timeout for afterAll


test('Verify error message for invalid login', async () => {
  await loginPage.open();
  await loginPage.enterUsername('invalidUser');
  await loginPage.enterPassword('invalidPass');
  await delay(3000);
  await loginPage.clickLoginButton();


  const currentUrl = await loginPage.getCurrentUrl();
  expect(currentUrl).toBe(loginPage.url);

  const errorMessage = await loginPage.getErrorMessage();
  await delay(3000);
  expect(errorMessage).toBe('Invalid username or password. Please try again.');
});

test('Verify User cannnot Login with Invalid Details', async () => {
  await loginPage.open();
  await loginPage.enterUsername('arabomeivannn');
  await loginPage.enterPassword('Atleticomadrid_2.');
  await delay(3000);
  await loginPage.clickLoginButton();


  const currentUrl = await loginPage.getCurrentUrl();
  await delay(3000);
  expect(currentUrl).toBe('https://crain-front-end.vercel.app/');
});


test('Verify login was succesful', async () => {
  await loginPage.open();
  await loginPage.enterUsername('arabomeivan');
  await loginPage.enterPassword('Atleticomadrid_2.');
  await delay(3000);
  await loginPage.clickLoginButton();

  await delay(5000);
  const currentUrl = await loginPage.getCurrentUrl();
  expect(currentUrl).toBe('https://crain-front-end.vercel.app/charts');
});


