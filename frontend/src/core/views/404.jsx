import React from "react";
import Warning from '../static/img/atencion.png';

const NotFoundPage = () => {
    return (
        <div className="container-fluid h-100">
            <div className="row mt-5">
                <div className="col-10 col-lg-7 register borde1 mx-auto">
                    <h3 className="text-center">Página no encontrada</h3>
                    <img src={Warning} className="d-block mx-auto" alt="Error 404"/>
                    <h5 className="text-center">Error 404</h5>
                    <h5 className="mt-5 text-center">Lo sentimos no se pudo encontrar la página solicitada.</h5>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;