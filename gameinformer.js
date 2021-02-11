const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.goto('https://www.google.com');
  // await page.goto('https://example.com');
  // const screen = await page.screenshot({ path: 'example.png' });
  // console.log(screen);
  // // other actions...
  // await browser.close();

  await page.goto('https://www.gameinformer.com', { waitUntil: 'networkidle2' });
  await page.pdf({ path: '/scraps/hn.pdf', format: 'A4' });

  await browser.close();
})();
