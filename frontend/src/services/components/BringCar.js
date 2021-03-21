import React, { useState } from 'react';

const BringCar = ({ icon, name }) => {

    const [selected, setSelected] = useState(false);

    return (
        <div className="row">
            <div className="col-md-5 col-lg-5 mx-auto card-bring-car color-1" onClick={()=>setSelected(!selected)}>

                {selected ? <div className="select-appointment">
                    <i className="fas fa-check-circle"></i>
                </div> : <></>}

                <div className="row">
                    <div className="col-3">
                        <i className={`fas icon-bring-car ${icon}`}></i>
                    </div>
                    <div className="col-9">
                        <h5 className="mt-1">{name}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default BringCar;


/*
    icon: fa-place-of-worship
    name: Yo llevo mi carro al taller

    icon: fa-map-marked-alt
    name: Lleven mi carro al taller

    icon: fa-home
    name: Quiero el servicio en mi casa
*/