import React from 'react';

const Domicilio = () => {
    return (
        <div className="container">
            <div className="row">

                <div className="col-md-8 mx-auto register">

                    <h1 className="text-center mb-3">Mecánica sin salir de casa</h1>

                    <div className="col-10 my-2 mx-auto">
                        
                        <div className="row">

                            <div className="col">
                                <div className="row">
                                    <div className="col-5">
                                        <div className="icon-domicilio vertical-center ml-auto blue-gradient">
                                            <i class="fas fa-car"></i>
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        <h6>Llevamos tu carro al taller</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="row">
                                    <div className="col-5">
                                        <div className="icon-domicilio vertical-center ml-auto blue-gradient">
                                            <i class="fas fa-home"></i>
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        <h6>Reparamos el carro en tu casa</h6>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <p className="text-center">Sin costo adicional y cubierto <br />por nuestra póliza de seguros</p>

                    <button type="button" className="btn blue-gradient rounded-pill waves-effect mx-auto d-block">
                        Más información
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Domicilio;