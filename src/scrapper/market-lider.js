const marketLider = async ({page, name}) => {
  const pageResult = await page.evaluate(() => {
    // eslint-disable-next-line max-len
    const paginateProductsText = document.querySelector('#root > div > div:nth-child(2) > div.app-container > div > div > div > div > div > div > div > div.col-lg-9.col-padding-12 > div.styled__ControlsContainer-sc-1g3gf49-0.fUBtyg.shop-content > div.styled__QuantityShown-sc-1g3gf49-2.dxpvKX').textContent;

    if (paginateProductsText !== '1 - 8 de 8 productos') {
      return {
        text: 'Product with stock',
      };
    }

    return {
      text: 'Product without stock',
    };
  });

  return {market: name, ...pageResult};
};

module.exports = marketLider;
