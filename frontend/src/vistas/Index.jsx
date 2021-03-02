import React from 'react';

import Header from '../componentes/Header';
import Carrousel from '../componentes/Carrousel';
import PorqueRepcar from '../componentes/PorqueRepcar';
import Beneficios from '../componentes/Beneficios';
import Footer from '../componentes/Footer';

const Index = () => {

    return (
        <>
            <Header/>
            <Carrousel/>
            <PorqueRepcar/>
            <Beneficios />
            <Footer />
        </>
    );
  }
export default Index;