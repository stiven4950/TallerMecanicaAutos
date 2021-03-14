import React, { Component } from 'react';

import Header from '../../core/components/Header';
import Footer from '../../core/components/Footer.js';
import CarrouselServicio from '../components/CarrouselServicio';
import MicroService from '../components/MicroService';

import { getService, getLists } from '../apiCore';

import '../../core/static/css/global_theme.css';
import '../../core/static/css/estilos.css';
import Divider from '../../core/components/Divider';
import BrandsSection from '../../core/components/BrandsSection';
import Domicilio from '../components/Domicilio';

class Servicios extends Component {

    constructor(props) {
        super(props);
        this.state = {
            service: [],
            microservice: [],
            error: [],
        };

        this.loadService = this.loadService.bind(this);
        this.loadMicroService = this.loadMicroService.bind(this);
    }

    loadMicroService = async (idService) => {

        await getLists('microservice', idService).then(data => {

            if (data.error) {
                this.setState({
                    error: data.error,
                });
            } else {
                this.setState({
                    microservice: data,
                });
            }
        });
    }

    loadService = async () => {
        const { match } = this.props;

        await getService(match.params.slug).then(data => {

            if (data.error) {
                this.setState({
                    error: data.error,
                });
            } else {
                this.setState({
                    service: data[0],
                });
            }
        });

        await this.loadMicroService(this.state.service._id);
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