import React from 'react';

import Header from '../../core/components/Header'
import Footer from '../../core/components/Footer';
import CarouselQuienes from '../../services/components/CarouselQuienes'
import DescripcionQuienes from '../../services/components/DescripcionQuienes'
import EquipoQuienes from '../../services/components/EquipoQuienes'

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