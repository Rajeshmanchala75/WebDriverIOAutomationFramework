const commonFunctions = require("./commonFunctions");



/**
 * sub page containing specific selectors and methods for a specific page
 */
class pim {
    /**
     * define selectors using getter methods
     */
    get empname() {
        return $("//label[text()='Employee Name']/../..//input");
    }

    get empid() {
        return $("//label[text()='Employee Id']/../..//input");
    }

    get loginbtn() {
        return $('button[type="submit"]');
    }
    get searchbutton() {
        return $("//button[@type='submit']");
    }
    get empinfotable() {
        return $("//div[@class='oxd-form-row']");
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
        await this.loginbtn.click();
        await (await this.empinformation).waitForDisplayed({ timeout: 10000 });

    }
    async searchUser(labelfieldname, value, Linkname) {
        await browser.$("//li[@class='oxd-main-menu-item-wrapper']/../.././/span[text()='" + Linkname + "']").waitForDisplayed({ timeout: 10000 })
        await browser.$("//li[@class='oxd-main-menu-item-wrapper']/../.././/span[text()='" + Linkname + "']").click();

        if (labelfieldname == 'Employee Id' ||
            labelfieldname == 'Supervisor Name') {

            await this.empinfotable.waitForDisplayed({ timeout: 20000 });
            await browser.$("//label[text()='" + labelfieldname + "']").isDisplayed();
            await browser.$("//label[text()='" + labelfieldname + "']/../..//input").setValue(value);
        }
        else if (labelfieldname == 'Employee Name') {

            await this.empinfotable.waitForDisplayed({ timeout: 20000 });
            await browser.$("//label[text()='" + labelfieldname + "']").isDisplayed();
            await browser.$("//label[text()='" + labelfieldname + "']/../..//input").setValue(value);
            await browser.pause(5000);
            await browser.$("//div[@class='oxd-autocomplete-option']").waitForDisplayed({ timeout: 5000 });
            await browser.$("//div[@class='oxd-autocomplete-option']").click();
        }
        else {
            await commonFunctions.handlingDropDown(labelfieldname,value);
        }
        await browser.pause(2000);
        await browser.$("//button[@type='submit']").click();
        await browser.pause(2000);
    }


}

module.exports = new pim();
