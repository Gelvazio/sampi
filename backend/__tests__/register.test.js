const request = require('supertest');

const getLastElement = require('./utils/getLastElement');

const faker = require('faker');

const server = require('../src/server');

const User = require('../src/models/User');

require('dotenv').config();

const mongoose = require('mongoose');

beforeAll(async () => {
  await mongoose.connect(process.env.DB_CONNECT_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('User Registration Test', () => {
  it('should list all users', (done) => {
    request(server)
      .get('/api/user')
      .expect(200)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should create new user', (done) => {
    request(server)
      .post('/api/user/register')
      .send({
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        avatar_url: faker.internet.avatar(),
        sex: "Male",
        birth: faker.date.past(),
        phone: faker.phone.phoneNumber(),
      })
      .expect(201)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should not create new user because the name already exists', async (done) => {
    const mockUser = await getLastElement(User);

    request(server)
      .post('/api/user/register')
      .send({
        name: mockUser.name,
        email: faker.internet.email(),
        password: faker.hacker.adjective(),
        avatar_url: faker.internet.avatar(),
        sex: "Male",
        birth: faker.date.past(),
        phone: faker.phone.phoneNumber(),
      })
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should not create new user because the email already exists', async (done) => {
    const mockUser = await getLastElement(User);

    request(server)
      .post('/api/user/register')
      .send({
        name: faker.name.findName(),
        email: mockUser.email,
        password: faker.hacker.adjective(),
        avatar_url: faker.internet.avatar(),
        sex: "Male",
        birth: faker.date.past(),
        phone: faker.phone.phoneNumber(),
      })
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should not create new user because the name is not allowed', (done) => {
    request(server)
      .post('/api/user/register')
      .send({
        name: 'A',
        email: faker.internet.email(),
        password: faker.hacker.adjective(),
        avatar_url: faker.internet.avatar(),
        sex: "Male",
        birth: faker.date.past(),
        phone: faker.phone.phoneNumber(),
      })
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should not create new user because the password is not allowed', (done) => {
    request(server)
      .post('/api/user/register')
      .send({
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: '123',
        avatar_url: faker.internet.avatar(),
        sex: "Male",
        birth: faker.date.past(),
        phone: faker.phone.phoneNumber(),
      })
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should edit all user information', async (done) => {
    const lastUser = await getLastElement(User);

    request(server)
      .put('/api/user/' + lastUser._id.toString())
      .send({
        name: faker.name.findName(),
        avatar_url: faker.internet.avatar(),
        phone: faker.phone.phoneNumber(),
      })
      .expect(200)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should edit only user name', async (done) => {
    const lastUser = await getLastElement(User);

    request(server)
      .put('/api/user/' + lastUser._id.toString())
      .send({
        name: faker.name.findName(),
      })
      .expect(200)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should not edit user information when provided with not valid data', async (done) => {
    const lastUser = await getLastElement(User);

    request(server)
      .put('/api/user/' + lastUser._id.toString())
      .send({
        name: 'A',
      })
      .expect(400)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });

  it('should delete user', async (done) => {
    const lastUser = await getLastElement(User);

    request(server)
      .delete('/api/user/' + lastUser._id.toString())
      .expect(202)
      .end((error) => {
        if (error) {
          return done(error);
        }
        done();
      });
  });
});
