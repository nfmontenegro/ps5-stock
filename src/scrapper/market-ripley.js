const digitalVersion = (text) => (text !== 'Pronto disponible' ? 'Product with stock' : 'Product without stock');
const normalVersion = (text) => (text !== 'Agotado' ? 'Product with stock' : 'Product without stock');

const marketRipley = ({ text, version }) => {
  const consoleVersion = {
    DIGITAL: (props) => digitalVersion(props),
    NORMAL: (props) => normalVersion(props),
  };

  const selectorText = consoleVersion[version](text);
  return {
    version: `PS5 ${version} version`,
    text: selectorText,
  };
};

module.exports = marketRipley;
