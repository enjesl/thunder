export function formatDate(date: Date): string {
    return date.toISOString().replace(/[:.]/g, '-');
  }
  