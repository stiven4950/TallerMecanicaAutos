import React from 'react';
import CardMicroService from './CardMicroService';

const MicroService = ({ microservices }) => {
    return (
        <div className="mt-4 p-3">
            <div className="row row-cols-2 row-cols-md-4">
                {microservices.map((microservice, i)=>(
                    <CardMicroService key={microservice._id} microservice={microservice} />
                ))}
            </div>
        </div>
    );
}

export default MicroService;