
class com{

    async Clickbtn(selector) {
        await browser.$(selector).click();
    }

    async fillfield(selector, value) {
        await browser.$(selector).setValue(value);
    }
    
    async waitForSelector(selector, waitTime) {
        await (await browser.$(selector)).waitForDisplayed({ timeout: waitTime });
    }
}
module.exports = new com();
