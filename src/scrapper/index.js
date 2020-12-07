const logger = require('../utils/logger')

const hadStock = (text, inputText) => text !== inputText ? 'Product with stock' : 'Product without stock'

const scrapperMarket = async (page, market) => {
  const {
    name, selector, version, inputText
  } = market

  const selectorResult = await page.evaluate((documentSelector) => {
    const selectorText = document.querySelector(documentSelector).textContent
    return selectorText
  }, selector)

  const validateStock = hadStock(selectorResult, inputText)

  const response = { market: name, version, stock: validateStock }
  logger.info(response)
  return response
}

module.exports = scrapperMarket
