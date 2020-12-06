/* eslint-disable max-len */
const LIDER = 'LIDER';
const RIPLEY = 'RIPLEY';

const LIDER_CONFIG = {
  name: LIDER,
  pageUrl: 'https://www.lider.cl/catalogo/search?query=playstation%205',
  selector: '#root > div > div:nth-child(2) > div.app-container > div > div > div > div > div > div > div > div.col-lg-9.col-padding-12 > div.styled__ControlsContainer-sc-1g3gf49-0.fUBtyg.shop-content > div.styled__QuantityShown-sc-1g3gf49-2.dxpvKX',
  version: 'NORMAL',
};

const RIPLEY_CONFIG = {
  name: RIPLEY,
  pageUrl: 'https://simple.ripley.cl/reserva-consola-ps5-2000380458321p?color_80=blanco',
  selector: '#buy-button',
  version: 'NORMAL',
};

const RIPLEY_CONFIG2 = {
  name: RIPLEY,
  pageUrl: 'https://simple.ripley.cl/reserva-consola-ps5-digital-edition-2000380458314p?color_80=blanco',
  selector: '#buy-button',
  version: 'DIGITAL',
};

module.exports = { LIDER_CONFIG, RIPLEY_CONFIG, RIPLEY_CONFIG2 };
