import React from 'react';

import '../static/css/estilos.css';
import CardBrand from './CardBrand';

const BrandsSection = ({brands})=>{
  
  return (
      <section className="py-2">
        <div className="borde1">
          <div className="container">
          
            <div className="row">
              <div className="col-12">
                <h1 className="h2-cards mb-2">Marcas Que Atendemos</h1>
              </div>
            </div>
          
            <div className="row vertical-center">
              {brands.map((brand, i)=>(
                <CardBrand brand={brand} />
              ))}
            </div>
            
          </div>
        </div>
      </section>
  );
}
         
export default BrandsSection;