const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const microServiceShema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            require: true,
            maxlength: 100,
        },
        subtitle: {
            type: String,
            trim: true,
            require: true,
            maxlength: 500,
        },
        slug: {
            type: String,
            require: true,
            maxlength: 60,
            unique: true
        },
        description : {
            type:String,
            trim:true,
            require:true,
            maxlength:1000,
        },
        recomendation : {
            type:String,
            trim:true,
            require:true,
            maxlength:1000,
        },
        recomendation2 : {
            type:String,
            trim:true,
            require:true,
            maxlength:1000,
        },
        service : {
            type:ObjectId,
            ref:'Service',
            require:true,
        },
        photoMobile : {
            data: Buffer,
            contentType:String,
        },
        photoDesktop : {
            data: Buffer,
            contentType:String,
        },
        icon : {
            data: Buffer,
            contentType:String,
        }
    },
    {
        timestamps:true
    }
);

module.exports = mongoose.model('MicroService', microServiceShema);