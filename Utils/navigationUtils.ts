import { Page } from '@playwright/test';


export async function navigateToUrl(page: Page, url: string): Promise<void> {
  await page.goto(url, { waitUntil: 'domcontentloaded' });
}


export async function waitForElement(page: Page, selector: string): Promise<void> {
  await page.waitForSelector(selector);
}
