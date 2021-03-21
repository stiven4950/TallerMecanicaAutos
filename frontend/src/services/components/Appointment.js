import React from 'react';
import Divider from '../../core/components/Divider';
import BringCar from './BringCar';

const Appointment = () => {


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
                    <input type="date" name="datereservation" min="2021-03-17" max="2021-12-28" className="rounded-pill datepicker" required />
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

            <BringCar icon='fa-place-of-worship' name="Yo llevo mi carro al taller" />
            <BringCar icon='fa-map-marked-alt' name="Lleven mi carro al taller" />
            <BringCar icon='fa-home' name="Quiero el servicio en mi casa" />

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
                    <input type="time" required min="08:00" max="17:00" className="rounded-pill datepicker" />
                </div>
            </div>
        </>
    );
}


export default Appointment;