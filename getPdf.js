const puppeteer = require('puppeteer');
const WEBSITE_URL = 'http://localhost:3000/'; 


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(WEBSITE_URL, { waitUntil: 'networkidle0' }); 

  //To reflect CSS used for screens instead of print
  await page.emulateMediaType('screen');

// Downlaod the PDF
  const pdf = await page.pdf({
    path: 'cv-marcin-grzmil.pdf',
    margin: null,
    printBackground: true,
    format: 'A4',

  });

  // Close the browser instance
  await browser.close();

})();

export const generatePdf = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
  
    await page.goto(WEBSITE_URL, { waitUntil: 'networkidle0' }); 
  
    //To reflect CSS used for screens instead of print
    await page.emulateMediaType('screen');

    await page.evaluate(() => {
        const element = document.querySelector('.getPdf-button');
        if (element) {
          element.remove();
        }
      });
  
  // Downlaod the PDF
    const pdf = await page.pdf({
      path: 'cv-marcin-grzmil.pdf',
      margin: null,
      printBackground: true,
      format: 'A4',
    });
  
    // Close the browser instance
    await browser.close();
  }