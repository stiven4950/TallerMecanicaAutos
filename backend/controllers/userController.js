const UserM = require("../models/UserM");
const { errorHandler } = require("../helpers/dberrorHandler");

exports.create = (req, res) => {
    const user = new UserM(req.body);
    user.save((err, data) => {
        if (err) return res.status(400).json({
            error: errorHandler(err)
        });

        res.json(data);
    });

}

exports.list = (req, res) => {
    UserM.find().exec((err, data) => {

        if (err) return res.status(400).json({
            error: errorHandler(err)
        });

        res.json(data);
    });
}