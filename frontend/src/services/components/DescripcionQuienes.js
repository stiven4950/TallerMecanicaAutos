import React, { Component } from 'react';
//import { Redirect, Link } from 'react-router-dom'
import DQ1 from '../../core/static/img/trabajos_realizados0.jpg';
import DQ2 from '../../core/static/img/trabajos_realizados1.jpg';
import DQ3 from '../../core/static/img/trabajos_realizados2.jpg';
import DQ4 from '../../core/static/img/trabajos_realizados3.jpg';
import DQ5 from '../../core/static/img/cambio_aceite.jpg';

class CarouselQuienes extends Component {


    render() {

        return (

            <section className="description">
                <div className="borde">

                    <div className="container">

                        <h1 className="my-4">EL MEJOR SERVICIO DE MECANICA
                            <small> PARA TU VEHÍCULO</small>
                        </h1>

                        <div className="row">

                            <div className="col-md-7">
                                <img className="img-fluid" src={DQ1} alt="" />
                            </div>

                            <div className="col-md-5 ">

                                <h2 className="my--0">Nuestra Misión</h2>
                                <p>Movilidad es mucho más que reducir tiempos de transporte. La rapidez y el costo de llegar a un
                                lugar determina el acceso a oportunidades de trabajo, estudios y otras para los habitantes
                        urbanos. Entonces la movilidad no es una cuestión de comodidad, si no de calidad de vida.</p>

                                <h2 className="my--0">Nuestra Visión</h2>
                                <p>El mundo de reparaciones es complejo y difícil de navegar. La calidad de servicios y partes es
                                muy variable entre los múltiples proveedores y talleres. Nosotros creemos que la tecnología
                                puede ser el facilitador que permite crear un servicio confiable y asequible apoyándose en los
                        mejores talleres y proveedores.</p>
                            </div>

                        </div>

                        <h3 className="my-3">Trabajos Realizados</h3>

                        <div className="row">

                            <div className="col-md-3 col-sm-6 mb-4">
                                <img className="img-fluid" src={DQ2} alt="" />
                            </div>

                            <div className="col-md-3 col-sm-6 mb-4">
                                <img className="img-fluid" src={DQ3} alt="" />
                            </div>

                            <div className="col-md-3 col-sm-6 mb-4">
                                <img className="img-fluid" src={DQ4} alt="" />
                            </div>

                            <div className="col-md-3 col-sm-6 mb-4">
                                <img className="img-fluid" src={DQ5} alt="" />
                            </div>

                        </div>

                    </div>
                </div>

            </section>
        )

    }
}

export default CarouselQuienes