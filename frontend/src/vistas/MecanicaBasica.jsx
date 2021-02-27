import React from 'react';

import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import ModalLogingin from '../componentes/ModalLogin';

const MecanicaBasica = () => {
    return (
        <>
            <Header/>
                <div> 
                    <h1>Esta es la pagina de Mecanica basica</h1>
                </div>
            <Footer />
            
            <ModalLogingin />
        </>
    );
}

export default MecanicaBasica;