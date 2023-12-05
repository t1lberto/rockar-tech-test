require('dotenv').config();
import readCSVData from '../data/readCSVData';
import Customer from '../models/Customer';
import { getCustomers } from '../db/dbQueries';

// optionally fetches the relevant data from either CSV or the database
export class CustomersService {
  static async getCustomers(): Promise<Customer[]> {
    let data;
    if (process.env.USE_CSV_DATA === "true") {
      data = await readCSVData('src/data/customer.csv');
    } else {
      try {
        data = await getCustomers();
      } catch (error) {
        console.error('Error fetching customers from the database:', error);
        throw new Error('Unable to fetch customers data from the database');
      }
    }
    return data.map((row: any) => new Customer(row.email, row.forename, row.surname, row.contact_number, row.postcode));
  }
}