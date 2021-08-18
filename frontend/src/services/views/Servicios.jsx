// Predefined packages
import React, { useState, useEffect } from 'react';

// Custom packages
import BrandsSection from '../../core/components/BrandsSection';
import CarrouselServicio from '../components/CarrouselServicio';
import Divider from '../../core/components/Divider';
import Domicilio from '../components/Domicilio';
import Footer from '../../core/components/Footer.js';
import Header from '../../core/components/Header';
import MicroService from '../components/MicroService';
// helpers
import { getService, getLists } from '../apiCore';
// styles
import '../../core/static/css/global_theme.css';
import '../../core/static/css/estilos.css';

const Servicios = (props) => {
    const { match } = props;
    const slug = match.params.slug;

    const [service, setService] = useState([]);
    const [microservices, setMicroservices] = useState([]);



    const loadMicroService = async (id) => {
        setMicroservices(await getLists('microservice', id));
    }


    useEffect(() => {
        const loadService = async () => {
            const service = (await getService(slug))[0];
            setService(service);
            loadMicroService(service._id);
        }
        loadService();
    }, [slug]);

    return (
        <>
            <Header />
            <CarrouselServicio service={service} />

            <Domicilio />

            <Divider attr={'main-color'} />
            <Divider attr={'secondary-color'} />
            <Divider attr={'main-color'} />

            <MicroService microservices={microservices} />

            <BrandsSection />

            <Footer />
        </>
    );
}

export default Servicios;