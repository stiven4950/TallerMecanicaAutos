const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            maxlength: 50,
            unique: true
        },
        description: {
            type: String,
            require: true,
            maxlength: 1000,
            unique: false
        },
        type: {
            type: String,
            require: true,
            maxlength: 32,
            unique: false
        },
        photo: {
            data: Buffer,
            contentType: String,
        },
        photoDetail: {
            data: Buffer,
            contentType: String,
        }
    },

    { timestamps: true }
);
/* type: preventivo, correctivo, embellecimiento */
module.exports = mongoose.model('Service', serviceSchema);