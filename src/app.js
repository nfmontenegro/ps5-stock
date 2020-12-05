const puppeteer = require('puppeteer');

const markets = require('./constants');
const scrapperMarket = require('./scrapper');
const sleep = require('./utils/sleep');


const initScrapping = async () => {
  console.log('Init scrapping');
  const browser = await puppeteer.launch({headless: true});
  try {
    return Promise.all(markets.map(async (market) => {
      const page = await browser.newPage();
      await page.goto(market.pageUrl);

      await sleep(3000);
      const result = await scrapperMarket(page, market);

      browser.close();
      return result;
    }));
  } catch (error) {
    console.log(error);
    browser.close();
    throw error;
  }
};

module.exports = initScrapping;
