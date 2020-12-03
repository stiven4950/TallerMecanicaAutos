import React from 'react'
//import { Redirect, Link } from 'react-router-dom'
import '../css/estilos.css'
import P1 from '../img/circulo.png'

const Beneficios = ()=>{
    return(
        <section className="py-1 section-card section-card-naranja">
            <div className="borde2">
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <h2>¿Por Qué Venir a RepCar?</h2>
                        </div>
                    </div>

                    <div className="row vertical-center">
                        
                        <div className="col-md-3 tarjeta-beneficio">
                            <div className="row vertical-center">
                                <div className="col">
                                    <h4 className="benefit-title">Servicios Garantizados</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <img src={P1} className="img-beneficios" alt=""/>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 tarjeta-beneficio">
                            <div className="row vertical-center">
                                <div className="col">
                                    <h4 className="benefit-title">Ajustado a tu Presupuesto</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <img src={P1} className="img-beneficios" alt=""/>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 tarjeta-beneficio">
                            <div className="row vertical-center">
                                <div className="col">
                                    <h4 className="benefit-title">Información Permanente</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <img src={P1} className="img-beneficios" alt=""/>                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 tarjeta-beneficio">
                            <div className="row vertical-center">
                                <div className="col">
                                    <h4 className="benefit-title">Servicio Domicilio</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <img src={P1} className="img-beneficios" alt=""/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
         
export default Beneficios