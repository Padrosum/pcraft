// Firefox reproduction: host in chromium, friend joins from system Firefox.
import puppeteer from 'puppeteer-core';

const CHROME = `${process.env.HOME}/.cache/ms-playwright/chromium-1223/chrome-linux64/chrome`;
const URL = process.argv[2] || 'https://padrosum.uk/pcraft/';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function startGame(page, tag) {
  page.errors = [];
  page.on('pageerror', (e) => page.errors.push('pageerror: ' + e));
  page.on('console', (m) => {
    if (m.type() === 'error' && !m.text().includes('WebSocket connection')) {
      page.errors.push('console: ' + m.text());
    }
  });
  await page.goto(URL.includes('#') ? URL : page.gameUrl || URL, { waitUntil: 'load' });
  await sleep(1500);
  await page.type('#name-input', tag);
  await page.click('#start-btn');
}

const chrome = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'],
});
const host = await chrome.newPage();
await host.goto(URL, { waitUntil: 'load' });
await host.type('#name-input', 'EvSahibi');
await host.click('#start-btn');
await sleep(4000);
const roomHash = await host.evaluate(() => location.hash);
console.log('room:', roomHash);

const firefox = await puppeteer.launch({
  browser: 'firefox',
  executablePath: '/usr/bin/firefox',
  headless: true,
});
const friend = await firefox.newPage();
friend.errors = [];
friend.on('pageerror', (e) => friend.errors.push('pageerror: ' + e));
friend.on('console', (m) => {
  if (m.type() === 'error') friend.errors.push('console: ' + m.text());
});
await friend.goto(URL + roomHash, { waitUntil: 'load' });
await sleep(1500);
await friend.type('#name-input', 'TilkiArkadas');
await friend.click('#start-btn');

for (let i = 0; i < 8; i++) {
  await sleep(3000);
  const s = await friend.evaluate(() => ({
    status: document.getElementById('menu-status')?.textContent,
    menuHidden: document.getElementById('menu').hidden,
    seed: window.__pcraftSeed,
    count: document.getElementById('player-count')?.textContent,
  })).catch((e) => ({ evalError: String(e) }));
  console.log(`t+${(i + 1) * 3}s firefox:`, JSON.stringify(s));
  if (s.menuHidden && s.count?.includes('2')) break;
}

const hostSeed = await host.evaluate(() => window.__pcraftSeed);
const friendSeed = await friend.evaluate(() => window.__pcraftSeed).catch(() => 'eval-failed');
console.log('host seed:', hostSeed, '| friend seed:', friendSeed, '| match:', hostSeed === friendSeed);
console.log('friend errors:', friend.errors.slice(0, 5));
const hostCount = await host.evaluate(() => document.getElementById('player-count').textContent);
console.log('host count:', hostCount);

await friend.screenshot({ path: '/tmp/pcraft-ff.png' });
await chrome.close();
await firefox.close();
