// Predefined packages
import React, { useState } from 'react';

// Custom packages
import ShowImage from './ShowImage';

const Accordion = React.memo(({
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

    const [selected_1, setSelected_1] = useState(true);
    const [selected_2, setSelected_2] = useState(false);
    const [selected_3, setSelected_3] = useState(false);

    const setPanel = (id) => {
        let panel = document.getElementsByClassName("panel");
        switch (id) {
            case 1:
                setSelected_1(!selected_1);
                if (selected_1) {
                    panel[0].style.maxHeight = panel[0].scrollHeight + "px";
                }
                break;
            case 2:
                setSelected_2(!selected_2);
                if (selected_2) {
                    panel[1].style.maxHeight = panel[1].scrollHeight + "px";
                }
                break;

            case 3:
                setSelected_3(!selected_3);
                if (selected_3) {
                    panel[2].style.maxHeight = panel[2].scrollHeight + "px";
                }
                break;

            default:
                break;
        }

    }

    const setBrandSelected = (brand) => {
        setBrand(brand);
        setPanel(1);
    }

    const setCarModelSelected = (carModel) => {
        setCarModel(carModel);
        setPanel(2);
    }

    const setYear = (year) => {
        setYearSelected(year);
        setPanel(3);
    }

    return (
        <>
            <button
                type="button"
                className={`accordion ${selected_1 ? 'activeA' : ''}`}
                onClick={() => setPanel(1)}>

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

            <div className={`panel ${selected_1 ? 'd-block h-100' : 'd-none'}`}>
                {brands.map((brand, i) => (
                    <div className="row p-2 brand" key={brand._id} onClick={() => setBrandSelected(brand)}>
                        <div className="col-2">
                            <ShowImage
                                id={brand._id}
                                name={brand.name}
                                url='brand'
                                option='photo'
                                attr='w-75'
                            />
                        </div>
                        <div className="col-10">
                            <p className="text-center">{brand.name}</p>
                        </div>
                    </div>
                ))}

            </div>


            <button
                type="button"
                className={`accordion ${selected_2 ? 'activeA' : ''}`}
                onClick={() => setPanel(2)}>

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

            <div className={`panel ${selected_2 ? 'd-block h-100' : 'd-none'}`}>

                <div className="row">
                    {carModels.map((model, i) => (
                        <div className="col-6 p-2" key={model._id} onClick={() => setCarModelSelected(model)}>
                            <p className="text-center">{model.name}</p>
                        </div>
                    ))}
                </div>

            </div>

            <button
                type="button"
                className={`accordion ${selected_3 ? 'activeA' : ''}`}
                onClick={() => setPanel(3)}>
                    
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

            <div className={`panel ${selected_3 ? 'd-block h-100' : 'd-none'}`}>

                <div className="row">
                    {years.map((year, i) => (
                        <div className="col-6 p-2" key={year} onClick={() => setYear(year)}>
                            <p className="text-center">{year}</p>
                        </div>
                    ))}
                </div>

            </div>

        </>
    );
});

export default Accordion;