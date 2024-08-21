import { BasePage } from './basePage';

export class GoogleSearchPage extends BasePage {
  async enterSearchQuery(query: string) {
    await this.enterText('textarea[name="q"]', query);
    await this.page.screenshot({ path: `test-results/screenshots/enterSearchQuery-${Date.now()}.png` });
  }

  async submitSearch() {
    await this.page.press('input[name="btnK"]', 'Enter');
    await this.page.screenshot({ path: `test-results/screenshots/submitSearch-${Date.now()}.png` });
  }

  async verifySearchResult(expectedText: string) {
    await this.page.waitForSelector(`text=${expectedText}`);
    const resultText = await this.page.textContent(`text=${expectedText}`);
    const isVerified = resultText !== null;
    await this.page.screenshot({ path: `test-results/screenshots/verifySearchResult-${Date.now()}.png` });
    return isVerified;
  }
}
