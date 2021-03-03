const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const { error } = require('console');

const Brand = require("../models/Brand");
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
        
        let brand = new Brand(fields);
        /* PHOTO */
        if(files.photo){
                
                if(files.photo.size>1000000){
                    return res.status(400).json({
                        error: 'Imagen muy pesada máximo 1MB'
                    });
                }

                brand.photo.data = fs.readFileSync(files.photo.path);
                brand.photo.contentType = files.photo.type;
        }

        brand.save((err, result)=>{
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

    Brand.find().select('-photo')
        .populate('brand')
        .sort([[sortBy, order]])
        .exec((err, brands) => {
            if (err) {
                return res.status(400).json({
                    error: 'Marca no encontrada'
                });
            }

            res.json(brands);
        });
}

exports.remove = (req, res) => {
    let brand = req.brand;
    brand.remove((err, deleteBrand) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(error)
            });
        }

        res.json(brand);
    });
}

exports.brandId = (req, res, next) => {
    Brand.findById(req.params.brandId)
        .populate("brand")
        .exec((err, brand) => {
            if (err || !brand) {
                return res.status(400).json({
                    error: errorHandler(error)
                });
            }

            req.brand = brand;
            next();
        });
}

exports.photo = (req, res, next) => {
    if (req.brand.photo.data) {
        res.set('Content-Type', req.brand.photo.contentType);
        return res.send(req.brand.photo.data)
    }
    next();
}