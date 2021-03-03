// Predefined Packages
import React, {useState, useEffect} from 'react';

// Custom packges
import {getServices, getBrands} from '../apiCore';

import Header from '../components/Header';
import Carrousel from '../components/Carrousel';
import PorqueRepcar from '../components/PorqueRepcar';
import Footer from '../components/Footer';
import BrandsSection from '../components/BrandsSection';
import Beneficios from '../components/Beneficios';

const Index = () => {
    
    const [services, setServices] = useState([]);
    const [brands, setBrands] = useState([]);

    const [error, setError] = useState(false);

    const loadServices = ()=>{
        getServices().then(data=>{
            if (data.error) {
                setError(data.error);
            }else{
                setServices(data);
                console.log(data);
            }
        });
    }

    const loadBrands = ()=>{
        getBrands().then(data=>{
            if (data.error) {
                setError(data.error);
            }else{
                setBrands(data);
                console.log(data);
            }
        });
    }

    useEffect(()=>{
        loadServices();
        loadBrands();
    }, []);

    return (
        <>
            <Header/>
            <Carrousel/>
            <PorqueRepcar services={services}/>
            <BrandsSection brands={brands}/>
            <Footer />
        </>
    );
  }
export default Index;