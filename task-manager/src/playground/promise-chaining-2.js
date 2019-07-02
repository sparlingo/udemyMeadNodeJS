require('../db/mongoose')
const Task = require('../models/Task')

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5d0399ca9ba94325e0a2de07').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})