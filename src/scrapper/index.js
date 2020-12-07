const marketLider = require('./market-lider');
const marketRipley = require('./market-ripley');

const logger = require('../utils/logger');

const scrapperMarket = async (page, market) => {
  const {
    name, selector,
  } = market;
  const markets = {
    LIDER: (props) => marketLider(props),
    RIPLEY: (props) => marketRipley(props),
  };

  const selectorResult = await page.evaluate((documentSelector) => {
    const selectorText = document.querySelector(documentSelector).textContent;
    return selectorText;
  }, selector);

  const validateStock = markets[name]({ text: selectorResult, market });
  const response = { market: name, ...validateStock };
  logger.info(response);
  return response;
};

module.exports = scrapperMarket;
