import React from 'react';
import { Link } from 'react-router-dom';

import ShowImage from './ShowImage';

const CardMicroService = ({ microservice }) => {
    return (
        <div className="item col-md-3 col-lg-3">
            <div className="card">
                <div className="view overlay">
                    <div className="fade-in">
                        <ShowImage item={microservice} url='microservice' attr='card-img-top' option='photoMobile' />
                    </div>
                    <Link to="#">
                        <div className="mask rgba-white-slight"></div>
                    </Link>
                </div>

                <div className="card-body">
                    <h5 className="card-title text-center">{microservice.title}</h5>
                    <p className="card-text">{microservice.description}</p>

                    <Link to="#" className="btn sunny-morning-gradient rounded-pill waves-effect d-block mic-bottom">
                        Cotización
                    </Link>

                </div>
            </div>
        </div>
    );
}


export default CardMicroService;