


/**
 * sub page containing specific selectors and methods for a specific page
 */
class logoutPage {
    /**
     * define selectors using getter methods
     */
    get UserDropdown() {
        return $("//span[@class='oxd-userdropdown-tab']");
    }

    get About() {
        return $("//a[text()='About']");
    }

    get Support() {
        return $("//a[text()='Support']");
    }
    get ChangePassword() {
        return $("//a[text()='Change Password']");
    }
    get Logout() {
        return $("//a[text()='Logout']");
    }
    get logintext() {
        return $("//h5[text()='Login']");
    }
    /**""
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async HRMlogout() {
        (await this.UserDropdown).isDisplayed
        //await this.forgotpassword.toBePresent()
        await this.UserDropdown.click();
        await this.Logout.waitForDisplayed();
        await this.Logout.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
   
}
module.exports = new logoutPage();