const pino = require('pino')

const logger = pino({
  prettyPrint: {
    levelFirst: true,
    translateTime: true,
    colorize: true

  },
  prettifier: require('pino-pretty')
})

module.exports = logger
