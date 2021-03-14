const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const { error } = require('console');

const Carrousel = require("../models/Carrousel");
const { errorHandler } = require("../helpers/dberrorHandler");

exports.create = (req, res)=>{
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files)=>{
        if(err){
            return res.status(400).json({
                error: 'Imagen no cargada'
            });
        }
        
        let carrousel = new Carrousel(fields);
        /* PHOTO */
        if(files.photoMobile){
            if(files.photoDesktop){
                
                if(files.photoMobile.size>1000000 & files.photoDesktop.size>1000000){
                    return res.status(400).json({
                        error: 'Imagen muy pesada máximo 1MB'
                    });
                }

                carrousel.photoMobile.data = fs.readFileSync(files.photoMobile.path);
                carrousel.photoMobile.contentType = files.photoMobile.type;

                carrousel.photoDesktop.data = fs.readFileSync(files.photoDesktop.path);
                carrousel.photoDesktop.contentType = files.photoDesktop.type;
            }
        }

        carrousel.save((err, result)=>{
            if(err){
                return res.status(400).json({
                    error: errorHandler(error)
                });
            }

            res.json(result);
        });
    });
}

exports.list = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : 'name';

    Carrousel.find().select('-photo')
        .populate('carrousel')
        .sort([[sortBy, order]])
        .exec((err, items) => {
            if (err) {
                return res.status(400).json({
                    error: 'Carrousel no encontrado'
                });
            }

            res.json(items);
        });
}

exports.remove = (req, res) => {
    let carrousel = req.carrousel;
    carrousel.remove((err, deleteCarrousel) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(error)
            });
        }

        res.json(carrousel);
    });
}

exports.carrouselId = (req, res, next) => {
    Carrousel.findById(req.params.carrouselId)
        .populate("carrousel")
        .exec((err, carrousel) => {
            if (err || !carrousel) {
                return res.status(400).json({
                    error: errorHandler(error)
                });
            }

            req.carrousel = carrousel;
            next();
        });
}

exports.photoMobile = (req, res, next) => {
    if (req.carrousel.photoMobile.data) {
        res.set('Content-Type', req.carrousel.photoMobile.contentType);
        return res.send(req.carrousel.photoMobile.data)
    }
    next();
}

exports.photoDesktop = (req, res, next) => {
    if (req.carrousel.photoDesktop.data) {
        res.set('Content-Type', req.carrousel.photoDesktop.contentType);
        return res.send(req.carrousel.photoDesktop.data);
    }
    next();
}