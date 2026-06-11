// Headless smoke test: load the game, create a room, join it from a second
// page, and verify world sync + remote player visibility.
import puppeteer from 'puppeteer-core';

const CHROME = `${process.env.HOME}/.cache/ms-playwright/chromium-1223/chrome-linux64/chrome`;
const URL = process.argv[2] || 'http://localhost:5173/pcraft/';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox', '--window-size=900,700'],
});

let failures = 0;
function check(label, ok, extra = '') {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}${extra ? ' — ' + extra : ''}`);
  if (!ok) failures++;
}

async function newGamePage(url, tag) {
  const page = await browser.newPage();
  page.errors = [];
  page.on('pageerror', (e) => page.errors.push(String(e)));
  page.on('console', (m) => {
    // dead public relays are expected noise; trystero tries several
    if (m.type() === 'error' && !m.text().includes('WebSocket connection')) {
      page.errors.push(m.text());
    }
  });
  await page.setViewport({ width: 900, height: 700 });
  await page.goto(url, { waitUntil: 'networkidle2' });
  await page.type('#name-input', tag);
  await page.click('#start-btn');
  return page;
}

// --- host creates a room ---
const host = await newGamePage(URL, 'Ev Sahibi');
await sleep(4000);

const hostState = await host.evaluate(() => ({
  hash: location.hash,
  menuHidden: document.getElementById('menu').hidden,
  hudVisible: !document.getElementById('hud').hidden,
  hotbarSlots: document.querySelectorAll('#hotbar .slot').length,
}));
check('host: room id in URL', /#r=[a-z0-9]{8}/.test(hostState.hash), hostState.hash);
check('host: menu hidden, game started', hostState.menuHidden && hostState.hudVisible);
check('host: hotbar has 9 slots', hostState.hotbarSlots === 9);
check('host: no page errors', host.errors.length === 0, host.errors.slice(0, 3).join(' | '));

const roomUrl = URL + (await host.evaluate(() => location.hash));

// --- friend joins via the same link ---
const friend = await newGamePage(roomUrl, 'Arkadas');
console.log('friend joining', roomUrl);
await sleep(12000); // webrtc signaling over public relays can take a while

const counts = await Promise.all([host, friend].map((p) =>
  p.evaluate(() => document.getElementById('player-count').textContent)
));
check('host sees 2 players', counts[0].includes('2'), counts[0]);
check('friend sees 2 players', counts[1].includes('2'), counts[1]);
check('friend: no page errors', friend.errors.length === 0, friend.errors.slice(0, 3).join(' | '));

const sameWorld = await Promise.all([host, friend].map((p) =>
  p.evaluate(() => window.__pcraftSeed)
));
check('same world seed', sameWorld[0] !== undefined && sameWorld[0] === sameWorld[1], String(sameWorld));

// --- block edit sync: host places a brick, friend should see it ---
await host.evaluate(() => window.__pcraft.setBlock(3, 40, 3, 11));
await sleep(2500);
const friendSees = await friend.evaluate(() => window.__pcraft.getBlock(3, 40, 3));
check('block edit synced to friend', friendSees === 11, `got ${friendSees}`);

// friend breaks it, host should see air
await friend.evaluate(() => window.__pcraft.setBlock(3, 40, 3, 0));
await sleep(2500);
const hostSees = await host.evaluate(() => window.__pcraft.getBlock(3, 40, 3));
check('block break synced to host', hostSees === 0, `got ${hostSees}`);

// screenshots for manual inspection
await host.screenshot({ path: '/tmp/pcraft-host.png' });
await friend.screenshot({ path: '/tmp/pcraft-friend.png' });

await browser.close();
console.log(failures === 0 ? 'ALL PASS' : `${failures} FAILURES`);
process.exit(failures === 0 ? 0 : 1);
