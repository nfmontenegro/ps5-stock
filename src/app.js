const puppeteer = require('puppeteer');

const scrapperMarket = require('./scrapper');
const configMarkets = require('./config');
const sleep = require('./utils/sleep');
const logger = require('./utils/logger');

const initScrapping = async () => {
  logger.info('Init scrapping');
  const browser = await puppeteer.launch({ headless: true });
  try {
    const resolvePromises = await Promise.all(
      configMarkets.map(async (market) => {
        const page = await browser.newPage();
        await page.goto(market.pageUrl);

        await sleep(3000);
        const result = await scrapperMarket(page, market);

        return result;
      }),
    );

    browser.close();
    return resolvePromises;
  } catch (error) {
    logger.error(error);
    browser.close();
    throw error;
  }
};

module.exports = initScrapping;
