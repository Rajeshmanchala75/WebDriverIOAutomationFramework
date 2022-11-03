const loginPage = require('../pageobjects/loginpage');
const logoutPage = require('../pageobjects/logoutpage');
require('dotenv').config()
const fs = require('fs');

let credentials = JSON.parse(fs.readFileSync('test/testData/loginCred.json'))
credentials.forEach(({ username, Password, invusername, invPassword }) => {
  describe('login functionality', async () => {
    // credentials.forEach( ({username,Password,invusername,invPassword})   =>{ 

    it.only('login with  valid username and password', async () => {
      //await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      //await loginPage.launch();
      await browser.url(process.env.url);
      await expect(browser).toHaveTitle('OrangeHRM');
       await loginPage.HRMlogin(process.env.user_name,process.env.password);
     // await LP.HRMlogin(process.env.user_name, process.env.password);

      await logoutPage.HRMlogout();
      console.log('hi Rajesh');

    });


    it('login without username and password ', async () => {
      await loginPage.launch();
      await expect(browser).toHaveTitle('OrangeHRM');
      await loginPage.HRMlogin(invusername, invPassword);
      await logoutPage.HRMlogout();
      console.log('hi');
    });

    it('login without username and password ', async () => {
      await loginPage.launch();
      await expect(browser).toHaveTitle('OrangeHRM');
      await loginPage.HRMlogin(username, Password);
      await logoutPage.HRMlogout();
      console.log('hi');
    });

    it('login without username and password ', async () => {
      await loginPage.launch();
      await expect(browser).toHaveTitle('OrangeHRM');
      await loginPage.HRMlogin(username, Password);
      await logoutPage.HRMlogout();
      console.log('hi');

    });
  });
});

