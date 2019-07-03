const express = require('express')
require('./db/mongoose')
const User = require('./models/User')
const Task = require('./models/Task')
const userRouter = require('./routers/User')
const taskRouter = require('./routers/Task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

const router = new express.Router()

app.listen(port, () => {
    console.log('server is up on port ' + port)
})