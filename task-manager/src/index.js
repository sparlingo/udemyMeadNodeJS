const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/User')
const taskRouter = require('./routers/Task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

//Maintenance 
// app.use((req, res, next) => {
//     res.status(503).send('the site is down for maintenance, please try again later')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('server is up on port ' + port)
})

const Task = require('./models/Task')
const User = require('./models/User')
