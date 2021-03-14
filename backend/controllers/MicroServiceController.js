const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const { error } = require('console');

const MicroService = require("../models/MicroService");
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
        
        let microservice = new MicroService(fields);
        /* PHOTO */
        if(files.photoMobile){
            if(files.photoDesktop){
                
                if(files.photoMobile.size>1000000 & files.photoDesktop.size>1000000){
                    return res.status(400).json({
                        error: 'Imagen muy pesada máximo 1MB'
                    });
                }

                microservice.photoMobile.data = fs.readFileSync(files.photoMobile.path);
                microservice.photoMobile.contentType = files.photoMobile.type;

                microservice.photoDesktop.data = fs.readFileSync(files.photoDesktop.path);
                microservice.photoDesktop.contentType = files.photoDesktop.type;
            }
        }

        microservice.save((err, result)=>{
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

    MicroService.find().select('-photo')
        .populate('microservice')
        .sort([[sortBy, order]])
        .exec((err, microservices) => {
            if (err) {
                return res.status(400).json({
                    error: 'Microservicio no encontrado'
                });
            }

            res.json(microservices);
        });
}

/*exports.findById = (req, res) => {

    Service.findById(req.params.serviceId)
        .exec((err, service) => {
            if (err) {
                return res.status(400).json({
                    error: 'Servicio no encontrado'
                });
            }

            res.json(service);
        });
}*/

exports.findName = (req, res) => {
    
    MicroService.find({'service':req.params.serviceName})
        .exec((err, microservice) => {
            if (err) {
                return res.status(400).json({
                    error: 'Servicio no encontrado'
                });
            }

            res.json(microservice);
        });
}

exports.remove = (req, res) => {
    let microservice = req.microservice;
    microservice.remove((err, deleteMicroService) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(error)
            });
        }

        res.json(microservice);
    });
}

exports.microServiceId = (req, res, next) => {
    MicroService.findById(req.params.microServiceId)
        .populate("microservice")
        .exec((err, microservice) => {
            if (err || !microservice) {
                return res.status(400).json({
                    error: errorHandler(error)
                });
            }

            req.microservice = microservice;
            next();
        });
}



exports.photoMobile = (req, res, next) => {
    if (req.microservice.photoMobile.data) {
        res.set('Content-Type', req.microservice.photoMobile.contentType);
        return res.send(req.microservice.photoMobile.data);
    }
    next();
}

exports.photoDesktop = (req, res, next) => {
    if (req.microservice.photoDesktop.data) {
        res.set('Content-Type', req.microservice.photoDesktop.contentType);
        return res.send(req.microservice.photoDesktop.data);
    }
    next();
}