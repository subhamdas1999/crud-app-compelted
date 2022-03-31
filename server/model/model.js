const mongoose = require('mongoose');

var schema2 = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : String,
    status : String
})

// here doucment name is userdb pass the scheme variable

const Userdb = mongoose.model('userdb', schema2);

module.exports = Userdb;