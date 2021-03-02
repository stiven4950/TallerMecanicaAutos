import React from 'react';
//import { Redirect, Link } from 'react-router-dom'
import '../css/estilos.css';
import P1 from '../img/circulo.png';

const Beneficios = ()=>{

    const listBenefits = [
        "Servicios Garantizados",
        "Ajustado a tu Presupuesto",
        "Información Permanente",
        "Servicio Domicilio",
    ];

    const benefits = listBenefits.map((benefit)=>{
        return (
            <div className="item col-md- tarjeta-beneficio" key={benefit}>
                <div className="row vertical-center">
                    <div className="col-12">
                        <h4 className="benefit-title">{benefit}</h4>
                        { benefit.length > 18 ? "": <br/>}
                    </div>
                </div>
                <div className="row vertical-center">
                    <div className="col-12">
                        <img src={P1} className="img-beneficios" alt=""/>
                    </div>
                </div>
            </div>
        );
    });
    
    return (
        <section className="py-1 section-card section-card-naranja">
            <div className="borde2">
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <h2>¿Por Qué Venir a RepCar?</h2>
                        </div>
                    </div>

                    <div className="row vertical-center">
                        
                        <div className="owl-carousel  owl-theme">
                            { benefits.map((benefit=>{
                                return benefit;
                            })) }
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
         
export default Beneficios;