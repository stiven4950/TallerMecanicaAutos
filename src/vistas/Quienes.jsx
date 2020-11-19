import React, { Component } from 'react';

import Header from '../componentes/Header'
import Footer from '../componentes/Footer.js';
import CarouselQuienes from '../componentes/CarouselQuienes'
import DescripcionQuienes from '../componentes/DescripcionQuienes'
import EquipoQuienes from '../componentes/EquipoQuienes'

const Quienes = () => {
    return (
      <div>
        <Header/>
        <CarouselQuienes/>
        <DescripcionQuienes/>
        <EquipoQuienes/>
        <Footer/>
      </div>
    );
}

export default Quienes;