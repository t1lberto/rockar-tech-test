/**
 * Tests the product model / class
 * @group unit/models
 */

import Product from '../../models/Product';

test('Product model works', () => {
  const product = new Product('QWERTYUIO12345', 'Pink', 'Cat', 'Bus', 10000);
  expect(product.vin).toBe('QWERTYUIO12345');
  expect(product.colour).toBe('Pink');
  expect(product.make).toBe('Cat');
  expect(product.model).toBe('Bus');
  expect(product.price).toBe(10000);
});