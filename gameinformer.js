const puppeteer = require('puppeteer');

export const gameinformer = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.goto('https://www.google.com');
  // await page.goto('https://example.com');
  // const screen = await page.screenshot({ path: 'example.png' });
  // console.log(screen);
  // // other actions...
  // await browser.close();

  // console.info(page);
  await page.goto('https://www.gameinformer.com/reviews', { waitUntil: 'networkidle2' });
  await page.waitForSelector('title');
  page.once('domcontentloaded', () => console.info('✅ DOM is ready'));
  // const content = await page.content();
  // console.log(content);

  // innerText = await page.evaluate(() => {
  //   return JSON.parse(document.querySelector("body").innerText);
  // });
  // console.log(innerText)
  await page.pdf({ path: 'hn.pdf', format: 'A4' });
  await page.screenshot({ path: 'screenshot.png' });
  const title = await page.title();
  console.info(`The title is: ${title}`);

  await browser.close();
});
