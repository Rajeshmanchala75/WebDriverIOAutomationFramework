const loginPage = require('../pageobjects/loginpage');
const logoutPage = require('../pageobjects/logoutpage');
const commonFn = require('../pageobjects/commonFunctions');
const pim = require('../pageobjects/pim');
const importData = require('../pageobjects/dataimport');
require('../Utility/com');

const chance = require("chance").Chance();
let rnd = chance.string({ length: 4, numeric: true });
require('dotenv').config()
const fs = require('fs');
const { Click, type } = require('../pageobjects/commonFunctions');
const { Clickbtn } = require('../Utility/com');

let credentials = JSON.parse(fs.readFileSync('test/testData/loginCred.json'))
credentials.forEach(({ username, Password, invusername, invPassword }) => {
  describe('login functionality', async () => {
    //credentials.forEach(({ username, Password, invusername, invPassword }) => {

    it('login with  valid username and password', async () => {
      await browser.url(process.env.url);
      await expect(browser).toHaveTitle('OrangeHRM');
      await loginPage.HRMlogin(process.env.user_name, process.env.password);
      browser.pause(5000);
      await logoutPage.HRMlogout();
    });


    it('login without username and password ', async () => {
      await loginPage.launch();
      await expect(browser).toHaveTitle('OrangeHRM');
      await loginPage.HRMlogin(invusername, invPassword);
      //await logoutPage.HRMlogout();

    });

    it('search for user', async () => {
      await loginPage.launch();
      await expect(browser).toHaveTitle('OrangeHRM');
      await loginPage.HRMlogin(username, Password);
      await pim.searchUser('Employment Status', 'Freelance', 'PIM')
      await logoutPage.HRMlogout();
    });

    it('Calender Handling', async () => {
      await loginPage.launch();
      await expect(browser).toHaveTitle('OrangeHRM');
      await loginPage.HRMlogin(username, Password);
      await (await browser.$("//span[text()='Leave']")).click();
      await commonFn.dateSelection('From Date', '2022-06-25');
      await logoutPage.HRMlogout();
    });

    it('dropdown functions', async () => {
      await loginPage.launch();
      await expect(browser).toHaveTitle('OrangeHRM');
      await loginPage.HRMlogin(username, Password);
      await commonFn.handlingDropDown('Employment Status', 'Freelance');
      browser.pause(5000);
      await logoutPage.HRMlogout();
    });

    it('dropdown functions', async () => {
      await loginPage.launch();
      await expect(browser).toHaveTitle('OrangeHRM');
      await loginPage.HRMlogin(username, Password);
      await importData.importingdata();
      browser.pause(5000);
      await logoutPage.HRMlogout();
    });

    it('click function checking', async () => {
      await loginPage.launch();
      await expect(browser).toHaveTitle('OrangeHRM');
     // await loginPage.HRMlogin(username, Password);
     await type(await loginPage.username,);
      //$('button[type="submit"]');
      //  await commonFn.click(loginPage.loginbtn);
      await Click(await loginPage.loginbtn);
      await importData.importingdata();
      browser.pause(5000);
      await logoutPage.HRMlogout();
    });

    it('click function checking1', async () => {
      await loginPage.launch();
      await expect(browser).toHaveTitle('OrangeHRM');
      await loginPage.HRMlogin(username, Password);
      //$('button[type="submit"]');
      //  await commonFn.click(loginPage.loginbtn);
      //await Click(await loginPage.loginbtn);
      //  await comf.Clickbtn(await loginPage.loginbtn);
      await Clickbtn(await loginPage.loginbtn);
      await importData.importingdata();
      browser.pause(5000);
      await logoutPage.HRMlogout();
    }); 

    it.only('click function checking1', async () => {
      let readata=fs.ReadStream("./test/input/importDatanew.csv");
      console.log(readata);
      console.log(readata);
      console.log(readata);
      console.log(readata);
      // await loginPage.launch();
      // await expect(browser).toHaveTitle('OrangeHRM');
      // await loginPage.HRMlogin(username, Password);
      // //$('button[type="submit"]');
      // //  await commonFn.click(loginPage.loginbtn);
      // //await Click(await loginPage.loginbtn);
      // //  await comf.Clickbtn(await loginPage.loginbtn);
      // await Clickbtn(await loginPage.loginbtn);
      // await importData.importingdata();
      // browser.pause(5000);
      // await logoutPage.HRMlogout();
    });
  });
});

  //});
//});

