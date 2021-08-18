import React from 'react';
import PropTypes from 'prop-types'

import TableService from './TableService';

const Services = React.memo(({
    appear,
    setAppearFormS,
    formCreateServiceSubmit,
    serviceName,
    serviceDescription,
    serviceSlug,
    serviceType,
    servicePhoto,
    servicePhotoD,
    handleInput,
    services,
    deleteS
}) => {
    return (
        <main className="mdl-layout__content mdl-color--grey-100">
            <div className="mdl-grid demo-content">

                <div className={`container-fluid animate__animated animate__swing ${!appear ? 'd-block' : 'd-none'}`}>
                    <div className="row">
                        <div className="col-6 mx-auto" onClick={() => setAppearFormS(true)}>
                            <div className="row insertion">
                                <div className="col"><h5>Inserte un nuevo Servicio</h5></div>
                                <div className="col-2 vertical-center">
                                    <i className="fas fa-plus-circle mt-2" style={{ 'color': 'var(--main-color)', 'fontSize': '2em' }}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <form onSubmit={formCreateServiceSubmit} className={`my-2 mx-auto mdl-shadow--4dp p-4 rounded contact d-none ${appear ? 'd-block' : 'd-none'}`} method="post" encType="multipart/form-data">
                    <h3 className="text-center">Inserte un nuevo Servicio</h3>

                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-12 col-lg-6">
                                    <div className="md-form">
                                        <i className="fas fa-file-signature prefix"></i>

                                        <input
                                            type="text"
                                            value={serviceName}
                                            name="serviceName"
                                            className="form-control"
                                            onChange={handleInput}
                                            id="nameService"
                                            required
                                        />

                                        <label htmlFor="nameService">Nombre</label>
                                    </div>
                                </div>

                                <div className="col-md-12 col-lg-6">
                                    <div className="md-form">
                                        <i className="fas fa-file-medical-alt prefix"></i>

                                        <input
                                            type="text"
                                            value={serviceDescription}
                                            name="serviceDescription"
                                            className="form-control"
                                            onChange={handleInput}
                                            id="serviceDescription"
                                            required
                                        />

                                        <label htmlFor="serviceDescription">Descripción</label>
                                    </div>
                                </div>

                                <div className="col-md-12 col-lg-6">
                                    <div className="md-form">
                                        <i className="fas fa-vote-yea prefix"></i>

                                        <input
                                            type="text"
                                            value={serviceType}
                                            name="serviceType"
                                            className="form-control"
                                            onChange={handleInput}
                                            id="serviceType"
                                            required
                                        />

                                        <label htmlFor="serviceType">Type</label>
                                    </div>
                                </div>

                                <div className="col-md-12 col-lg-6">
                                    <div className="md-form">
                                        <i className="fas fa-link prefix"></i>

                                        <input
                                            type="text"
                                            value={serviceSlug}
                                            name="serviceSlug"
                                            className="form-control"
                                            onChange={handleInput}
                                            id="serviceSlug"
                                            required
                                        />

                                        <label htmlFor="serviceSlug">Slug</label>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-12 col-lg-6">
                                    <div className="input-group my-2">

                                        <input
                                            type="file"
                                            className="form-control"
                                            name="servicePhoto"
                                            ref={servicePhoto}
                                            id="servicePhoto"
                                            required
                                        />

                                        <label className="input-group-text" htmlFor="servicePhoto">Tarjeta</label>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6">
                                    <div className="input-group my-2">

                                        <input
                                            type="file"
                                            className="form-control"
                                            name="servicePhotoD"
                                            ref={servicePhotoD}
                                            id="servicePhotoD"
                                            required
                                        />

                                        <label className="input-group-text" htmlFor="servicePhotoD">Detalle</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row m-3">
                        <div className="col-12">
                            <button type="submit" className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-color--amber d-block ml-auto">
                                <i className="material-icons">add</i>
                            </button>
                        </div>
                    </div>
                </form>

                <TableService
                    services={services}
                    deleteS={deleteS}
                />

            </div>

        </main>
    )
});

Services.propTypes = {
    appear: PropTypes.bool.isRequired,
    setAppearFormS: PropTypes.func.isRequired,
    formCreateServiceSubmit: PropTypes.func.isRequired,
    serviceName: PropTypes.string.isRequired,
    serviceDescription: PropTypes.string.isRequired,
    serviceSlug: PropTypes.string.isRequired,
    serviceType: PropTypes.string.isRequired,
    servicePhoto: PropTypes.object.isRequired,
    servicePhotoD: PropTypes.object.isRequired,
    handleInput: PropTypes.func.isRequired,
    services: PropTypes.array.isRequired,
    deleteS: PropTypes.func.isRequired
}

export default Services;