// tests/pages/LoginPage.js
const { By, until } = require('selenium-webdriver');

class LoginPage {
  constructor(driver) {
    this.driver = driver;
    this.url = 'https://crain-front-end.vercel.app/'; // Change to your application's URL
  }

  async open() {
    await this.driver.get(this.url);
  }

  async enterUsername(username) {
    const usernameField = await this.driver.wait(until.elementLocated(By.id('username')), 10000);
    await usernameField.sendKeys(username);
  }

  async enterPassword(password) {
    const passwordField = await this.driver.wait(until.elementLocated(By.id('password')), 10000);
    await passwordField.sendKeys(password);
  }

  async clickLoginButton() {
    const loginButton = await this.driver.findElement(By.id('loginButton'));
    await loginButton.click();
  }

  async getCurrentUrl() {
    return await this.driver.getCurrentUrl();
  }

  async getErrorMessage() {
    const errorMessage = await this.driver.wait(until.elementLocated(By.id('errorMessage')), 10000);
    return await errorMessage.getText();
  }
}

module.exports = LoginPage;
