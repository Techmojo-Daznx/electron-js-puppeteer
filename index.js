const puppeteer = require('puppeteer');
const exec = require('child_process').execSync;
const version = exec("git version");
alert(version.toString())

async function openZuoraDevPortal() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });
    const page = await browser.newPage();
    await page.goto("https://apisandbox.zuora.com/platform/webapp");
}

openZuoraDevPortal();
