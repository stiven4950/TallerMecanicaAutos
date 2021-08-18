// Predefined Packages
import React, { useState, useEffect } from 'react';

// Custom packges
import CardBrand from './CardBrand';
import { getLists } from '../apiCore';

const BrandsSection = () => {

  const [brands, setBrands] = useState([]);
  
  const loadBrands = async () => {
    setBrands(await getLists('brand'));
  }

  useEffect(() => {
    loadBrands();
  }, []);

  return (
    <section className="py-2">
      <div className="borde">
        <div className="container">

          <div className="row">
            <div className="col-12">
              <h2 className="d-block mb-5 main-title">Marcas Que Atendemos</h2>
            </div>
          </div>

          <div className="row vertical-center">

            {brands.map((brand, i) => (

              <CardBrand
                {...brand}
                key={i}
              />
              
            ))}
            
          </div>

        </div>
      </div>
    </section>
  );
}

export default BrandsSection;