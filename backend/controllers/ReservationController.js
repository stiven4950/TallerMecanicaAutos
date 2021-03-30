const Reservation = require("../models/Reservation");
const { errorHandler } = require("../helpers/dberrorHandler");

exports.create = (req, res) => {
    const reservation = new Reservation(req.body);
    reservation.save((err, data) => {
        if (err) return res.status(400).json({
            error: errorHandler(err)
        });

        res.json(data);
    });

}

exports.list = (req, res) => {
    Reservation.find().exec((err, data) => {

        if (err) return res.status(400).json({
            error: errorHandler(err)
        });

        res.json(data);
    });
}

exports.remove = (req, res) => {
    let reservation = req.reservation;
    reservation.remove((err, deleteReservation) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(error)
            });
        }

        res.json({
            message:"Reservación borrada"
        });
    });
}

exports.reservationById = (req, res, next) =>{
    Reservation.findById(req.params.reservationId)
    .populate("reservation")
    .exec((err, reservation)=>{
        if(err || !reservation){
            return res.status(400).json({
                error: "Reservación no fue en encontrada o no existe"
            });
        }

        req.reservation = reservation;
        next();
    });
}