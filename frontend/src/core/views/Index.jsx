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

    const loadServices = async ()=>{
        setServices(await getLists('service'));
    }

    const loadCarrousel = async ()=>{
        setCarrousel(await getLists('carrousel'));
    }

    useEffect(()=>{
        loadServices();
        loadCarrousel();
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