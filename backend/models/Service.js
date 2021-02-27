const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            require : true,
            maxlength : 32,
            unique : true
        },
        description : {
            type : String,
            require : true,
            maxlength : 100,
            unique : false
        },
        deleted : {
            type : Boolean,
            require : true,
            unique : false
        },
        type : {
            type : String,
            require : true,
            maxlength : 32,
            unique : true
        },
    },

    { timestamps : true }
);

module.exports = mongoose.model('Service', serviceSchema);