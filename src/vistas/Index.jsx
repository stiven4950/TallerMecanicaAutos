import React, { useState } from 'react';
import Modal from 'react-modal';

import Header from '../componentes/Header'
import Carrousel from '../componentes/Carrousel'
import PorqueRepcar from '../componentes/PorqueRepcar';
import Beneficios from '../componentes/Beneficios';
import Footer from '../componentes/Footer';
import ModalLoging from '../componentes/ModalLogin'

const Index = () => {

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

    return (
        <>
            <Header openModal={openModal}/>
            <Carrousel/>
            <PorqueRepcar/>
            <Beneficios />
            <Footer />

            <Modal isOpen ={isOpenModal} onRequestClose={() => closeModal()} className="size-modal modalopen" >
              <ModalLoging closeModal={closeModal} />
            </Modal>
        </>
    );
  }
export default Index;