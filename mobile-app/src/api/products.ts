import client from './client';

export const fetchProducts = async () => {
  const res = await client.get('/products');
  return res.data.data;
};
