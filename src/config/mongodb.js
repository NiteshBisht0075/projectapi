const mongoose = require('mongoose');
const url = process.env.MONGODB_URL||"mongodb://localhost:27017/test";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify:false}, ()=>{console.log('mongodb working at URL:', url)});