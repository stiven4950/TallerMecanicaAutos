import React from 'react';

import ShowImage from './ShowImage';

const CardBlog = ({id, name}) => {
    return (
        <div className="col-md-3 col-lg-3 m-1 all-card">
            <div className="card card-restriction-blog animate__animated animate__bounceInDown animate__slower">
                <div className="fade-in">
                    <ShowImage
                        id={id}
                        name={name}
                        url='blog'
                        attr='card-img-top img-card-blog'
                    />
                </div>
                <div className="card-body card-b-title">
                    <p className="text-center">{name}</p>
                </div>
            </div>
        </div>
    );
}

export default CardBlog;