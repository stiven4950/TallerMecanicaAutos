// Import libraries
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// Use methods of libreries

const app = express();
require('dotenv').config();

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(cors());

// Database conexion
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,

}).then(() => { console.log("Base de datos conectada") });

// Routed setup

//app.use("/api/user", require("./routes/userRoute"));
app.use("/api/service", require("./routes/serviceRoute"));
app.use("/api/brand", require("./routes/brandRoute"));
//app.use("/api/vehicle", require("./routes/vehicleRoute"));

// Routes
app.get('/', (req, res) => {
    res.send('Hola desde el servidor');
});

// Listen Port
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Servidor está siendo ejecutado en el puerto ${port}`);
});