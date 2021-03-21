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
        min :{
            type: Number,
            require: true,
            maxlength: 4,
            unique: false,
        },
        max:{
            type: Number,
            require: true,
            maxlength: 4,
            unique: false,
        },
    },

    { timestamps: true }
);

module.exports = mongoose.model('CarModel', CarModelSchema);