import * as fs from 'fs';
import { parse } from 'csv-parse/sync';

export class DataProvider {
    static readJson(filePath: string) {
        const raw = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(raw);
    }

    static readCsv(filePath: string) {
        const raw = fs.readFileSync(filePath);
        return parse(raw, {
            columns: true,
            skip_empty_lines: true
        });
    }
}