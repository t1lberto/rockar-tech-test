import db from "./dbConfig";

// Fetches ALL Customer data from the database 
export const getCustomers = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM customers", (error: any, result: any) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.rows);
      }
    });
  });
};

// Fetches ALL Product data from the database 
export const getProducts = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM products", (error: any, result: any) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.rows);
      }
    });
  });
};