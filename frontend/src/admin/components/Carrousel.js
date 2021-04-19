import React from 'react';
import PropTypes from 'prop-types';

import TableCarrousel from './TableCarrousel';

const Carrousel = ({
    appear,
    setAppearFormC,
    formCreateCarrouselSubmit,
    carrouselName,
    carrouselLink,
    handleInputCarrousel,
    carrouselPhotoM,
    carrouselPhotoD,
    carrousels,
    deleteC
}) => {
    return (
        <main className="mdl-layout__content mdl-color--grey-100">
            <div className="mdl-grid demo-content">

                <div className={`container-fluid ${!appear ? 'd-block' : 'd-none'}`}>
                    <div className="row">
                        <div className="col-6 mx-auto" onClick={() => setAppearFormC(true)}>
                            <div className="row insertion">
                                <div className="col"><h5>Inserte un nuevo Slide</h5></div>
                                <div className="col-2 vertical-center">
                                    <i className="fas fa-plus-circle mt-2" style={{ 'color': 'var(--main-color)', 'fontSize': '2em' }}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <form onSubmit={formCreateCarrouselSubmit} className={`my-2 mx-auto mdl-shadow--4dp p-4 rounded contact d-none ${appear ? 'd-block' : 'd-none'}`} method="post" encType="multipart/form-data">
                    <h3 className="text-center">Inserte un nuevo Slide</h3>

                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-12 col-lg-6">
                                    <div className="md-form">
                                        <i className="fas fa-file-signature prefix"></i>

                                        <input
                                            type="text"
                                            value={carrouselName}
                                            name="carrouselName"
                                            className="form-control"
                                            onChange={handleInputCarrousel}
                                            id="nameCarrousel"
                                            autoComplete='off'
                                            required
                                        />

                                        <label htmlFor="nameCarrousel">Nombre</label>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6">
                                    <div className="md-form">
                                        <i className="fas fa-link prefix"></i>

                                        <input
                                            type="text"
                                            value={carrouselLink}
                                            name="carrouselLink"
                                            className="form-control"
                                            onChange={handleInputCarrousel}
                                            id="link"
                                            autoComplete='off'
                                            required
                                        />

                                        <label htmlFor="link">Link</label>
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
                                            name="carrouselPhotoM"
                                            ref={carrouselPhotoM}
                                            id="carrouselPhotoM"
                                            required
                                        />

                                        <label className="input-group-text" htmlFor="carrouselPhotoM">Móvil</label>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6">
                                    <div className="input-group my-2">

                                        <input
                                            type="file"
                                            className="form-control"
                                            name="carrouselPhotoD"
                                            ref={carrouselPhotoD}
                                            id="carrouselPhotoD"
                                            required
                                        />

                                        <label className="input-group-text" htmlFor="carrouselPhotoD">Escritorio</label>
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

                <TableCarrousel
                    carrousels={carrousels}
                    deleteC={deleteC}
                />

            </div>
        </main>
    )
}

Carrousel.propTypes = {
    appear: PropTypes.bool.isRequired,
    setAppearFormC: PropTypes.func.isRequired,
    formCreateCarrouselSubmit:PropTypes.func.isRequired,
    carrouselName: PropTypes.string.isRequired,
    carrouselLink: PropTypes.string.isRequired,
    handleInputCarrousel:PropTypes.func.isRequired,
    carrouselPhotoM: PropTypes.object,
    carrouselPhotoD: PropTypes.object,
    carrousels: PropTypes.array.isRequired,
    deleteC: PropTypes.func.isRequired
}

export default Carrousel;