import React, { useState } from 'react';
import Modal from 'react-modal';

import Header from '../../core/components/Header';
import Footer from '../../core/components/Footer';
import ModalLoging from '../../core/components/ModalLogin';

const Lavado = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);
  
    const openModal = () => setIsOpenModal(true);
    const closeModal = () => setIsOpenModal(false);
  
    return (
        <>
            <Header openModal={openModal}/>
                <div> 
                    <h1>Esta es la pagina de Lavado</h1>
                </div>
            <Footer />

            <Modal isOpen ={isOpenModal} onRequestClose={() => closeModal()} className="config-modal" ariaHideApp={false}>
                <ModalLoging closeModal={closeModal} />
            </Modal>
        </>
    );
}

export default Lavado;