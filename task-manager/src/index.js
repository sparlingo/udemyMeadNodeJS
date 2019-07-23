const express = require('express')
require('./db/mongoose')
const multer = require('multer')
const userRouter = require('./routers/User')
const taskRouter = require('./routers/Task')

const app = express()
const port = process.env.PORT || 3000

const upload = multer({
    dest: 'uploads',
    limits: {
        fileSize: 10000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a word document'))
        }

        cb(undefined, true)
    }
})


app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

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
