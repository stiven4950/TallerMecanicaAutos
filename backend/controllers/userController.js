const UserM = require("../models/UserM");
const { errorHandler } = require("../helpers/dberrorHandler");

exports.create = (req, res) => {
    const user = new UserM(req.body);
    user.save((err, data) => {
        if (err) return res.status(400).json({
            error: errorHandler(err),
            reason:'Posiblemente el usuario ya está creado'
        });

        res.json(data);
    });

}

exports.editUser = (req, res) => {

    const filter = {email:req.body.email}
    const update = req.body;

    UserM.updateOne(filter, update).then(raw=>console.log);
    
    res.json({'success':true});
}

exports.byEmail = (req, res) => {
    UserM.find({'email':req.params.byEmail})
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: 'Perfil no encontrado'
                });
            }

            res.json(data);
        });
}