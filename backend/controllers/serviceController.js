const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const { error } = require('console');

const Service = require("../models/Service");
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
        
        let service = new Service(fields);
        /* PHOTO */
        if(files.photo){
            if(files.photoDetail){
                
                if(files.photo.size>1000000 & files.photoDetail.size>1000000){
                    return res.status(400).json({
                        error: 'Imagen muy pesada máximo 1MB'
                    });
                }

                service.photo.data = fs.readFileSync(files.photo.path);
                service.photo.contentType = files.photo.type;

                service.photoDetail.data = fs.readFileSync(files.photoDetail.path);
                service.photoDetail.contentType = files.photoDetail.type;
            }
        }

        service.save((err, result)=>{
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

    Service.find().select('-photo')
        .populate('service')
        .sort([[sortBy, order]])
        .exec((err, services) => {
            if (err) {
                return res.status(400).json({
                    error: 'Servicio no encontrado'
                });
            }

            res.json(services);
        });
}

exports.remove = (req, res) => {
    let service = req.service;
    service.remove((err, deleteService) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(error)
            });
        }

        res.json(service);
    });
}

exports.serviceId = (req, res, next) => {
    Service.findById(req.params.serviceId)
        .populate("service")
        .exec((err, service) => {
            if (err || !service) {
                return res.status(400).json({
                    error: errorHandler(error)
                });
            }

            req.service = service;
            next();
        });
}

exports.photo = (req, res, next) => {
    if (req.service.photo.data) {
        res.set('Content-Type', req.service.photo.contentType);
        return res.send(req.service.photo.data)
    }
    next();
}

exports.photoDetail = (req, res, next) => {
    if (req.service.photoDetail.data) {
        res.set('Content-Type', req.service.photoDetail.contentType);
        return res.send(req.service.photoDetail.data);
    }
    next();
}