/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
     get fromDate() {
        return $("//label[text()='From Date']/../..//input");
    }
    get toDate() {
        return $("//label[text()='To Date']/../..//input");
    }
    async open(path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }

    async launch() {
        await browser.maximizeWindow();
       return await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

   

    async dateSelection(datevalue) {

        datevalue = datevalue.split('-');
        let year = datevalue[0];
        let day = datevalue[2].replace(/^0+/, '');

        let monthname = new Date(datevalue[1]).toLocaleString('en-us', { month: 'long' });
        await this.fromDate.waitForDisplayed({ timeout: 10000 });

        // I.waitForElement("//label[text()='" + fieldname + "']/../..//input", 15);
        // I.click("//label[text()='" + fieldname + "']/../..//input")
        await this.fromDate.click();
        await browser.$("(//i[@class='oxd-icon bi-caret-down-fill oxd-icon-button__icon'])[1]").click();

        //selecting month
        await browser.$("//li[text()='" + monthname + "']").click();
        await browser.pause(2000);
        await browser.$("(//i[@class='oxd-icon bi-caret-down-fill oxd-icon-button__icon'])[2]").click();
        await browser.pause(2000);
        //selecting year
        await browser.$("//li[text()='" + year + "']").click()
        await browser.pause(2000);
        //selecting date
        await browser.$("//div[text()='" + day + "']")
        await browser.pause(2000);
    }
}
