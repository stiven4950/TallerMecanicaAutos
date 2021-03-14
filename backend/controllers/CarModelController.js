const CarModel = require("../models/CarModel");
const { errorHandler } = require("../helpers/dberrorHandler");

exports.create = (req, res) => {
    
    for(i in req.body){
        let carModel = new CarModel(req.body[i]);
        carModel.save((err, data) => {
            if (err) return res.status(400).json({
                error: errorHandler(err)
            });
            
        });
    }
    res.json({"message":"created"});
}

exports.list = (req, res) => {
    CarModel.find().exec((err, data) => {

        if (err) return res.status(400).json({
            error: errorHandler(err)
        });

        res.json(data);
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

exports.findByBrand = (req, res) => {
    
    CarModel.find({'brand':req.params.findByBrand})
        .exec((err, carModel) => {
            if (err) {
                return res.status(400).json({
                    error: 'Servicio no encontrado'
                });
            }

            res.json(carModel);
        });
}
