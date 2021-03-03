import React from 'react';
import {API} from '../../config';

const ShowImage=({item,url,attr})=>{
    return (
        <>
            <img src={`${API}/${url}/photo/${item._id}`}
            alt={item.name} className={attr}
            />
        </>
    );
}

export default ShowImage;