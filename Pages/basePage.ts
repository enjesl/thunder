// Pages/basePage.ts
import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async click(selector: string) {
    await this.page.click(selector);
    const base64Screenshot = await this.takeScreenshot();
    console.log(`Screenshot for click on ${selector}: <img src="data:image/png;base64,{{base64Screenshot}}" alt="Screenshot">`);

  }

  async enterText(selector: string, text: string) {
    await this.page.fill(selector, text);
    const base64Screenshot = await this.takeScreenshot();
    console.log(`Screenshot for entering text in ${selector}: ${base64Screenshot}`);
  }

  protected async takeScreenshot(): Promise<string> {
    const buffer = await this.page.screenshot();
    return buffer.toString('base64');
  }
}
