import React, { Component } from 'react'
//import { Redirect, Link } from 'react-router-dom'
import '../css/estilos.css'
import P1 from '../img/circulo.png'

class Beneficios extends Component 
{
    render()
    {
        return (
            <section className="py-1 section-card section-card-naranja">
                <div className="borde2">
                    <div className="container ">
                        <h2>¿POR QUÉ VENIR A REPCAR?</h2>
                        <div className="row">
                        
                        <div className="col tarjeta-beneficio">
                            <div className="row">
                            <h3>SERVICIOS GARANTIZADOS</h3>
                            </div>
                            <div className="row">
                            <img src={P1} className="img-beneficios" alt=""/>
                            </div>
                        </div>
                        <div className="col tarjeta-beneficio">
                            <div className="row">
                                <h3>AJUSTADO A TU PRESUPUESTO</h3>
                                </div>
                                <div className="row">
                                <img src={P1} className="img-beneficios" alt=""/>
                                </div>
                        </div>
                        <div className="col tarjeta-beneficio">
                            <div className="row">
                                <h3>INFORMACIÓN PERMANENTE</h3>
                                </div>
                                <div className="row">
                                <img src={P1} className="img-beneficios" alt=""/>
                                </div>
                        </div>
                        <div className="col tarjeta-beneficio">
                            <div className="row">
                                <h3>TODOS LOS SERVICIOS</h3>
                                </div>
                                <div className="row">
                                <img src={P1} className="img-beneficios" alt=""/>
                                </div>
                        </div>
                        <div className="col tarjeta-beneficio">
                            <div className="row">
                                <h3>SERVICIO DOMICILIO</h3>
                            </div>
                            <div className="row">
                                <img src={P1} className="img-beneficios" alt=""/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
         
export default Beneficios