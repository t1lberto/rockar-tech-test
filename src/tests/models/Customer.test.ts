/**
 * Tests the customer model / class
 * @group unit/models
 */

import Customer from '../../models/Customer';

test('Customer model works :-)', () => {
  const customer = new Customer('test@example.com', 'John', 'Doe', '123456789', '12345');
  expect(customer.email).toBe('test@example.com');
  expect(customer.forename).toBe('John');
  expect(customer.surname).toBe('Doe');
  expect(customer.contactNumber).toBe('123456789');
  expect(customer.postcode).toBe('12345');
});