import { defineConfig } from '@playwright/test';
import { generateReport } from './utils/reportHelper';

export default defineConfig({
  projects: [
    {
      name: 'Full Regression',
      testDir: './TestSuites',
      testMatch: ['**/*.ts']
    }
  ],
  reporter: [
    ['html', { outputFolder: generateReport('report') }]
  ],
  use: {
    browserName: 'chromium',
    headless: false
  }
});
