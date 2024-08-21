import { Page } from '@playwright/test';
import { takeScreenshot } from '../utils/screenshotUtils';

export class BasePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async enterText(selector: string, text: string): Promise<void> {
    await this.page.fill(selector, text);
    await takeScreenshot(this.page, `enterText-${selector.replace(/[^a-zA-Z0-9]/g, '_')}-${Date.now()}.png`);
  }

  
  async click(selector: string): Promise<void> {
    await this.page.click(selector);
    await takeScreenshot(this.page, `click-${selector.replace(/[^a-zA-Z0-9]/g, '_')}-${Date.now()}.png`);
  }

  async takeScreenshot(fileName: string): Promise<void> {
    await takeScreenshot(this.page, fileName);
  }
}
