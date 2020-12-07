const { LIDER, RIPLEY, NORMAL_VERSION, DIGITAL_VERSION } = require('../constants')

const LIDER_CONFIG = {
  name: LIDER,
  pageUrl: 'https://www.lider.cl/catalogo/search?query=playstation%205',
  selector: '#root > div > div:nth-child(2) > div.app-container > div > div > div > div > div > div > div > div.col-lg-9.col-padding-12 > div.styled__ControlsContainer-sc-1g3gf49-0.fUBtyg.shop-content > div.styled__QuantityShown-sc-1g3gf49-2.dxpvKX',
  version: NORMAL_VERSION,
  inputText: '1 - 8 de 8 productos'
}

const RIPLEY_NORMAL_CONFIG = {
  name: RIPLEY,
  pageUrl: 'https://simple.ripley.cl/reserva-consola-ps5-2000380458321p?color_80=blanco',
  selector: '#buy-button',
  version: NORMAL_VERSION,
  inputText: 'Agotado'
}

const RIPLEY_DIGITAL_CONFIG = {
  name: RIPLEY,
  pageUrl: 'https://simple.ripley.cl/reserva-consola-ps5-digital-edition-2000380458314p?color_80=blanco',
  selector: '#buy-button',
  version: DIGITAL_VERSION,
  inputText: 'Agotado'
}

const configMarkets = [LIDER_CONFIG, RIPLEY_NORMAL_CONFIG, RIPLEY_DIGITAL_CONFIG]

module.exports = configMarkets
