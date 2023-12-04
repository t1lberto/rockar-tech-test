import db from "./dbConfig";

export const getUsers = (): Promise<any> => {
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