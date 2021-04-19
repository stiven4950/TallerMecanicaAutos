// Predefined packages
import React, { Component } from 'react';

// Custom packages
import Accordion from '../components/Accordion';
import Appointment from '../components/Appointment';
import ContactData from '../components/ContactData';
import Divider from '../../core/components/Divider';
import Footer from '../../core/components/Footer.js';
import Header from '../../core/components/Header';
import IconMicroService from '../components/IconMicroService';
import Stepper from '../components/Stepper';

import { getLists } from '../../core/apiCore';
import { createReservation, getLists as getCarsModel } from '../apiCore';
import '../../core/static/css/global_theme.css';
import '../../core/static/css/estilos.css';
import '../../core/static/css/accordion.css';

class Cotizar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            brands: [],
            selectedBrand: [],

            carModel: [],
            selectedCarModel: 0,

            years: [],
            selectedYear: '',
            position: 0,

            step_1: false,
            step_2: false,
            step_3: false,
            step_4: false,

            service: [],
            microservice: [],
            selectedMicroService: [],
            
            /* DATE */
            date: `${new Date().getFullYear()}-${(new Date().getMonth() + 1) < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1}-${(new Date().getDate() + 1) < 10 ? '0' + (new Date().getDate()) : new Date().getDate()}`,
            time: '',

            /* BRINGCAR */
            bringcar: '',
            
            /* CONTACT */
            user_name: '',
            user_lastname: '',
            user_phone: '',
            user_email: '',
            user_comment: '',

        };

        this.loadBrands = this.loadBrands.bind(this);
        this.setBrandSelected = this.setBrandSelected.bind(this);

        this.loadCarModels = this.loadCarModels.bind(this);
        this.setCarModelSelected = this.setCarModelSelected.bind(this);


        this.setYearSelected = this.setYearSelected.bind(this);
        
        this.setPositionButton = this.setPositionButton.bind(this);

        this.loadService = this.loadService.bind(this);

        this.setFieldsUser = this.setFieldsUser.bind(this);
        this.setDate = this.setDate.bind(this);
        this.setTime = this.setTime.bind(this);
        this.setBringCar = this.setBringCar.bind(this);
        this.formReservationSubmit = this.formReservationSubmit.bind(this);
        this.setMicroService = this.setMicroService.bind(this);
    }

    setPositionButton = (direction) => {

        if (direction === 0) this.setState((state) => ({
            position: state.position - 1
        }));
        else {
            switch (this.state.position) {
                case 0:
                    if(this.state.selectedBrand.name !== undefined && this.state.selectedCarModel.name !== undefined && this.state.selectedYear!=='')
                        this.setState((state) => ({
                            position: state.position + 1
                        }));
                    else alert('Rellena todos los campos');

                    break;
                
                case 1:
                    if(this.state.selectedMicroService.length > 0)
                        this.setState((state) => ({
                            position: state.position + 1
                        }));
                    else alert('Escoge al menos un servicio');
                    
                    break;
                

                case 2:
                    if(this.state.bringcar !== '' && this.state.time !== '')
                        this.setState((state) => ({
                            position: state.position + 1
                        }));
                    else alert('Rellena todos los campos');
                    
                    break;
            
                default:
                    break;
            }

            
        }
        switch (this.state.position) {
            case 0:
                this.setState({
                    step_1: true,
                });
                break;

            case 1:
                this.setState({
                    step_2: true,
                });
                break;

            case 2:
                this.setState({
                    step_3: true,
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

    loadService = async () => {

        this.setState({
            service: await getLists('service'),
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
        this.setState({
            brands: await getLists('brand'),
        });
    }

    loadCarModels = async (idBrand) => {
        this.setState({
            carModel: await getCarsModel('carmodel', idBrand),
        });
    }

    componentDidMount() {
        this.loadBrands();
        this.loadService();
    }

    componentWillUnmount() {
    }

    setFieldsUser({target}) {
        this.setState({
            [target.name]: target.value,
        });
    }

    setMicroService() {
        let data = []
        let elements = document.getElementsByName('service');
        elements.forEach(element => {
            if (element.checked) data.push(element.value);
        });

        this.setState({
            selectedMicroService: data
        });
    }

    setDate(value) {
        this.setState({
            date: value
        });
    }

    setTime(value) {
        this.setState({
            time: value
        });
    }

    setBringCar(value) {
        this.setState({
            bringcar: value
        });
    }

    formReservationSubmit = async (event) => {
        event.preventDefault();


        await createReservation(
            this.state.selectedBrand.name,
            this.state.selectedCarModel.name,
            this.state.selectedYear,
            this.state.selectedMicroService,
            this.state.date,
            this.state.time,
            this.state.bringcar,
            this.state.user_name,
            this.state.user_lastname,
            this.state.user_phone,
            this.state.user_email,
            this.state.user_comment,
        ).then(data => {
            alert("Los datos fueron registrados con éxito");
            window.location.href = "/";
        });
    }

    render() {
        return (
            <>
                <Header />
                <Stepper
                    position={this.state.position}
                    step_1={this.state.step_1}
                    step_2={this.state.step_2}
                    step_3={this.state.step_3}
                    step_4={this.state.step_4}
                />

                <div className="row">
                    <div className="col-8 mx-auto">
                        <div className="register">

                            <form onSubmit={this.formReservationSubmit}>

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
                                            <IconMicroService
                                                service={item}
                                                setMicroService={this.setMicroService}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className={this.state.position === 2 ? 'd-block' : 'd-none'}>
                                    <Appointment
                                        date={this.state.date}
                                        setDate={this.setDate}
                                        time={this.state.time}
                                        setTime={this.setTime}
                                        setBringCar={this.setBringCar}
                                    />
                                </div>

                                <div className={this.state.position === 3 ? 'd-block' : 'd-none'}>
                                    <ContactData
                                        setFieldsUser={this.setFieldsUser}
                                        user_name={this.state.user_name}
                                        user_lastname={this.state.user_lastname}
                                        user_phone={this.state.user_phone}
                                        user_email={this.state.user_email}
                                        user_comment={this.state.user_comment}
                                    />
                                </div>

                                <Divider attr="main-color my-3" />

                                {this.state.position === 3 ?
                                    <button
                                        type="submit"
                                        className="btn bg-success rounded-pill waves-effect btn-step my-2 text-white">
                                        Enviar
                                </button> : <></>}

                                {this.state.position !== 3 ?
                                    <button
                                        type="button"
                                        className="btn bg-warning rounded-pill waves-effect btn-step my-2"
                                        onClick={() => this.setPositionButton(1)}>Siguiente</button> : <></>}
                                {this.state.position !== 0 ?
                                    <button
                                        type="button"
                                        className="btn bg-warning rounded-pill waves-effect btn-step my-2"
                                        onClick={() => this.setPositionButton(0)}>Atrás</button> : <></>}
                                <br className="mb-2" />

                            </form>

                        </div>
                    </div>
                </div>

                <Footer />
            </>
        );
    }
}

export default Cotizar;