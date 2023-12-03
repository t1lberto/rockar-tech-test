/*
This is used in services/CustomersService.ts

Don't forget to update the schema if you are altering this class

*/

export default class Customer {
  email: string;
  forename: string;
  surname: string;
  contactNumber: string;
  postcode: string;

  constructor(email: string, forename: string, surname: string, contactNumber: string, postcode: string) {
    this.email = email;
    this.forename = forename;
    this.surname = surname;
    this.contactNumber = contactNumber;
    this.postcode = postcode;
  }
}