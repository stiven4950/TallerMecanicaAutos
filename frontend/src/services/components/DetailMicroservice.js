import React, { useEffect, useState } from 'react';
import { getById } from '../apiCore';

const DetailMicroservice = ({ microservice, setTotal }) => {

    const [micro, setMicro] = useState([]);

    const getMicroservice = async ()=>{
        const value = await getById(microservice);
        setMicro(value);
        setTotal(c=>c+value.cost);
    }

    useEffect(() => {
        getMicroservice();
    }, [microservice]);

    return (
        <div className="col-12 mx-4">
            <div className="row">
            
                <div className="col-7">
                    <i className="d-bloc"> - {micro.title}</i>
                </div>
                <div className="col-5">{micro.cost} USD</div>
            </div>
        </div>
    );
}
export default DetailMicroservice;