import React, {useState} from 'react';

import ShowImage from './ShowImage';

import './../static/css/bit_card.css';

const BitCard = ({ microservice }) => {

    const [selected, setSelected] = useState(false);
    
    return (
        <div className='d-block m-2 bit-card' onClick={()=>setSelected(!selected)}>
            {selected?<div className="select">
                <i className="fas fa-check-circle"></i>
            </div>:<></>}
            <div className="fade-in">
                <ShowImage item={microservice} url='microservice' attr='card-img-top' option='photoMobile' />
            </div>

            <p className="text-center py-2">{microservice.title}</p>
        </div>
    );
}


export default BitCard;