import React from 'react';
import { API } from '../../config';

const ShowImage = ({ id, name, url, attr, option }) => {
    return (
        <>
            <img src={`${API}/${url}/${option}/${id}`}
                alt={name} className={attr}
            />
        </>
    );
}

export default ShowImage;