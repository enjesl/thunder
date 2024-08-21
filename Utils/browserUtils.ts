import { chromium, Browser } from '@playwright/test';


export async function launchBrowser(): Promise<Browser> {
  return await chromium.launch();
}


export async function closeBrowser(browser: Browser): Promise<void> {
  await browser.close();
}
