import React, { useState, useEffect } from 'react';
import { getLists } from '../apiCore';

import CardBrand from './CardBrand';

const BrandsSection = () => {

  const [brands, setBrands] = useState([]);
  const [, setError] = useState(false);


  const loadBrands = () => {
    getLists('brand').then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setBrands(data);
      }
    });
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
              <h1 className="h2-cards mb-2">Marcas Que Atendemos</h1>
            </div>
          </div>

          <div className="row vertical-center">
            {brands.map((brand, i) => (
              <CardBrand brand={brand} key={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default BrandsSection;