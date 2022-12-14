const expectChai = require('chai').expect;

class commonFunctions {
    // get fromDate() {
    //     return $("//label[text()='From Date']/../..//input");
    // }
    // get toDate() {
    //     return $("//label[text()='To Date']/../..//input");
    // }

    async dateSelection(fieldname, datevalue) {
        datevalue = datevalue.split('-');
        let year = datevalue[0];
        let day = datevalue[2].replace(/^0+/, '');

        let monthname = new Date(datevalue[1]).toLocaleString('en-us', { month: 'long' });
        await browser.$("//label[text()='" + fieldname + "']/../..//input").waitForDisplayed({ timeout: 10000 })
        await browser.$("//label[text()='" + fieldname + "']/../..//input").click();
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
        await browser.$("//div[text()='" + day + "']").click()
        await browser.pause(2000);
        let datetext = await browser.$("//label[text()='" + fieldname + "']/../..//input").getValue();
        console.log(datevalue[0] + "-" + datevalue[1] + "-" + datevalue[2]);
        expectChai(datetext).to.eql(datevalue[0] + "-" + datevalue[1] + "-" + datevalue[2]);
    }

    async handlingDropDown(dropdownlabelname, dropdownvalue) {
        let locator = "//label[text()='" + dropdownlabelname + "']"
        await (await browser.$("" + locator + "/../..//div[@class='oxd-select-text oxd-select-text--active']"))
            .waitForDisplayed({ timeout: 10000 });
        await browser.$("" + locator + "/../..//div[@class='oxd-select-text oxd-select-text--active']").click();
        await browser.$("//div/span[text()='" + dropdownvalue + "']").waitForDisplayed({ timeout: 10000 });
        await browser.$("//div/span[text()='" + dropdownvalue + "']").click();
    }
    async Click(selector) {
        try {
            await browser.$(selector).waitForDisplayed({ timeout: 30000 })
            await browser.$(selector).click();
        }
        catch (error) {
            console.log("Xpath is not found" + error);

        }
    }

    async type(selector, value) {
        try {
            await browser.$(selector).waitForDisplayed({ timeout: 30000 })
            await browser.$(selector).setValue(value);
        }
        catch (error) {
            console.log('x path is  not found' + error);

        }
    }

    async waitForElement(selector, waitTime) {
        try {
            await browser.$(selector).waitForDisplayed({ timeout: waitTime });
        }
        catch (error) {
            console.log('element is nod displayed ' + error);
        }
    }
}

module.exports = new commonFunctions();
























