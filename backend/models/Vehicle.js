const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
    {
        vehicleNumber : {
            type : String,
            require : true,
            maxlength : 32,
            unique : true
        },
        chasisNumber : {
            type : String,
            require : true,
            maxlength : 32,
            unique : true
        },
        brand : {
            type : String,
            require : true,
            maxlength : 32,
            unique : false
        },
        model : {
            type : String,
            require : true,
            maxlength : 32,
            unique : false
        },
        color : {
            type : String,
            require : true,
            maxlength : 10,
            unique : true
        },
        dateFacturing : {
            type : String,
            require : true,
            maxlength : 9,
            unique : true
        },
        typeGas : {
            type : String,
            require : true,
            maxlength : 20,
            unique : false
        },
        description : {
            type : String,
            require : true,
            maxlength : 500,
            unique : false
        },
        deleted : {
            type : String,
            require : true,
            maxlength : 32,
            unique : false
        },
    },

    { timestamps : true }
);

module.exports = mongoose.model('Vehicle', vehicleSchema);