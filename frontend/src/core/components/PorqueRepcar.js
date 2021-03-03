import React from 'react';

import '../static/css/estilos.css';
import CardServicio from './CardServicio';

const PorqueRepcar = ({services})=>{
  
  return (
      <section className="py-2 section-card">
        <div className="borde">
          <div className="container">
          
            <div className="row">
              <div className="col-12">
                <h1 className="h2-cards mb-2">Servicios Que Ofrecemos</h1>
              </div>
            </div>
          
            <div className="row vertical-center">
              {services.map((service, i)=>(
                <CardServicio service={service} key={i} />
              ))}
            </div>
            
          </div>
        </div>
      </section>
  );
}
         
export default PorqueRepcar