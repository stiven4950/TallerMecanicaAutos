const mongoose = require("mongoose");

const carrouselSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            maxlength: 50,
            unique: true
        },
        link: {
            type: String,
            require: true,
            maxlength: 500,
            unique: true
        },
        photoMobile: {
            data: Buffer,
            contentType: String
        },
        photoDesktop: {
            data: Buffer,
            contentType: String
        }
    },

    { timestamps: true }
);

module.exports = mongoose.model('Carrousel', carrouselSchema);