// Predefined packages
import React, { Component } from 'react';

// Custom packages
import BrandsSection from '../../core/components/BrandsSection';
import CarrouselServicio from '../components/CarrouselServicio';
import Divider from '../../core/components/Divider';
import Domicilio from '../components/Domicilio';
import Footer from '../../core/components/Footer.js';
import Header from '../../core/components/Header';
import MicroService from '../components/MicroService';

import { getService, getLists } from '../apiCore';
import '../../core/static/css/global_theme.css';
import '../../core/static/css/estilos.css';

class Servicios extends Component {

    constructor(props) {
        super(props);
        this.state = {
            service: [],
            microservice: [],
        };

        this.loadService = this.loadService.bind(this);
        this.loadMicroService = this.loadMicroService.bind(this);
    }

    loadMicroService = async (idService) => {
        this.setState({
            microservice: await getLists('microservice', idService),
        });
    }

    loadService = async () => {
        const { match } = this.props;

        this.setState({
            service: (await getService(match.params.slug))[0],
        });

        this.loadMicroService(this.state.service._id);
    }

    componentDidMount() {
        this.loadService();
    }

    render() {
        return (
            <>
                <Header />
                <CarrouselServicio service={this.state.service} />
                
                <Domicilio/>
                
                <Divider attr={'main-color'}/>
                <Divider attr={'secondary-color'}/>
                <Divider attr={'main-color'}/>

                <MicroService microservices={this.state.microservice} />
                
                <BrandsSection/>

                <Footer />
            </>
        );
    }
}

export default Servicios;