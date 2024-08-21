import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'Full Regression',
      testDir: './TestSuites',
      testMatch: ['**/*.ts']
    }
  ],
  fullyParallel: true,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'test-results/html-report' }],
    ['allure-playwright'],
  ],
  outputDir: 'test-results/raw',
  use: {
    browserName: 'chromium',
    headless: false,
    viewport: null,
    video:  'on',
    screenshot: 'on',
  }

});
