import React from 'react';
import {Link} from 'react-router-dom';

import ShowImage from './ShowImage';

const CardServicio = ({service})=>{
    return (
        <div className="item col-md-3 col-lg-3">
            <div className="card">
                <ShowImage item={service} url='service' attr='card-img-top img-card'/>
                <div className="card-body">
                    <h5 className="card-title text-center">{service.name}</h5>
                    <p className="card-text text-center">
                        {service.description.split("/").map((item, i)=>{
                            
                            if(i<5) return(
                            <><span className="d-block">{item}</span></>);
                            else return(<></>);
                        })}
                    </p>

                    <Link to="#" className="btn btn-card">Saber más...</Link>
                </div>
            </div>
        </div>
    );
}

export default CardServicio;