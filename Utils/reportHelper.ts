import { formatDate } from '../Utils/dateUtils';

export function generateReport(reportName: string) {
  const dateTime = formatDate(new Date());
  return `./test-results/${reportName}-${dateTime}`;
}
