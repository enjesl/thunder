import { readFileSync } from 'fs';
import { join } from 'path';

/**
 * Reads and parses a JSON file.
 * @param filePath - The relative path to the JSON file.
 * @returns The parsed JSON data.
 */
export function readJsonFile(filePath: string): any {
  const fullPath = join(__dirname, filePath);
  const data = readFileSync(fullPath, 'utf-8');
  return JSON.parse(data);
}
