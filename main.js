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
       
        let url_list = await readCsv(CSV);
       
        
        let driver = await new Builder().forBrowser('chrome').build();
        try {
            let res = await driver.get('https://search.google.com/search-console/remove-outdated-content?hl=en');


            // Remove Content
            await removeOutdatedContent(driver, url_list);

        } catch (error) {
            console.log("[X] Error Message", error.message);
        }finally{
            await driver.quit();
        }
    }
)();