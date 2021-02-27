const Service = require("../models/Service");
const { errorHandler } = require("../helpers/dberrorHandler");

exports.create = (req, res) => {
    const service = new Service(req.body);
    service.save((err, data) => {
        if (err) return res.status(400).json({
            error: errorHandler(err)
        });

        res.json(data);
    });

}

exports.list = (req, res) => {
    Service.find().exec((err, data) => {

        if (err) return res.status(400).json({
            error: errorHandler(err)
        });

        res.json(data);
    });
}