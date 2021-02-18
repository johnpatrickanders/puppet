const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.google.com/admin');

  await page.type('#username', 'foo@example.com');
  await page.type('#password', 'password');
  await page.keyboard.press('Enter');

  await page.waitForNavigation();
  console.log('New Page URL:', page.url());
  await browser.close();
})();
