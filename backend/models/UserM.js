const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName : {
            type : String,
            require : true,
            maxlength : 100,
            unique : false
        },
        lastName : {
            type : String,
            require : true,
            maxlength : 100,
            unique : false
        },
        personalIdentification: {
            type : String,
            require : true,
            maxlength : 20,
            unique : true
        },
        phone : {
            type : String,
            require : true,
            maxlength : 20,
            unique : true
        },
        email : {
            type : String,
            require : true,
            maxlength : 100,
            unique : true
        },
        password : {
            type : String,
            require : true,
            maxlength : 500,
            unique : false
        },
        birthday : {
            type : String,
            require : true,
            maxlength : 20,
            unique : false
        },
    },

    { timestamps : true }
);

module.exports = mongoose.model('UserM', userSchema);