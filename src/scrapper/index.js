const marketLider = require('./market-lider');

const scrapperMarket = async (page, market) => {
  const {name} = market;
  const markets = {
    LIDER: async (props) => marketLider(props),
  };


  const response = await markets[name]({page, name});
  console.log(response);
  return response;
};

module.exports = scrapperMarket;
