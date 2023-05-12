const puppeteer = require('puppeteer');

const { generateText, checkAndGenerate } = require('./util');

test('generateText should output name and age', () => {
  const text = generateText('Max', 33);
  expect(text).toBe('Max (33 years old)')
});

test('generateText should output data-less text', () => {
  const text = generateText('', null);
  expect(text).toBe(' (null years old)')
})

test('checkAndGenerate should generate a vlid text output', () => {
  const text = checkAndGenerate('Max', 33);
  expect(text).toBe('Max (33 years old)')
})

test('should click around', async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ['--window-size=1920,1080']
  });
  const page = await browser.newPage();
  await page.goto('file:///C:/workspace/learning/js-testing-learn/index.html');

  await page.click('input#name');
  await page.type('input#name', 'Max');
  await page.click('input#age');
  await page.type('input#age', '33');
  await page.click('#btnAddUser');

  const finalText = await page.$eval('.user-item', el => el.textCOntent);
  expect(finalText).toBe('Max (33 years old)');
}, 10000)
