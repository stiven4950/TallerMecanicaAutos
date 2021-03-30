// Predefined packages
import React from 'react';

// Custom packages
import CarouselQuienes from '../../services/components/CarouselQuienes';
import DescripcionQuienes from '../../services/components/DescripcionQuienes';
import EquipoQuienes from '../../services/components/EquipoQuienes';
import Footer from '../../core/components/Footer';
import Header from '../../core/components/Header';

const Quienes = () => {
  return (
    <>
      <Header />
      <CarouselQuienes />
      <DescripcionQuienes />
      <EquipoQuienes />
      <Footer />
    </>
  );
}

export default Quienes;