const request = require('supertest');

require('dotenv').config();

const server = require('../src/server');

beforeAll(async () => {
  const mongoose = require('mongoose');

  mongoose.connect(process.env.DB_CONNECT_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
});

afterAll(() => {
  const mongoose = require('mongoose');

  mongoose.disconnect();
});

describe('Card Testing', () => {
  it('expect to return last game', (done) => {
    request(server)
      .get('/card')
      .expect(200, done);
  });
});
