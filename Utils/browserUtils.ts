import { chromium, Browser } from '@playwright/test';

/**
 * Launches a Chromium browser instance.
 * @returns {Promise<Browser>} - The launched browser instance.
 */
export async function launchBrowser(): Promise<Browser> {
  return await chromium.launch();
}

/**
 * Closes the given browser instance.
 * @param {Browser} browser - The browser instance to close.
 */
export async function closeBrowser(browser: Browser): Promise<void> {
  await browser.close();
}
