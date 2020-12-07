const hadStock = (text, compare) => (text !== compare ? 'Product with stock' : 'Product without stock');

const marketRipley = ({ text, market }) => {
  const { compare, version } = market;
  const selectorText = hadStock(text, compare);
  return {
    version: `PS5 ${version} version`,
    text: selectorText,
  };
};

module.exports = marketRipley;
