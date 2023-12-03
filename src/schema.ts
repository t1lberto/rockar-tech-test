import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Customer {
    email: String
    forename: String
    surname: String
    contactNumber: String
    postcode: String
  }

  type Query {
    getCustomers: [Customer]
  }
`);

export default schema;


//    getProduct: [Product]

/*
  type Product {
    vin: String
    colour: String
    make: String
    model: String
    price: Int
  }
  */