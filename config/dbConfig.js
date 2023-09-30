const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://uvaiskolambalam:643882478@cluster0.li7aq88.mongodb.net/tasleeh')
const connection = mongoose.connection;


connection.on('connected', () => {
    console.log('mongo db connected');
});

connection.on('error', (error) => {
    console.log('error in mongo db connection', error);
})

module.exports - mongoose;