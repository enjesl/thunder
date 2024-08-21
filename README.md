# Thunder Playwright Test Framework Setup Guide

Welcome to the Thunder Playwright Test Framework! Follow these steps to set up the framework, run tests, and generate reports.

## Repository URL

[Thunder Repository](https://github.com/enjesl/thunder.git)

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12.0.0 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

Check installations with:

```bash
node -v
npm -v

Step 1: Clone the Repository
Clone the repository to your local machine:

git clone https://github.com/enjesl/thunder.git

Navigate to the project directory:

cd thunder

Step 2: Install Dependencies
Install required npm packages:
npm install

Step 3: Configure Playwright
Install the required browsers:

npx playwright install

Step 4: Running Test Cases
Run a Specific Test Case

npx playwright test -g "Test Case Name"

Replace "Test Case Name" with the exact name of the test case.

Run Multiple Test Cases

npx playwright test -g "Test Case Name 1|Test Case Name 2"

This command runs both "Test Case Name 1" and "Test Case Name 2".

Step 5: Generating Allure Reports
Generate the Report

npx allure generate ./allure-results --clean

Open the Report

npx allure open ./allure-report

Step 6: Clean Up Previous Reports
Remove old reports:

rm -rf allure-report allure-results

Example: Automate Test Execution and Report Generation
Create a file named testplan.ts in your project root:
import { exec } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

function runCommand(command: string): Promise<void> {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${stderr}`);
        reject(error);
      } else {
        console.log(stdout);
        resolve();
      }
    });
  });
}

function removeDirectory(dir: string): void {
  const directoryPath = path.resolve(dir);
  if (fs.existsSync(directoryPath)) {
    fs.rmdirSync(directoryPath, { recursive: true });
    console.log(`${dir} has been removed.`);
  } else {
    console.log(`${dir} does not exist.`);
  }
}

async function runTestPlan() {
  try {
    console.log('Cleaning up previous Allure reports and results...');
    removeDirectory('allure-report');
    removeDirectory('allure-results');

    console.log('Running specified test cases...');
    await runCommand(`npx playwright test -g "Test Case 1|Test Case 2"`);

    console.log('Generating Allure report...');
    await runCommand('npx allure generate ./allure-results --clean');

    console.log('Opening Allure report...');
    await runCommand('npx allure open ./allure-report');

  } catch (error) {
    console.error('Test plan execution failed:', error);
  }
}

runTestPlan();

Run the Script
Execute the script with:


npx ts-node testplan\testplan.ts

Troubleshooting
Common Issues
Missing Browsers: Run npx playwright install.
Permission Issues: Use sudo on Unix systems if needed.
Command Not Found: Verify Node.js and npm installations and ensure npx is in your PATH.
Useful Commands
Run All Tests: npx playwright test
Check Playwright Configuration: npx playwright show-config
List Available Tests: npx playwright test --list


You can now copy this `README.md` content directly into your project’s `README.md` file. This guide is streamlined for clarity and ease of use, providing all necessary information to get started with your Playwright tests.

