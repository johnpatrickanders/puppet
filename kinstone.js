const puppeteer = require('puppeteer');
const dotenv = require('dotenv');
dotenv.config();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.google.com/admin');

  await page.type('#username', process.env.SENDER_EMAIL);
  await page.type('#password', process.env.KS_PASSWORD);
  await page.keyboard.press('Enter');

  await page.waitForNavigation();
  console.log('New Page URL:', page.url());
  await browser.close();
})();
