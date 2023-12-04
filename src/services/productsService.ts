// src/services/productsService.ts

require('dotenv').config();
import readCSVData from '../data/readCSVData';
import Product from '../models/Product';
import { getProducts } from '../db/dbQueries';

export class ProductsService {
  static async getProducts(): Promise<Product[]> {
    let data;

    if (process.env.USE_CSV_DATA) {
      data = await readCSVData('src/data/product.csv');
    } else {
      try {
        data = await getProducts();
      } catch (error) {
        console.error('Error fetching products from the database:', error);
        throw new Error('Unable to fetch products data from the database');
      }
    }

    return data.map((row: any) => new Product(row.vin, row.colour, row.make, row.model, row.price));
  }
}