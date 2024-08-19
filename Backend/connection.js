const mongoose = require('mongoose');

const url = 'mongodb+srv://prakharbajpai201:1234@cluster0.5itlbzh.mongodb.net/babycaresystem?retryWrites=true&w=majority&appName=Cluster0';


mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;