const marketRipley = (text, version) => {
  if (!version && text !== 'Agotado') {
    return {
      text: '=> Product with stock',
      version: 'PS5',
    };
  }

  if (version && text !== 'Pronto disponible') {
    return {
      text: '=> Product with stock',
      version: 'PS5 Digital Edition',
    };
  }

  return {
    text: '=> Product without stock',
    version: version ? 'PS5 Digital Edition' : 'PS5',
  };
};

module.exports = marketRipley;
