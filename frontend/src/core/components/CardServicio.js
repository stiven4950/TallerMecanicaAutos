import React from 'react';
import { Link } from 'react-router-dom';

import ShowImage from './ShowImage';

const CardServicio = ({ service }) => {
    return (
        <div className="item col-md-3 col-lg-3">
            <div className="card">
                <div className="fade-in">
                    <ShowImage item={service} url='service' attr='card-img-top img-card pt-1' />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center">{service.name}</h5>
                    <p className="card-text text-center">
                        {service.description.split("/").map((item, i) => (
                            <span className="d-block" key={i}>{item}</span>
                        ))}
                    </p>

                    <Link to={`servicio/${service.slug}`} className="btn btn-card rounded-pill waves-effect">Saber más...</Link>
                </div>
            </div>
        </div>
    );
}

export default CardServicio;