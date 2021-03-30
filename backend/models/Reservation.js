const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
    {
        brand: {
            type: String,
            require: true,
            maxlength: 50,
            unique: false
        },
        model: {
            type: String,
            require: true,
            maxlength: 50,
            unique: false
        },
        year: {
            type: Number,
            require: true,
            unique: false
        },
        services:{
            type: Array,
            default: []
        },
        date: {
            type: String,
            require: true,
            maxlength: 10,
            unique: false
        },
        time: {
            type: String,
            require: true,
            maxlength: 5,
            unique: false
        },
        bringcar: {
            type: String,
            require: true,
            maxlength: 35,
            unique: false
        },
        name: {
            type: String,
            require: true,
            maxlength: 50,
            unique: false
        },
        lastname: {
            type: String,
            require: true,
            maxlength: 50,
            unique: false
        },
        phone: {
            type: String,
            require: true,
            maxlength: 10,
            unique: false
        },
        email: {
            type: String,
            require: true,
            maxlength: 500,
            unique: false
        },
        comment: {
            type: String,
            require: true,
            maxlength: 1000,
            unique: false
        },
        checked: {
            type: Number,
            unique: false,
            default: 0
        },
    },

    { timestamps: true }
);

module.exports = mongoose.model('Reservation', reservationSchema);