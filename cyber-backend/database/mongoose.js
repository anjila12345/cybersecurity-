const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/cyber', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,



})