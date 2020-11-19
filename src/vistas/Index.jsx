import React, { Component } from 'react';

import Header from '../componentes/Header'
import Carrousel from '../componentes/Carrousel'
import Porque_Repcar from '../componentes/Porque_Repcar';
import Beneficios from '../componentes/Beneficios';
import Footer from '../componentes/Footer.js';

const Index = () => {
    return (
        <div>
            <Header/>
            <Carrousel/>
            <Porque_Repcar/>
            <Beneficios />
            <Footer />
        </div>
    );
  }


export default Index;