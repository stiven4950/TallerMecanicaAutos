const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            maxlength: 50,
            unique: true
        },
        photo: {
            data: Buffer,
            contentType: String,
        }
    },

    { timestamps: true }
);
/* type: preventivo, correctivo, embellecimiento */
module.exports = mongoose.model('Brand', brandSchema);