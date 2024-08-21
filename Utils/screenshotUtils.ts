import { Page } from '@playwright/test';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

export async function takeScreenshot(page: Page, fileName: string): Promise<void> {
  // Set the screenshot directory path
  const screenshotDir = join(__dirname, '../test-results/screenshots');

  // Create the directory if it doesn't exist
  if (!existsSync(screenshotDir)) {
    mkdirSync(screenshotDir, { recursive: true });
  }

  // Define the full path for the screenshot
  const screenshotPath = join(screenshotDir, fileName);

  // Capture the screenshot and save it
  const screenshotBuffer = await page.screenshot();
  writeFileSync(screenshotPath, screenshotBuffer);
}
