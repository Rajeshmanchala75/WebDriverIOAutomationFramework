
const { Click, type } = require('../pageobjects/commonFunctions');
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
//const commonFunctions = require("./commonFunctions");
describe('My Login application', () => {
  it('should login with valid credentials', async () => {
    await LoginPage.open();
    browser.pause(2000);
    // await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    await type(await LoginPage.inputUsername, 'tomsmith')
    await type(await LoginPage.inputPassword, 'SuperSecretPassword!')

    // await click(LoginPage.btnSubmit);
    //  browser.pause();
    await Click(await LoginPage.btnSubmit);
    //await Click('button[type="submit"]');
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(
      'You logged into a secure area!');
  });
});


