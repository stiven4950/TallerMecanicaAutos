import React, { Component } from 'react'
//import { Redirect, Link } from 'react-router-dom'
import EQ1 from '../../core/static/img/anaya.jpg'
import EQ2 from '../../core/static/img/duvan.jpg'
import EQ3 from '../../core/static/img/james.jpg'
import EQ4 from '../../core/static/img/omar.jpg'

class EquipoQuienes extends Component {


    render() {

        return (

            <section>
                <div className="borde">

                    <div className=" text-center py-4 mb-4 equipo">
                        <div className="container">
                            <h1 className="font-weight-light text-white">¡Conoce a nuestro equipo!</h1>
                        </div>
                    </div>


                    <div className="container">
                        <div className="row">

                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-0 shadow">
                                    <img src={EQ1} className="card-img-top" alt="..." />
                                    <div className="card-body text-center">
                                        <h5 className="card-title mb-0">Andres Anaya</h5>
                                        <div className="card-text text-black-50">CEO</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-0 shadow">
                                    <img src={EQ2} className="card-img-top" alt="..." />
                                    <div className="card-body text-center">
                                        <h5 className="card-title mb-0">Duvan Chavarro</h5>
                                        <div className="card-text text-black-50">Web Developer</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-0 shadow">
                                    <img src={EQ3} className="card-img-top" alt="..." />
                                    <div className="card-body text-center">
                                        <h5 className="card-title mb-0">James Tovar</h5>
                                        <div className="card-text text-black-50">Mechanic</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-0 shadow">
                                    <img src={EQ4} className="card-img-top" alt="..." />
                                    <div className="card-body text-center">
                                        <h5 className="card-title mb-0">Stiven Rivera</h5>
                                        <div className="card-text text-black-50">Assistant</div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

        )

    }
}

export default EquipoQuienes