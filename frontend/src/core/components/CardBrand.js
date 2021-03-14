import React from 'react';
import { Link } from 'react-router-dom';

import ShowImage from './ShowImage';
const CardBrand = ({ brand }) => {
    return (
        <div className="col-4 col-sm-3 col-md-3 col-lg-2 text-center">
            <ShowImage item={brand} url='brand' attr='card-img-top' />
            <p className="text-center">
                <Link to="#" className="d-block my-1" style={{ 'color': 'black' }}>{brand.name}</Link>
            </p>
        </div>
    );
}

export default CardBrand;