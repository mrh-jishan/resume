const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const htmlPath = path.resolve(__dirname, 'index.html');
  const pdfPath = path.resolve(__dirname, 'index.pdf');

  if (!fs.existsSync(htmlPath)) {
    console.error('index.html not found!');
    process.exit(1);
  }

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle0' });
  await page.pdf({ path: pdfPath, format: 'A4' });
  await browser.close();

  console.log('PDF generated at', pdfPath);
})();
