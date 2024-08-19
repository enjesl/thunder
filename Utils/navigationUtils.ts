import { Page } from '@playwright/test';

/**
 * Navigate to a specific URL.
 * @param page - The Playwright Page object.
 * @param url - The URL to navigate to.
 */
export async function navigateToUrl(page: Page, url: string): Promise<void> {
  await page.goto(url, { waitUntil: 'domcontentloaded' });
}

/**
 * Wait for a specific element or text to appear on the page.
 * @param page - The Playwright Page object.
 * @param selector - The selector to wait for.
 */
export async function waitForElement(page: Page, selector: string): Promise<void> {
  await page.waitForSelector(selector);
}
