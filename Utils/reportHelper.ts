import { mkdirSync, existsSync } from 'fs';

export function generateReport(reportBaseName: string): string {
  const reportDir = `./test-results/${reportBaseName}`;

  if (!existsSync(reportDir)) {
    mkdirSync(reportDir, { recursive: true });
  }

  return reportDir;
}
