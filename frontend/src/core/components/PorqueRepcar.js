import React from 'react';
import { Link } from 'react-router-dom';

import P1 from '../static/img/circulo.png';
import '../static/css/estilos.css';

const PorqueRepcar = ()=>{
  
  return (
      <section className="py-2 section-card">
        <div className="borde">
          <div className="container">
          
            <div className="row">
              <div className="col-12">
                <h3 className="h3-cards">¿Por Qué Venir a RepCar?</h3>
              </div>
            </div>
          
            <div className="row vertical-center">
              
              <div className="col-md-4">
                <div className="card">
                  <img src={P1} className="card-img-top img-card" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                    <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="" className="btn btn-card">Saber más...</Link>
                  </div>
                </div>
              </div>
          
              <div className="col-md-4">
                <div className="card">
                  <img src={P1} className="card-img-top img-card" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                    <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="" className="btn btn-card">Saber más...</Link>
                  </div>
                </div>
              </div>
          
              <div className="col-md-4">
                <div className="card">
                  <img src={P1} className="card-img-top img-card" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                    <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="" className="btn btn-card">Saber más...</Link>
                  </div>
                </div>
              </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}
         
export default PorqueRepcar