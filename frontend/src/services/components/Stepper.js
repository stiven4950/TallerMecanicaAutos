// Predefinaed packages
import React from 'react';

// Custom packages
import '../static/css/stepper.css';

const Stepper = ({position, setPosition, step_1, step_2, step_3, step_4}) => {

    return (
        <div id="menuBackground">
            <ul id="menu">
                <li
                    className={`${position===0?'active':step_1 & position!==0?'done':''}`}
                    onClick={()=>setPosition(0)}>

                    <div className="numberStep">
                        <i className="fas fa-car"></i>
                    </div>
                    <div className="texto_step">
                        Elige tu vehículo
                    </div>
                </li>

                <li
                    className={`${position===1?'active':step_2 & position!==1?'done':''}`}
                    onClick={()=>setPosition(1)}>

                    <div className="numberStep">
                        <i className="fas fa-concierge-bell"></i>
                    </div>
                    <div className="texto_step">
                        Elige tus servicios
                    </div>
                </li>

                <li
                    className={`${position===2?'active':step_3 & position!==2?'done':''}`}
                    onClick={()=>setPosition(2)}>

                    <div className="numberStep">
                        <i className="fas fa-calendar-check"></i>
                    </div>
                    <div className="texto_step">
                        Agenda tu cita
                    </div>
                </li>

                <li
                    className={`${position===3?'active':step_4 & position!==3?'done':''}`}
                    onClick={()=>setPosition(3)}>
                        
                    <div className="numberStep">
                        <i className="fas fa-id-card-alt"></i>
                    </div>
                    <div className="texto_step">
                        Datos de contacto
                    </div>
                </li>

            </ul>
        </div>
    );
}

export default Stepper;