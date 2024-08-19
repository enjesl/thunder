import { test } from '@playwright/test';
import { GoogleSearchPage } from '../Pages/googleSearchPage';
import { launchBrowser, closeBrowser } from '../Utils/browserUtils';
import { readJsonFile } from '../Utils/fileUtils';
import { navigateToUrl } from '../Utils/navigationUtils';

const data = readJsonFile('../DataTables/datatables.json');

test.describe('Google Search Test Suite', () => {
  for (const [index, searchData] of data.GoogleSearchTests.entries()) {
    test(`Google Search Test Case - Iteration ${index + 1}`, async () => {
      const browser = await launchBrowser();
      const context = await browser.newContext();
      const page = await context.newPage();
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

      await closeBrowser(browser);
    });
  }

  for (const [index, searchData] of data.GoogleSearchTests2.entries()) {
    test(`Google Search Selenium Test Case - Iteration ${index + 1}`, async () => {
      const browser = await launchBrowser();
      const context = await browser.newContext();
      const page = await context.newPage();
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

      await closeBrowser(browser);
    });
  }
});
