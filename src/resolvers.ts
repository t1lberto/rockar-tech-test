import getCustomers from "./resolvers/customersResolver";
import getProducts from "./resolvers/productsResolver";

export const root = {
  getCustomers,
  getProducts
}; 