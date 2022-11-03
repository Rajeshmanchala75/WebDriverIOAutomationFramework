
const path = require('path');
const { Click, waitForElement } = require('./commonFunctions');


class importdata {
    get configType() {
        return $("//li/a[text()='Data Import']");

    }
    get dataImport() {
        return $("//p[text()='Data Import']");
    }
    get uploadbutton() {
        return $("//button[text()=' Upload ']");
    }
    get browseButton() {
        return $("//div[text()='Browse']/../..//input");
    }
    get confgurationTab() {
        return $("//span[text()='Configuration ']");
    }
    get noOfrecordsImported() {
        return $("//p[text()='Number of Records Imported: 1']");
    }
    async importingdata() {
        await this.confgurationTab.click();
        await browser.pause(5000);
        await this.configType.click();
        await this.dataImport.waitForDisplayed({ timeout: 10000 });
        await browser.pause(10000);
        const filePath = path.join('./test/input/importDatanew.csv');
        const remoteFilePath = await browser.uploadFile(filePath);
        await browser.pause(20000);
        const fileUpload_var = $('//input[@type="file"]');
        await fileUpload_var.addValue(remoteFilePath);
        browser.pause(30000);
        await Click(await this.uploadbutton);
        console.log("Rajesh manchala")
    
       console.log("Rajesh")
        //let successtext = await browser.$await this.noOfrecordsImported.getText();
        let successtext=await this.noOfrecordsImported.getText();
        console.log(successtext)
        
        await expect(successtext).toHaveText("Number of Records Imported: 1");
    }
}
module.exports = new importdata();
