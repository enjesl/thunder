import { test } from '@playwright/test';
import { GoogleSearchPage } from '../pages/googleSearchPage';
import { launchBrowser, closeBrowser } from '../utils/browserUtils';
import { readJsonFile } from '../utils/fileUtils';
import { navigateToUrl } from '../utils/navigationUtils';

const data = readJsonFile('../data/datatables.json');

test.describe('Play Search Test Suite', () => {
  for (const [index, searchData] of data.GoogleSearchTests.entries()) {
    test(`Play Search Test Case - Iteration ${index + 1}`, async ({ page }) => {
      const googleSearchPage = new GoogleSearchPage(page);

      console.log('Navigating to Google');
      await navigateToUrl(page, 'https://www.google.com');
      console.log('Entering search query:', searchData.query);
      await googleSearchPage.enterSearchQuery(searchData.query);
      console.log('Submitting search');
      await googleSearchPage.submitSearch();
      console.log('Verifying search result');
      const isResultVerified = await googleSearchPage.verifySearchResult(searchData.expectedResult);
      test.expect(isResultVerified).toBeTruthy();
    });
  }

  for (const [index, searchData] of data.GoogleSearchTests2.entries()) {
    test(`Google Search Selenium Test Case - Iteration ${index + 1}`, async ({ page }) => {
      const googleSearchPage = new GoogleSearchPage(page);

      console.log('Navigating to Google');
      await navigateToUrl(page, 'https://www.google.com');
      console.log('Entering search query:', searchData.query);
      await googleSearchPage.enterSearchQuery(searchData.query);
      console.log('Submitting search');
      await googleSearchPage.submitSearch();
      console.log('Verifying search result');
      const isResultVerified = await googleSearchPage.verifySearchResult(searchData.expectedResult);
      test.expect(isResultVerified).toBeTruthy();
    });
  }
});
