const marketLider = ({ text }) => {
  if (text !== '1 - 8 de 8 productos') {
    return {
      text: '=> Product with stock',
    };
  }

  return {
    text: '=> Product without stock',
  };
};

module.exports = marketLider;
