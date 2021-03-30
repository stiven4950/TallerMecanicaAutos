import React from 'react';
import { Link } from 'react-router-dom';

import ShowImage from './ShowImage';

const CardMicroService = ({ _id, title, description }) => {
    return (
        <div className="item col-md-3 col-lg-3">
            <div className="card">
                <div className="view overlay">
                    <div className="fade-in">
                        <ShowImage
                            id={_id}
                            name={title}
                            url='microservice'
                            attr='card-img-top'
                            option='photoMobile'
                        />
                    </div>
                    <Link to="#">
                        <div className="mask rgba-white-slight"></div>
                    </Link>
                </div>

                <div className="card-body">
                    <h5 className="card-title text-center">{title}</h5>
                    <p className="card-text">{description}</p>

                    <Link to="#" className="btn sunny-morning-gradient rounded-pill waves-effect d-block mic-bottom">
                        Cotización
                    </Link>

                </div>
            </div>
        </div>
    );
}


export default CardMicroService;