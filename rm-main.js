const { Builder, By, Key, until } = require('selenium-webdriver');

const { removeOutdatedContent } = require('./remove-outdated-content');

const { readCredentials } = require('./read-credentials');
const { readCsv } = require('./csv-file');

const CSV = 'dummy.csv';
const CRTL = 'credentials.json';

(
    async function contentRemoval() {
        console.log('[x] Notice: ', 'Main Module.');
        const crtl = await readCredentials(CRTL);
        console.log(crtl);
        let url_list = await readCsv(CSV);
        console.log("The URLs :",url_list);  
        
        let driver = await new Builder().forBrowser('chrome').build();
        try {
            let res = await driver.get('https://search.google.com/search-console/remove-outdated-content?hl=en');
            res = await driver.wait(
                until.elementLocated(By.xpath('//*[@id="identifierId"]')), 100000, "Timed Out", 5000
            );
            res = await driver.findElement(By.xpath('/html/body/div[1]/div[1]/div[2]/div/c-wiz/div/div[2]/div/div[1]/div/form/span/section/div/div/div[1]/div/div[1]/div/div[1]/input')).sendKeys(crtl.email, Key.RETURN);
  
            res = await driver.wait(
                until.elementLocated(By.xpath('//*[@id="password"]/div[1]/div/div[1]/input')), 100000, "Timed out", 5000
            );

            res = await driver.findElement(By.xpath("/html/body/div[1]/div[1]/div[2]/div/c-wiz/div/div[2]/div/div[1]/div/form/span/section[2]/div/div/div[1]/div[1]/div/div/div/div/div[1]/div/div[1]/input")).sendKeys(crtl.password, Key.RETURN);

            // Remove Content
            await removeOutdatedContent(driver, url_list);

        } catch (error) {
            console.log("[X] Error Message", error.message);
        }
    }
)();