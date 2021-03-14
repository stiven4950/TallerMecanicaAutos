import React from 'react';

import ShowImage from './ShowImage';

const Accordion = ({
    brands,
    setBrand,
    selectedBrand,
    carModels,
    setCarModel,
    selectedCarModel,
    years,
    selectedYear,
    setYearSelected
}) => {



    const setAccordion = (id) => {
        let acc = document.getElementsByClassName("accordion");
        acc[id].classList.toggle("activeA");
        let panel = acc[id].nextElementSibling;
        panel.style.maxHeight = '0px';
    }

    const accordion = () => {
        let acc = document.getElementsByClassName("accordion");
        let i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("activeA");
                let panel = this.nextElementSibling;

                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    }

    accordion();

    const setBrandSelected = (brand) => {
        setBrand(brand);
        setAccordion(0);
    }

    const setCarModelSelected = (carModel) => {
        setCarModel(carModel);
        setAccordion(1);
    }

    const setYear = (year) => {
        setYearSelected(year);
        setAccordion(2);
    }

    return (
        <div className="row">
            <div className="col-8 mx-auto">
                <div className="register">

                    <button className="accordion">
                        <div className="row">
                            <div className="col-2">
                                Marca
                            </div>
                            <div className="col-8">
                                <span className="d-block text-center item-selected">{selectedBrand.name}</span>
                            </div>
                            <div className="col-2 signo">

                            </div>

                        </div>
                    </button>

                    <div className="panel">

                        {brands.map((brand, i) => (
                            <div className="row p-2 brand" key={brand._id} onClick={() => setBrandSelected(brand)}>
                                <div className="col-2">
                                    <ShowImage item={brand} url='brand' option='photo' attr='w-75' />
                                </div>
                                <div className="col-10">
                                    <p className="text-center">{brand.name}</p>
                                </div>
                            </div>
                        ))}

                    </div>


                    <button className="accordion">
                        <div className="row">
                            <div className="col-2">
                                Modelo
                            </div>
                            <div className="col-8">
                                <span className="d-block text-center item-selected">{selectedCarModel.name}</span>
                            </div>
                            <div className="col-2 signo">

                            </div>

                        </div>
                    </button>

                    <div className="panel">

                        <div className="row">
                            {carModels.map((model, i) => (
                                <div className="col-6 p-2" key={model._id} onClick={() => setCarModelSelected(model)}>
                                    <p className="text-center">{model.name}</p>
                                </div>
                            ))}
                        </div>

                    </div>

                    <button className="accordion">
                        <div className="row">
                            <div className="col-2">
                                Año
                            </div>
                            <div className="col-8">
                                <span className="d-block text-center item-selected">{selectedYear}</span>
                            </div>
                            <div className="col-2 signo">

                            </div>

                        </div>
                    </button>

                    <div className="panel">

                        <div className="row">
                            {years.map((year, i) => (
                                <div className="col-6 p-2" key={year} onClick={() => setYear(year)}>
                                    <p className="text-center">{year}</p>
                                </div>
                            ))}
                        </div>

                    </div>

                    <button className="accordion">Cilindraje</button>
                    <div className="panel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accordion;