const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            maxlength : 100,
            default:''
        },
        lastname : {
            type : String,
            maxlength : 100,
            default:''
        },
        phone : {
            type : String,
            maxlength : 20,
            unique : true,
            default:''
        },
        email : {
            type : String,
            require : true,
            maxlength : 100,
            unique : true
        },
        address : {
            type : String,
            maxlength : 100,
            default:''
        },
    },

    { timestamps : true }
);

module.exports = mongoose.model('User', userSchema);