import * as fs from 'fs';
import csv from 'csv-parser';

// returns all data from CSV based on the passed in filePath 
export default (filePath: string): Promise<any[]> => {
  return new Promise<any[]>((resolve, reject) => {
    const data: any[] = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => data.push(row))
      .on('end', () => resolve(data))
      .on('error', (error) => reject(error));
  });
};