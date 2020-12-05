const pino = require('pino');

const logger = pino({
  prettyPrint: {
    levelFirst: true,
    translateTime: true,
    colorize: true,

  },
  // eslint-disable-next-line global-require
  prettifier: require('pino-pretty'),
});

module.exports = logger;
