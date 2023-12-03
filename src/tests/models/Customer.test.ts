/**
 * Tests the customer model / class
 * @group unit/models
 */


import Customer from '../../models/Customer';

test('Customer model works :-)', () => {
  const customer = new Customer('test@example.com', 'John', 'Doe', '123456789', '12345');
  expect(customer.email).toBe('test@example.com');
});