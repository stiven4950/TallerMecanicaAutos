const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            maxlength: 200,
            unique: true
        },
        author: {
            type: String,
            require: true,
            maxlength: 50,
        },
        photo: {
            data: Buffer,
            contentType: String,
        },
        description: {
            type: String,
            require: true,
            maxlength: 500
        },
    },

    { timestamps: true }
);
/*type: preventivo, correctivo, embellecimiento*/
module.exports = mongoose.model('Blog', blogSchema);