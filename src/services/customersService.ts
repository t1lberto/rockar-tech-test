// src/services/customerService.ts
import readCSVData from '../data/readCSVData';
import Customer from '../models/Customer';

export class CustomersService {
  static async getCustomers(): Promise<Customer[]> {
    const data = await readCSVData('src/data/customer.csv');
    
    // @to-do else get from database

    return data.map((row) => new Customer(row.email, row.forename, row.surname, row.contact_number, row.postcode));
  }
}