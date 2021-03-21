import React, { Component } from 'react';

import Header from '../../core/components/Header';
import Footer from '../../core/components/Footer.js';

import '../../core/static/css/global_theme.css';
import '../../core/static/css/estilos.css';
import '../../core/static/css/accordion.css';
import Accordion from '../components/Accordion';
import { getLists } from '../../core/apiCore';
import { getLists as getCarsModel } from '../apiCore';
import Stepper from '../components/Stepper';
import IconMicroService from '../components/IconMicroService';
import Appointment from '../components/Appointment';
import ContactData from '../components/ContactData';
import Divider from '../../core/components/Divider';

class Cotizar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: [],
            brands: [],
            selectedBrand: [],
            carModel: [],
            selectedCarModel: 0,
            years: [],
            selectedYear: [],
            position: 0,

            step_1: false,
            step_2: false,
            step_3: false,
            step_4: false,

            service: [],
            microservice: [],
        };

        this.loadBrands = this.loadBrands.bind(this);
        this.setBrandSelected = this.setBrandSelected.bind(this);

        this.loadCarModels = this.loadCarModels.bind(this);
        this.setCarModelSelected = this.setCarModelSelected.bind(this);


        this.setYearSelected = this.setYearSelected.bind(this);

        this.setPosition = this.setPosition.bind(this);
        this.setPositionButton = this.setPositionButton.bind(this);

        this.loadService = this.loadService.bind(this);
    }

    setPosition = (position) => {
        this.setState({
            position: position,
        });

        switch (position) {
            case 0:
                this.setState({
                    step_1: true,
                });
                break;

            case 1:
                this.setState({
                    step_1: true,
                });
                break;

            case 2:
                this.setState({
                    step_2: true,
                });
                break;

            case 3:
                this.setState({
                    step_3: true,
                });
                break;

            default:
                break;

        }

    }

    setPositionButton = (direction) => {

        if (direction === 0) this.setState((state)=>({
            position: (state.position - 1)
        }));
        else this.setState((state)=>({
            position: (state.position + 1)
        }));

        switch (this.state.position) {
            case 0:
                this.setState({
                    step_1: true,
                });
                break;

            case 1:
                this.setState({
                    step_1: true,
                });
                break;

            case 2:
                this.setState({
                    step_2: true,
                });
                break;

            case 3:
                this.setState({
                    step_3: true,
                });
                break;

            default:
                break;

        }
    }

    loadService = () => {

        getLists('service').then(data => {

            if (data.error) {
                this.setState({
                    error: data.error,
                });
            } else {
                this.setState({
                    service: data,
                });
            }
        });
    }

    setBrandSelected = (brand) => {
        this.setState({
            selectedBrand: brand,
        });

        this.loadCarModels(brand._id);
    }

    setCarModelSelected = (model) => {
        this.setState({
            selectedCarModel: model,
        });

        let data = []
        for (let i = model.min; i <= model.max; i++) {
            data.push(i);
        }

        this.setState({
            years: data,
        });
    }

    setYearSelected = (year) => {
        this.setState({
            selectedYear: year,
        });
    }

    loadBrands = async () => {
        await getLists('brand').then(data => {
            if (data.error) {
                this.setState({
                    error: data.error,
                });
            } else {
                this.setState({
                    brands: data,
                });
            }
        });
    }

    loadCarModels = async (idBrand) => {
        await getCarsModel('carmodel', idBrand).then(data => {
            if (data.error) {
                this.setState({
                    error: data.error,
                });
            } else {
                this.setState({
                    carModel: data,
                });
            }
        });
    }

    componentDidMount() {
        this.loadBrands();
        this.loadService();
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <>
                <Header />
                <Stepper
                    position={this.state.position}
                    setPosition={this.setPosition}
                    step_1={this.state.step_1}
                    step_2={this.state.step_2}
                    step_3={this.state.step_3}
                    step_4={this.state.step_4}
                />

                <div className="row">
                    <div className="col-8 mx-auto">
                        <div className="register">

                            <div className={this.state.position === 0 ? 'd-block' : 'd-none'}>
                                <Accordion
                                    brands={this.state.brands}
                                    setBrand={this.setBrandSelected}
                                    selectedBrand={this.state.selectedBrand}
                                    carModels={this.state.carModel}
                                    setCarModel={this.setCarModelSelected}
                                    selectedCarModel={this.state.selectedCarModel}
                                    years={this.state.years}
                                    selectedYear={this.state.selectedYear}
                                    setYearSelected={this.setYearSelected}
                                />
                            </div>

                            <div className={this.state.position === 1 ? 'd-block' : 'd-none'}>
                                {this.state.service.map((item, i) => (
                                    <div key={item._id}>
                                        <h5 className="mt-2">{item.name}</h5>
                                        <IconMicroService service={item} />
                                    </div>
                                ))}
                            </div>

                            <div className={this.state.position === 2 ? 'd-block' : 'd-none'}>
                                <Appointment />
                            </div>

                            <div className={this.state.position === 3 ? 'd-block' : 'd-none'}>
                                <ContactData />
                            </div>

                            <Divider attr="main-color my-3" />

                            <button className="btn rounded-pill waves-effect btn-step my-2" onClick={() => this.setPositionButton(1)}>Siguiente</button>
                            {this.state.position !== 0 ? <button className="btn rounded-pill waves-effect btn-step my-2" onClick={() => this.setPositionButton(0)}>Atrás</button> : <></>}
                            <br className="mb-2" />
                            
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        );
    }
}

export default Cotizar;