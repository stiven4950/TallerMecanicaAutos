import React, { useEffect, useState } from 'react';

import BitCard from './BitCard';
import { getLists } from '../apiCore';

const IconMicroService = ({ service }) => {

    const [microservices, setMicroservice] = useState([]);
    const [, setError] = useState([]);

    const loadMicroService = () => {

        getLists('microservice', service._id).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setMicroservice(data);
            }
        });
    }
    
    useEffect(() => {
        loadMicroService();
    });

    return (
        <div className="row">
            {microservices.map((microservice, i) => (
                <BitCard key={microservice._id} microservice={microservice} />
            ))}
        </div>
    );
}

export default IconMicroService;