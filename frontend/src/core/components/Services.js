import React from 'react';

import CardServicio from './CardServicio';

const Services = ({ services }) => {

  return (
    <section className="py-2 section-card">
      <div className="borde">
        <div className="container">

          <div className="row">
            <div className="col-12">
              <h2 className="d-block mb-2 text-center mb-5">Servicios Que Ofrecemos</h2>
            </div>
          </div>

          <div className="row vertical-center">
            {services.map((service, i) => (

              <CardServicio
                key={i}
                {...service}
              />
              
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;