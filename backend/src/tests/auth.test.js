const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');

let mongo;
beforeAll(async () => {
  process.env.JWT_SECRET = 'testsecret';
  mongo = await MongoMemoryServer.create();
  await mongoose.connect(mongo.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongo.stop();
});

test('registers user', async () => {
  const res = await request(app).post('/api/auth/register').send({
    name: 'Test User',
    email: 'test@example.com',
    password: 'password123'
  });
  expect(res.status).toBe(201);
  expect(res.body.token).toBeDefined();
});
