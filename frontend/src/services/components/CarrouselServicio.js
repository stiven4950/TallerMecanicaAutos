import React, { Component } from 'react';

import { API } from '../../config';


class CarouselQuienes extends Component {
    render() {

        const properties = this.props;

        return (

            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={`${API}/service/photoDetail/${properties.service._id}`} className="d-block w-100 img5" alt={properties.service.name} />
                        <div className="carousel-caption d-none d-md-block carousel5 ">
                            <h1>{properties.service.name}</h1>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default CarouselQuienes;