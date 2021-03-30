// Predefined Packages
import React from 'react';

// Custom packges
import { API } from '../../config';

const ShowImage = ({ id, name, url, attr }) => {
    return (
        <img src={`${API}/${url}/photo/${id}`}
            alt={name} className={attr}
        />
    );
}

export default ShowImage;