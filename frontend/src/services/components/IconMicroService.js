import React, { useEffect, useState } from 'react';

import BitCard from './BitCard';
import { getLists } from '../apiCore';

const IconMicroService = React.memo(({ service, setMicroService }) => {

    const [microservices, setMicroservice] = useState([]);

    const loadMicroService = async (id) => {

        setMicroservice( await getLists('microservice', id));
    }
    
    useEffect(() => {
        loadMicroService(service._id);
    },[ service._id ]);

    return (
        <div className="row">
            {microservices.map((microservice, i) => (
                <BitCard key={microservice._id}
                    microservice={microservice}
                    setMicroService={setMicroService}
                />
            ))}
        </div>
    );
})

export default IconMicroService;