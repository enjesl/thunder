import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';


export function readJsonFile(filePath: string): any {
  const fullPath = join(__dirname, filePath);
  const data = readFileSync(fullPath, 'utf-8');
  return JSON.parse(data);
}


export function createDirectory(dirPath: string): void {
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }
}


export function writeFile(filePath: string, data: string | Buffer): void {
  writeFileSync(filePath, data);
}
