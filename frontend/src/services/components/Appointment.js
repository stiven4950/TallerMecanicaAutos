// Predefined packages
import React from 'react';

// Custom packages
import BringCar from './BringCar';
import Divider from '../../core/components/Divider';

const Appointment = ({date, setDate, time, setTime, setBringCar}) => {
    return (
        <>
            <div className="row">
                <div className="col-md-4 col-lg-4">
                    <div className="row">
                        <div className="col-3">
                            <i className="fas fa-calendar-check icon-c"></i>
                        </div>
                        <div className="col-9">
                            <h3>Fecha</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-10 col-lg-3 mx-auto">
                    <input
                        type="date"
                        min={date}
                        max="2021-12-28"
                        className="rounded-pill datepicker"
                        onChange={event=>setDate(event.target.value)}
                        value={date}
                        required
                    />
                </div>
            </div>

            <Divider attr="main-color my-3" />

            <div className="row">
                <div className="col-md-6 col-lg-6">
                    <div className="row">
                        <div className="col-2">
                            <i className="fas fa-car icon-c"></i>
                        </div>
                        <div className="col-10">
                            <h3>Recepción del carro</h3>
                        </div>
                    </div>
                </div>

            </div>

            <BringCar icon='fa-place-of-worship' name="Yo llevo mi carro al taller" setBringCar={setBringCar} />
            <BringCar icon='fa-map-marked-alt' name="Lleven mi carro al taller" setBringCar={setBringCar} />
            <BringCar icon='fa-home' name="Quiero el servicio en mi casa" setBringCar={setBringCar} />

            <Divider attr="main-color my-3" />

            <div className="row">
                <div className="col-md-4 col-lg-4">
                    <div className="row">
                        <div className="col-3">
                            <i className="fas fa-hourglass-half icon-c"></i>
                        </div>
                        <div className="col-9">
                            <h3>Hora</h3>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-md-10 col-lg-3 mx-auto">
                    

                <select
                    className="rounded-pill datepicker mx-2"
                    name='time'
                    onChange={event=>setTime(event.target.value)}
                    value={time} required
                    >
                    <option value="">Seleccionar hora</option>
                    <option value="08:00">08:00 a. m</option>
                    <option value="09:00">09:00 a. m</option>
                    <option value="10:00">10:00 a. m</option>
                    <option value="11:00">11:00 a. m</option>
                    <option value="12:00">12:00 p. m</option>
                    <option value="13:00">1:00 p. m</option>
                    <option value="14:00">2:00 p. m</option>
                    <option value="15:00">3:00 p. m</option>
                    <option value="16:00">4:00 p. m</option>
                    <option value="17:00">5:00 p. m</option>
                </select>
                </div>

            </div>
        </>
    );
}


export default Appointment;