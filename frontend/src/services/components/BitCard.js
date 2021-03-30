// Predefined packages
import React, {useState} from 'react';

// Custom packages
import ShowImage from './ShowImage';
import './../static/css/bit_card.css';


const BitCard = ({ microservice, setMicroService }) => {

    const [selected, setSelected] = useState(false);
    
    return (
        <div className='d-block m-2 bit-card'>

            <input
                type="checkbox"
                style={{'height':'1.5em','width':'1.5em', 'position':'absolute', 'top':'1.8em', 'left':'2.3em'}}
                checked={selected}
                name="service"
                value={microservice._id}
                onChange={(e)=>{setSelected(!selected); setMicroService();}}
            />

                <ShowImage
                    id={microservice._id}
                    name={microservice.title}
                    url='microservice'
                    attr='card-img-top'
                    option='icon'
                />
            
            <p className="text-center" style={{'lineHeight': '14px'}}>{microservice.title}</p>
        </div>
    );
}


export default BitCard;