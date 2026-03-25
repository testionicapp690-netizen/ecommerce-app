import { store, addToCart } from '../src/store';

test('adds item to cart', () => {
  store.dispatch(addToCart({ id: 'p1' }));
  expect(store.getState().cart.items[0].qty).toBe(1);
});
