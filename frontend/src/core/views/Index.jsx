// Predefined Packages
import React, {useState, useEffect} from 'react';

// Custom packges
import Header from '../components/Header';
import Carrousel from '../components/Carrousel';
import Services from '../components/Services';
import Footer from '../components/Footer';
import BrandsSection from '../components/BrandsSection';
import {getLists} from '../apiCore';
import '../static/css/estilos.css';

const Index = () => {
    
    const [services, setServices] = useState([]);
    const [carrousel, setCarrousel] = useState([]);

    const loadServices = async (arg)=>{
        setServices(await getLists(arg));
    }

    const loadCarrousel = async (arg)=>{
        setCarrousel(await getLists(arg));
    }

    useEffect(()=>{
        loadServices('service');
        loadCarrousel('carrousel');
    }, []);

    return (
        <>
            <Header/>
            <Carrousel carrousel={carrousel}/>
            <Services services={services}/>
            <BrandsSection/>
            <Footer />
        </>
    );
  }
export default Index;