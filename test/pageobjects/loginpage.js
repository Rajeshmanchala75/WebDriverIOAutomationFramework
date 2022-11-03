const Page = require('./page');
const commonFunctions = require("./commonFunctions");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class loginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get Username() {
        return $('//input[@name="username"]');
    }

    get Password() {
        return $('//input[@name="password"]');
    }

    get loginbtn() {
        return $('button[type="submit"]');
    }
    get logintext() {
        return $("//h5[text()='Login']");
    }
    get forgotpassword() {
        return $("//p[text()='Forgot your password? ']");
    }
    get empinformation() {
        return $("//h5[text()='Employee Information']");
    }
    
    /**""
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async HRMlogin(username, password) {
        await browser.maximizeWindow();
        await this.logintext.waitForDisplayed({ timeout: 10000 });
        await this.Username.setValue(username);
        await this.Password.setValue(password);
       // await this.loginbtn.click();
        //await this.empinformation.waitForDisplayed({ timeout: 10000 });

    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('HRMlogin');
    }
    launch(){
        return super.launch();
    }
    dateSelection(value)
    {
        return super.dateSelection(value)
    }
}

module.exports = new loginPage();
