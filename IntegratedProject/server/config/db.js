const mongoose  = require('mongoose');

const db = 'mongodb+srv://vnlima9:vnlima9@cluster0.xhmjqqr.mongodb.net/properties?retryWrites=true&w=majority';

const connection = mongoose.connect(db, {
    useNewUrlParser:true,
    useUnifiedTopology:true

});

module.exports = connection