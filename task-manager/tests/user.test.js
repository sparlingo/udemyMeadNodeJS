const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/User')

const userOne = {
    name: "The Tester",
    email: 'test@example.com',
    password: 'halohalo'
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

// afterEach(() => {
//     console.log('afterEach')
// })

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: "That Guy #6",
        email: "that@gtuiiy.com",
        password: "halohalo"
    }).expect(201)
})

test('Should login a new user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('should not login a new user', async() => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: 'uerouewourer'
    })
})