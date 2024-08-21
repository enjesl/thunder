import { exec } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

// Function to execute shell commands
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

// Function to remove directories if they exist
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
    // Step 1: Remove allure-report and allure-results directories if they exist
    console.log('Cleaning up previous Allure reports and results...');
    removeDirectory('allure-report');
    removeDirectory('allure-results');

    // Step 2: Run both test cases using a single regex pattern
    console.log('Running specified test cases...');
    await runCommand(`npx playwright test -g "Google Search (Selenium Test Case - Iteration 1|Test Case - Iteration 2|Play Search Test Case - Iteration)"`);

    // Step 3: Generate the Allure report
    console.log('Generating Allure report...');
    await runCommand('npx allure generate ./allure-results --clean');

    // Step 4: Open the Allure report
    console.log('Opening Allure report...');
    await runCommand('npx allure open ./allure-report');

  } catch (error) {
    console.error('Test plan execution failed:', error);
  }
}

// Execute the test plan
runTestPlan();
