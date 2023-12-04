import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Customer {
    email: String
    forename: String
    surname: String
    contactNumber: String
    postcode: String
  }

  type Product {
    vin: String
    colour: String
    make: String
    model: String
    price: Int
  }

  type Query {
    getCustomers: [Customer]
    getProducts: [Product]
  }

`);

export default schema;
