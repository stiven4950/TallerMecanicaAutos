// Predefined Packages
import React from 'react';
import { Link } from 'react-router-dom';

// Custom packges
import ShowImage from './ShowImage';

const CardBrand = ({ _id, name }) => {
    return (
        <div className="col-4 col-sm-3 col-md-3 col-lg-2 text-center">
            <ShowImage
                id={_id}
                name={name}
                url='brand'
                attr='card-img-top'
            />
            <p className="text-center">
                <Link to="#"
                    className="d-block my-1"
                    style={{ 'color': 'black' }}>{name}</Link>
            </p>
        </div>
    );
}

export default CardBrand;