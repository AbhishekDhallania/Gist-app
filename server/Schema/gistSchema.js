const mongoose = require('mongoose');

//Define Schema of Gist
const gistSchema = new mongoose.Schema({
    owner : {
        type : String ,    // Gist creater
        required : true
    },
    title : {
        type : String,    //"Reverse String"
        required : true
    },
    language : {
        type : String,    // Java
        required : true
    },
    code : {
        type : String,    // Code
        required : true
    }
});

module.exports = mongoose.model('Gist' , gistSchema);