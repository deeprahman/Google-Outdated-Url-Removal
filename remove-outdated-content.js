'use strict'
const { By, Key, until } = require('selenium-webdriver');

const delay = (ms) => {new Promise(res => setTimeout(res, ms))};

/**
 * 
 * @param {WebDriver} driver 
 */
async function removeOutdatedContent(driver, data = []) {
    console.log('[x] Notice: ', 'Content Removal Module');
    let res;
    try {
        const title = 'Remove outdated content from Google Search - Search Console';
         const xpath_btn = '//*[@id="yDmH0d"]/c-wiz/div/div[2]/div[1]/div/div[3]/button';

        let button_xpath = '//*[@id="yDmH0d"]/div[7]/div[2]/div/div[2]/div/button';
        for (let i = 0; i < data.length; i++) {
            let url = 'https://' + data[i];

           
            res = await driver.wait(
                until.titleIs(title),
                100000,
                "Timed out: Remove Outdated Content",
                2000
            );

         

            res = await driver.findElement(By.xpath(xpath_btn)).click();

            res = await driver.wait(
                until.elementLocated(By.xpath('/html/body/div[7]/div[2]/div/div[1]/div/div/div[2]/span/div[2]/label/input')),
                10000,
                'Timeout: Could not find element',
                5000
            );
                await delay(2000);
            let pr = await driver.findElement(By.xpath('/html/body/div[7]/div[2]/div/div[1]/div/div/div[2]/span/div[2]/label/input')).sendKeys(url, Key.RETURN);
            let isSubmitted = await driver.wait(
                until.elementLocated(By.xpath('//*[@id="yDmH0d"]/div[7]/div[2]/div/div[2]/div/button')),
                60000,
                'Timeout: Could not find element',
                5000
            );
            await delay(3000);
            await driver.findElement(By.xpath('//*[@id="yDmH0d"]/div[7]/div[2]/div/div[2]/div/button')).click();
        }
    } catch (error) {
        console.log('Error Message: ', error.message);
    }
}



module.exports = {
    removeOutdatedContent
};

