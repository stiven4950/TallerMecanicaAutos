// Predefined packages
import React, { useEffect, useState } from 'react';

// Custom packages
import Accordion from '../components/Accordion';
import Appointment from '../components/Appointment';
import ContactData from '../components/ContactData';
import Divider from '../../core/components/Divider';
import Footer from '../../core/components/Footer.js';
import Header from '../../core/components/Header';
import IconMicroService from '../components/IconMicroService';
import Stepper from '../components/Stepper';

// helpers
import { getLists } from '../../core/apiCore';
import { createReservation, getLists as getCarsModel } from '../apiCore';
// styles
import '../../core/static/css/global_theme.css';
import '../../core/static/css/estilos.css';
import '../../core/static/css/accordion.css';
// custom hooks
import { useForm } from '../../hook/useForm';
import FinalReport from '../components/FinalReport';

const Cotizar = () => {

    const [brands, setBrands] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState([]);
    const [carModel, setCarModel] = useState([]);
    const [selectedCarModel, setSelectedCarModel] = useState({});
    const [years, setYears] = useState([]);
    const [selectedYear, setSelectedYear] = useState('');
    const [position, setPosition] = useState(0);

    const [step_1, setStep_1] = useState(false);
    const [step_2, setStep_2] = useState(false);
    const [step_3, setStep_3] = useState(false);
    const [step_4, setStep_4] = useState(false);

    const [service, setService] = useState([]);
    //const [microservice, setMicroservice] = useState([]);
    const [selectedMicroservice, setSelectedMicroservice] = useState([]);

    /* DATE */
    const [date, setDate] = useState(`${new Date().getFullYear()}-${(new Date().getMonth() + 1) < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1}-${(new Date().getDate() + 1) < 10 ? '0' + (new Date().getDate()) : new Date().getDate()}`);
    const [time, setTime] = useState('');

    /* BRINGCAR */
    const [bringcar, setBringcar] = useState('');

    /* CONTACT */
    const [values, handleInputChange] = useForm({
        user_name: '',
        user_lastname: '',
        user_phone: '',
        user_email: '',
        user_comment: '',
    });

    const { user_name,
        user_lastname,
        user_phone,
        user_email,
        user_comment
    } = values;

    const setPositionButton = (direction) => {

        if (direction === 0) setPosition(p => p - 1);
        else {
            switch (position) {
                case 0:
                    if (selectedBrand.name !== undefined && selectedCarModel.name !== undefined && selectedYear !== '')
                        setPosition(p => p + 1);
                    else alert('Rellena todos los campos');

                    break;

                case 1:
                    if (selectedMicroservice.length > 0)
                        setPosition(p => p + 1);
                    else alert('Escoge al menos un servicio');

                    break;


                case 2:
                    if (bringcar !== '' && time !== '')
                        setPosition(p => p + 1);
                    else alert('Rellena todos los campos');

                    break;

                default:
                    break;
            }


        }
        switch (position) {
            case 0:
                setStep_1(true);
                break;

            case 1:
                setStep_2(true);
                break;

            case 2:
                setStep_3(true);
                break;

            case 3:
                setStep_4(true);
                break;

            default:
                break;

        }
    }

    const loadService = async () => {
        setService(await getLists('service'));
    }

    const setBrandSelected = (brand) => {
        setSelectedBrand(brand);
        loadCarModels(brand._id);
    }

    const setCarModelSelected = (model) => {
        setSelectedCarModel(model);
        let data = []
        for (let i = model.min; i <= model.max; i++) {
            data.push(i);
        }

        setYears(data);
    }

    const setYearSelected = (year) => {
        setSelectedYear(year);
    }

    const loadBrands = async () => {
        setBrands(await getLists('brand'));
    }

    const loadCarModels = async (idBrand) => {
        setCarModel(await getCarsModel('carmodel', idBrand));
    }

    useEffect(() => {
        loadBrands();
        loadService();
    }, []);

    const setMicroService = () => {
        let data = []
        let elements = document.getElementsByName('service');
        elements.forEach(element => {
            if (element.checked) data.push(element.value);
        });

        setSelectedMicroservice(data);
    }

    const formReservationSubmit = async (event) => {
        event.preventDefault();


        await createReservation(
            selectedBrand.name,
            selectedCarModel.name,
            selectedYear,
            selectedMicroservice,
            date,
            time,
            bringcar,
            user_name,
            user_lastname,
            user_phone,
            user_email,
            user_comment,
        ).then(data => {
            alert("Los datos fueron registrados con éxito");
            window.location.href = "/";
        });
    }
    return (
        <>
            <Header />
            <Stepper
                position={position}
                step_1={step_1}
                step_2={step_2}
                step_3={step_3}
                step_4={step_4}
            />

            <div className="row">
                <div className="col-8 mx-auto">
                    <div className="register">

                        <form onSubmit={formReservationSubmit}>

                            <div className={position === 0 ? 'd-block' : 'd-none'}>
                                <Accordion
                                    brands={brands}
                                    setBrand={setBrandSelected}
                                    selectedBrand={selectedBrand}
                                    carModels={carModel}
                                    setCarModel={setCarModelSelected}
                                    selectedCarModel={selectedCarModel}
                                    years={years}
                                    selectedYear={selectedYear}
                                    setYearSelected={setYearSelected}
                                />
                            </div>

                            <div className={position === 1 ? 'd-block' : 'd-none'}>
                                {service.map((item, i) => (
                                    <div key={item._id}>
                                        <h5 className="mt-2">{item.name}</h5>
                                        <IconMicroService
                                            service={item}
                                            setMicroService={setMicroService}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className={position === 2 ? 'd-block' : 'd-none'}>
                                <Appointment
                                    date={date}
                                    setDate={setDate}
                                    time={time}
                                    setTime={setTime}
                                    setBringCar={setBringcar}
                                />
                            </div>

                            <div className={position === 3 ? 'd-block' : 'd-none'}>
                                <ContactData
                                    handleInputChange={handleInputChange}
                                    user_name={user_name}
                                    user_lastname={user_lastname}
                                    user_phone={user_phone}
                                    user_email={user_email}
                                    user_comment={user_comment}
                                />
                                <FinalReport
                                    car={`${selectedBrand.name} ${selectedCarModel.name} ${selectedYear}`}
                                    time={time}
                                    date={date}
                                    microservices={selectedMicroservice}
                                />
                            </div>

                            <Divider attr="main-color my-3" />

                            {position === 3 ?
                                <button
                                    type="submit"
                                    className="btn bg-success rounded-pill waves-effect btn-step my-2 text-white">
                                    Enviar
                                </button> : <></>}

                            {position !== 3 ?
                                <button
                                    type="button"
                                    className="btn bg-warning rounded-pill waves-effect btn-step my-2"
                                    onClick={() => setPositionButton(1)}>Siguiente</button> : <></>}
                            {position !== 0 ?
                                <button
                                    type="button"
                                    className="btn bg-warning rounded-pill waves-effect btn-step my-2"
                                    onClick={() => setPositionButton(0)}>Atrás</button> : <></>}
                            <br className="mb-2" />

                        </form>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Cotizar;