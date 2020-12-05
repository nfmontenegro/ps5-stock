const initScrapping = require('./app');
const sleep = require('./utils/sleep');

/**
 * return
 */
async function main() {
  await initScrapping();
  await sleep(3000);
  await main();
}

main();


