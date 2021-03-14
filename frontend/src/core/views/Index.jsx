// Predefined Packages
import React, {useState, useEffect} from 'react';

// Custom packges
import {getLists} from '../apiCore';

import Header from '../components/Header';
import Carrousel from '../components/Carrousel';
import PorqueRepcar from '../components/PorqueRepcar';
import Footer from '../components/Footer';
import BrandsSection from '../components/BrandsSection';

import '../static/css/estilos.css';

const Index = () => {
    
    const [services, setServices] = useState([]);
    const [carrousel, setCarrousel] = useState([]);

    const [, setError] = useState(false);

    const loadServices = ()=>{
        getLists('service').then(data=>{
            if (data.error) {
                setError(data.error);
            }else{
                setServices(data);
                console.log(data);
            }
        });
    }

    const loadCarrousel = ()=>{
        getLists('carrousel').then(data=>{
            if (data.error) {
                setError(data.error);
            }else{
                setCarrousel(data);
                console.log(data);
            }
        });
    }

    useEffect(()=>{
        loadServices();
        loadCarrousel();
    }, []);

    return (
        <>
            <Header/>
            <Carrousel carrousel={carrousel}/>
            <PorqueRepcar services={services}/>
            <BrandsSection/>
            <Footer />
        </>
    );
  }
export default Index;