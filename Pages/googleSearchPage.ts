import { BasePage } from './basePage';


export class GoogleSearchPage extends BasePage {
  async enterSearchQuery(query: string) {
    await this.enterText('textarea[name="q"]', query);
  }

  async submitSearch() {
    this.takeScreenshot();
    await this.page.press('input[name="btnK"]', 'Enter');
  }

  async verifySearchResult(expectedText: string) {
    await this.page.waitForSelector(`text=${expectedText}`);
    const resultText = await this.page.textContent(`text=${expectedText}`);
    return resultText !== null;
  }
}
