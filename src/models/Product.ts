/*

This is used in services/CustomersService.ts

Don't forget to update the schema if you are altering this class

*/

export default class Product {
  vin: string;
  colour: string;
  make: string;
  model: string;
  price: number;

  constructor(vin: string, colour: string, make: string, model: string, price: number) {
    this.vin = vin;
    this.colour = colour;
    this.make = make;
    this.model = model;
    this.price = price;
  }
}