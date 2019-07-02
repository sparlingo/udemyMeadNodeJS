const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://udemyNode:halohalo@cluster0-n0zzc.mongodb.net/test', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})
