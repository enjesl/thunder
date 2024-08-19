import { defineConfig } from '@playwright/test';
import { generateReport } from './Utils/reportHelper';

export default defineConfig({
  projects: [
    {
      name: 'Full Regression',
      testDir: './TestSuites',
      testMatch: ['**/*.ts']
    }
  ],
  reporter: [
    ['html', { outputFolder: generateReport('Report') }]
  ],
  use: {
    browserName: 'chromium',
    headless: false
  }
});
