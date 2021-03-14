import React, { Component } from 'react';

import C1q from '../../core/static/img/img5Carrusel.jpg';

class CarouselQuienes extends Component {
    render() {

        return (

            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <img src={C1q} className="d-block w-100 img5" alt="..." />

                        <div className="carousel-caption d-none d-md-block carousel5 ">
                            <p>Tú mereces más...</p>
                            <h1>¡Tu carro también!</h1>
                        </div>
                    </div>
                </div>
            </div>

        );

    }
}

export default CarouselQuienes