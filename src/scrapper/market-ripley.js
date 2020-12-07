const hadStock = (text, inputText) => (text !== inputText ? 'Product with stock' : 'Product without stock');

const marketRipley = ({ text, market }) => {
  const { inputText, version } = market;
  const selectorText = hadStock(text, inputText);
  return {
    version: `PS5 ${version} version`,
    text: selectorText,
  };
};

module.exports = marketRipley;
