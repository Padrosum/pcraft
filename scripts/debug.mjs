import puppeteer from 'puppeteer-core';

const CHROME = `${process.env.HOME}/.cache/ms-playwright/chromium-1223/chrome-linux64/chrome`;
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'],
});
const page = await browser.newPage();
page.on('console', (m) => console.log('[console]', m.type(), m.text()));
page.on('pageerror', (e) => console.log('[pageerror]', e));
page.on('requestfailed', (r) => console.log('[reqfail]', r.url(), r.failure()?.errorText));
await page.goto('http://localhost:5173/pcraft/', { waitUntil: 'networkidle2' });
await page.type('#name-input', 'Test');
await page.click('#start-btn');
await new Promise((r) => setTimeout(r, 5000));
const state = await page.evaluate(() => ({
  hash: location.hash,
  status: document.getElementById('menu-status').textContent,
  btnDisabled: document.getElementById('start-btn').disabled,
  menuHidden: document.getElementById('menu').hidden,
}));
console.log(state);
await browser.close();
