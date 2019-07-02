const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb+srv://udemyNode:halohalo@cluster0-n0zzc.mongodb.net/task-manager'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('unable to connect')
    }

    console.log('connected to database')

    const db = client.db(databaseName)
    
    // db.collection('users').updateOne({
    //     _id: new ObjectID("5cfa50f87126851f0c022710")
    // }, {
    //     $set: {
    //         name: 'Mike Smith'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    // db.collection('tasks').findOne({ _id: '5cfbb5512a32db44306beac1'}, (error, user) => {
    //     if (error) {
    //         return console.log('unable to find that task')
    //     }
    // })
    // db.collection('tasks').insertOne({
    //     name: 'that other thing',
    //     completed: false
    // }, (error, result) => {
    //     if (error) {
    //         console.log('unable to insert task')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('users').find({ age: 37 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').findOne({ _id: 'ljerjlje8324ou24' }, (error, user) => {
    //     if (error) {
    //         return console.log('unable to find that user')
    //     }

    //     console.log(user)
    // })
    // db.collection('users').insertOne({
    //     name: 'Kevin Sparling',
    //     age: 37
    // }, (error, result) => {
    //     if( error ) {
    //         console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })
})