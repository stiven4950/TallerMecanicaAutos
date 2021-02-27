const Vehicle = require("../models/Vehicle");
const { errorHandler } = require("../helpers/dberrorHandler");

exports.create = (req, res) => {
    const vehicle = new Vehicle(req.body);
    vehicle.save((err, data) => {
        if (err) return res.status(400).json({
            error: errorHandler(err)
        });

        res.json(data);
    });

}

exports.list = (req, res) => {
    Vehicle.find().exec((err, data) => {

        if (err) return res.status(400).json({
            error: errorHandler(err)
        });

        res.json(data);
    });
}