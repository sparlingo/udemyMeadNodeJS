require('../db/mongoose')
const User = require('../models/User')

// User.findOneAndUpdate('5d17006cc2382d1564b645be', { age: 82 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 82 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
    console.log(count)
}

updateAgeAndCount('5d0399ca9ba94325e0a2de06', 3)