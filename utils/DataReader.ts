import * as fs from 'fs';

export class DataProvider {
    static readJson(filePath: string) {
        const raw = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(raw);
    }
}