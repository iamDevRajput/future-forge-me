const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Set viewport to desktop size
  await page.setViewport({ width: 1280, height: 800 });
  
  await page.goto('http://localhost:3000/login', { waitUntil: 'networkidle2' });
  
  // Get element at the center of the right pane (x: 1280 * 0.75 = 960, y: 400)
  const result = await page.evaluate(() => {
    // We want to check what's at coordinate (960, 400) - which should be the middle of the right pane
    const el = document.elementFromPoint(960, 400);
    
    // Also check coordinates slightly offset
    const el2 = document.elementFromPoint(960, 200);
    
    // Get their tags, classes, and IDs to identify them
    const getElInfo = (e) => {
        if (!e) return "null";
        let str = e.tagName.toLowerCase();
        if (e.id) str += '#' + e.id;
        if (e.className && typeof e.className === 'string') str += '.' + e.className.split(' ').join('.');
        return str;
    };
    
    return {
        center: getElInfo(el),
        topRight: getElInfo(el2),
        bodyDimensions: [document.body.clientWidth, document.body.clientHeight]
    };
  });
  
  console.log("Element blocking center of right pane:");
  console.log(result);
  
  await browser.close();
})();
