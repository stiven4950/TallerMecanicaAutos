import React, { useState } from 'react';

const BringCar = React.memo(({ icon, name,  setBringCar }) => {
    console.log('Me abrí');

    const [selected, setSelected] = useState(false);

    return (
        <div className="row">
            <div className="col-md-5 col-lg-5 mx-auto card-bring-car color-1" onClick={()=>{setBringCar(name); setSelected(!selected)}}>

                {selected ? <div className="select-appointment">
                    <i className="fas fa-check-circle text-center mt-4 d-block"></i>
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
});


export default BringCar;