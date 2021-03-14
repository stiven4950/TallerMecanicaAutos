const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const CarModelSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            maxlength: 50,
            unique: true
        },
        brand : {
            type:ObjectId,
            ref:'Brand',
            require:true,
        },
    },

    { timestamps: true }
);

module.exports = mongoose.model('CarModel', CarModelSchema);