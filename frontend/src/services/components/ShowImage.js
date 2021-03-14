import React from 'react';
import { API } from '../../config';

const ShowImage = ({ item, url, attr, option }) => {
    return (
        <>
            <img src={`${API}/${url}/${option}/${item._id}`}
                alt={item.name} className={attr}
            />
        </>
    );
}

export default ShowImage;