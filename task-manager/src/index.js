const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/User')
const taskRouter = require('./routers/Task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('server is up on port ' + port)
})