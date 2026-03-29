const app = require('./app');
const request = require('supertest');

test('GET / should return message', async () => {
  const res = await request(app).get('/');
  expect(res.text).toBe('CI/CD with Jenkins 🚀');
});