// src/services/customerService.ts

require('dotenv').config();
import readCSVData from '../data/readCSVData';
import Customer from '../models/Customer';
import { getUsers } from '../db/dbQueries';

export class CustomersService {
  static async getCustomers(): Promise<Customer[]> {
    let data;
    if (process.env.USE_CSV_DATA === "true") {
      data = await readCSVData('src/data/customer.csv');
    } else {
      try {
        data = await getUsers();
      } catch (error) {
        console.error('Error fetching customers from the database:', error);
        throw new Error('Unable to fetch customers data from the database');
      }
    }

    return data.map((row: any) => new Customer(row.email, row.forename, row.surname, row.contact_number, row.postcode));
  }
}