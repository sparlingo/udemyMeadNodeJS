const request = require('supertest')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const app = require('../src/app')
const User = require('../src/models/User')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: "The Tester",
    email: 'test@example.com',
    password: 'halohalo',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, 'thisismynewcourse')
    }]
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

// afterEach(() => {
//     console.log('afterEach')
// })

test('Should signup a new user', async () => {
    await request(app).post('/users')
    .send({
        name: "That Guy #7",
        email: "that@gtiy.com",
        password: "halohalo"
    })
    .expect(201)

    // Assert that the database was changed correctly
    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()
    // Assertions about the response
    expect(response.body).toMatchObject({
        user: {
            name: 'That Guy #7',
            email: 'that@gtiy.com'
        },
        token: user.tokens[0].token
    })
})

test('Should login a new user', async () => {
    await request(app)
    .post('/users/login')
    .send({
        email: userOne.email,
        password: userOne.password
    })
    .expect(200)
    const user = await User.findById(userOneId)
    expect(response.body.token).toBe(user.tokens[0].token)
})

test('should not login a user with the wrong password', async() => {
    await request(app)
    .post('/users/login')
    .send({
        email: 'that@gtiy.com',
        password: 'uerouewourer'
    })
    .expect(401)
})

test('should get profile for user', async() => {
    await request(app)
    .get('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)
})

test('should delete user account', async() => {
    await request(app)
    .delete('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)

    const user = await User.findById(userOneId)
    expect(user).toBeNull()
})

test('should not delete account for unauth user', async () => {
    await request(app)
    .delete('/users/me')
    .send()
    .expect(401)
})

test('should upload avatar image', async () => {
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .attach('avatar', 'test/fixtures/avatar.jpg')
        .expect(200)
    const user = await User.findById(userOneId)
    expect(user.avatar).toEqual(expect.any(Buffer))

})

test('should update valid user fields', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name: "Hank"
        })
        .expect(200)
        const user = await User.findById(userOneId)
        expect(user.name).toEqual('Hank')
})

test('should not update invalid user fields', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            thing: "whatever"
        })
        .expect(400)
})