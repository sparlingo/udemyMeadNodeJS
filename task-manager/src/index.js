const app = require('./app')
const port = process.env.PORT 


server.listen(port, () => {
    console.log('server is up on port ' + port)
})
