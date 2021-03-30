// Predefined packages
import React, { Component } from 'react';

// Custom packages
import { API } from '../../config';


class CarouselQuienes extends Component {
    render() {

        const {_id,name} = this.props.service;

        return (

            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={`${API}/service/photoDetail/${_id}`} className="d-block w-100 img5" alt={name} />
                        <div className="carousel-caption d-none d-md-block carousel5 ">
                            <h1>{name}</h1>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default CarouselQuienes;