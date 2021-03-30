// Predefined Packages
import React, { useState, useEffect, createRef } from 'react';

// Custom packges
import ShowImage from '../../services/components/ShowImage';
import NavBarPanel from '../components/NavBarPanel';
import { deleteItem, getLists, createCarrousel, createService } from '../apiCore';
import '../static/css/styles.css';

const Panel = () => {
    /*           States          */
    // MENU
    const [numMenu, setNumMenu] = useState(1);
    const [appearFormC, setAppearFormC] = useState(false);
    const [appearFormS, setAppearFormS] = useState(false);

    // CARROUSEL
    const [carrousels, setCarrousels] = useState([]);

    const [carrouselName, setCarrouselName] = useState('');
    const [carrouselLink, setCarrouselLink] = useState('');

    // CARROUSEL PHOTO
    let carrouselPhotoM = createRef();
    let carrouselPhotoD = createRef();

    // --------------------------------------------------------
    // SERVICE
    const [services, setServices] = useState([]);

    const [serviceName, setServiceName] = useState('');
    const [serviceDescription, setServiceDescription] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [serviceSlug, setServiceSlug] = useState('');

    // SERVICE PHOTO
    let servicePhoto = createRef();
    let servicePhotoD = createRef();

    /*           Handlers          */
    const loadC = async () => {
        setCarrousels(await getLists('carrousel'));
    }

    const deleteC = async (id) => {
        await deleteItem('carrousel', id);
        loadC();
    }

    // --------------------------------------------------
    const loadS = async () => {
        setServices(await getLists('service'));
    }

    const deleteS = async (id) => {
        await deleteItem('service', id);
        loadS();
    }

    useEffect(() => {
        loadC();
    }, []);

    // GAMES

    const formCreateCarrouselSubmit = async (event) => {
        event.preventDefault();

        await createCarrousel(
            carrouselName,
            carrouselLink,
            carrouselPhotoM.current.files[0],
            carrouselPhotoD.current.files[0],
        );
        loadC();

        /* Se resetea el valor de los campos */
        setCarrouselName('');
        setCarrouselLink('');

        setAppearFormC(false);
    }

    const formCreateServiceSubmit = async (event) => {
        event.preventDefault();

        await createService(
            serviceName,
            serviceDescription,
            serviceType,
            serviceSlug,
            servicePhoto.current.files[0],
            servicePhotoD.current.files[0],
        );
        loadS();

        /* Se resetea el valor de los campos */
        setServiceName('');
        setServiceDescription('');
        setServiceType('');
        setServiceSlug('');

        setAppearFormS(false);
    }

    const configMenu = (num) => {
        switch (num) {
            case 1:
                setNumMenu(1);
                loadC();
                setAppearFormC(false);
                break;

            case 2:
                setNumMenu(2);
                loadS();
                setAppearFormS(false);
                break;

            default:
                break;
        }
    }


    return (
        <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">

            <NavBarPanel configMenu={configMenu} numMenu={numMenu} />

            { numMenu === 1 ?

                <main className="mdl-layout__content mdl-color--grey-100">
                    <div className="mdl-grid demo-content">

                        <div className={`container-fluid ${!appearFormC ? 'd-block' : 'd-none'}`}>
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

                        <form onSubmit={formCreateCarrouselSubmit} className={`my-2 mx-auto mdl-shadow--4dp p-4 rounded contact d-none ${appearFormC ? 'd-block' : 'd-none'}`} method="post" encType="multipart/form-data">
                            <h3 className="text-center">Inserte un nuevo Slide</h3>

                            <div className="row">
                                <div className="col-10 mx-auto">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6">
                                            <div className="md-form">
                                                <i className="fas fa-file-signature prefix"></i>
                                                <input type="text" value={carrouselName} className="form-control" onChange={(event) => setCarrouselName(event.target.value)} id="nameCarrousel" required />
                                                <label htmlFor="nameCarrousel">Nombre</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6">
                                            <div className="md-form">
                                                <i className="fas fa-link prefix"></i>
                                                <input type="text" value={carrouselLink} className="form-control" onChange={(event) => setCarrouselLink(event.target.value)} id="link" required />
                                                <label htmlFor="link">Link</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-10 mx-auto">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6">
                                            <div className="input-group my-2">
                                                <input type="file" className="form-control" name="photoM" ref={carrouselPhotoM} id="photoM" required />
                                                <label className="input-group-text" htmlFor="photoM">Móvil</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6">
                                            <div className="input-group my-2">
                                                <input type="file" className="form-control" name="photoD" ref={carrouselPhotoD} id="photoD" required />
                                                <label className="input-group-text" htmlFor="photoD">Escritorio</label>
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

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Link</th>
                                    <th scope="col">F. Escritorio</th>
                                    <th scope="col">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {carrousels.map((carrousel, i) => (
                                    <tr key={i + 1}>
                                        <td>{i + 1}</td>
                                        <td>{carrousel.name}</td>
                                        <td>{carrousel.link}</td>
                                        <td>
                                            <ShowImage
                                                id={carrousel._id}
                                                name={carrousel.name}
                                                url='carrousel'
                                                attr=''
                                                option='photoDesktop'
                                            />
                                        </td>
                                        <td style={{ 'height': '100%' }}>
                                            <button
                                                onClick={() => deleteC(carrousel._id)}
                                                className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored mt-4">

                                                <i className="material-icons">delete</i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>

                </main>
                :
                <main className="mdl-layout__content mdl-color--grey-100">
                    <div className="mdl-grid demo-content">

                        <div className={`container-fluid ${!appearFormS ? 'd-block' : 'd-none'}`}>
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

                        <form onSubmit={formCreateServiceSubmit} className={`my-2 mx-auto mdl-shadow--4dp p-4 rounded contact d-none ${appearFormS ? 'd-block' : 'd-none'}`} method="post" encType="multipart/form-data">
                            <h3 className="text-center">Inserte un nuevo Servicio</h3>

                            <div className="row">
                                <div className="col-10 mx-auto">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6">
                                            <div className="md-form">
                                                <i className="fas fa-file-signature prefix"></i>
                                                <input type="text" value={serviceName} className="form-control" onChange={(event) => setServiceName(event.target.value)} id="nameService" required />
                                                <label htmlFor="nameService">Nombre</label>
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-lg-6">
                                            <div className="md-form">
                                                <i className="fas fa-file-medical-alt prefix"></i>
                                                <input type="text" value={serviceDescription} className="form-control" onChange={(event) => setServiceDescription(event.target.value)} id="serviceDescription" required />
                                                <label htmlFor="serviceDescription">Descripción</label>
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-lg-6">
                                            <div className="md-form">
                                                <i className="fas fa-vote-yea prefix"></i>
                                                <input type="text" value={serviceType} className="form-control" onChange={(event) => setServiceType(event.target.value)} id="serviceType" required />
                                                <label htmlFor="serviceType">Type</label>
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-lg-6">
                                            <div className="md-form">
                                                <i className="fas fa-link prefix"></i>
                                                <input type="text" value={serviceSlug} className="form-control" onChange={(event) => setServiceSlug(event.target.value)} id="serviceSlug" required />
                                                <label htmlFor="serviceSlug">Slug</label>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-10 mx-auto">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6">
                                            <div className="input-group my-2">
                                                <input type="file" className="form-control" name="photoM" ref={servicePhoto} id="servicePhotoM" required />
                                                <label className="input-group-text" htmlFor="servicePhotoM">Tarjeta</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-6">
                                            <div className="input-group my-2">
                                                <input type="file" className="form-control" name="photoD" ref={servicePhotoD} id="servicePhotoD" required />
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

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Slug</th>
                                    <th scope="col">F. Tarjeta</th>
                                    <th scope="col">F. Detalle</th>
                                    <th scope="col">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {services.map((service, i) => (
                                    <tr key={i + 1}>
                                        <td>{i + 1}</td>
                                        <td>{service.name}</td>
                                        <td>{service.slug}</td>
                                        <td>
                                            <ShowImage
                                                id={service._id}
                                                name={service.name}
                                                url='service'
                                                attr=''
                                                option='photo'
                                            />
                                        </td>
                                        <td>
                                            <ShowImage
                                                id={service._id}
                                                name={service.name}
                                                url='service'
                                                attr=''
                                                option='photoDetail'
                                            />
                                        </td>
                                        <td style={{ 'height': '100%' }}>
                                            <button onClick={() => deleteS(service._id)} className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored mt-4">
                                                <i className="material-icons">delete</i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>

                </main>}

        </div>
    );
}

export default Panel;