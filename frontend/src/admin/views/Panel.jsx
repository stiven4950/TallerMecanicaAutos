// Predefined Packages
import React, { useState, useEffect, createRef } from 'react';

// Custom packges
import NavBarPanel from '../components/NavBarPanel';
import { deleteItem, getLists, createCarrousel, createService } from '../apiCore';
import '../static/css/styles.css';
import Carrousel from '../components/Carrousel';
import Services from '../components/Services';
import { useForm } from '../../hook/useForm';

const Panel = () => {
    /*           States          */
    // MENU
    const [numMenu, setNumMenu] = useState(1);
    const [appearFormC, setAppearFormC] = useState(false);
    const [appearFormS, setAppearFormS] = useState(false);

    // CARROUSEL
    const [carrousels, setCarrousels] = useState([]);

    const [newCarrousel, handleInputCarrousel, cleanCarrousel] = useForm({
        carrouselName: '',
        carrouselLink: '',
        carrouselPhotoM: createRef(),
        carrouselPhotoD: createRef()
    });

    let {
        carrouselName,
        carrouselLink,
        carrouselPhotoM,
        carrouselPhotoD
    } = newCarrousel;

    // --------------------------------------------------------
    // SERVICE
    const [services, setServices] = useState([]);


    const [newService, handleInput, cleanService] = useForm({
        serviceName: '',
        serviceDescription: '',
        serviceType: '',
        serviceSlug: '',
        servicePhoto: createRef(),
        servicePhotoD: createRef()
    });

    let {
        serviceName,
        serviceDescription,
        serviceType,
        serviceSlug,
        servicePhoto,
        servicePhotoD } = newService;

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
        cleanCarrousel({
            carrouselName: '',
            carrouselLink: '',
            carrouselPhotoM: createRef(),
            carrouselPhotoD: createRef()
        });

        

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
        cleanService({
            serviceName: '',
            serviceDescription: '',
            serviceType: '',
            serviceSlug: '',
            servicePhoto: createRef(),
            servicePhotoD: createRef()
        });

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

            <NavBarPanel
                configMenu={configMenu}
                numMenu={numMenu}
            />

            { numMenu === 1 ?

                <Carrousel
                    appear={appearFormC}
                    setAppearFormC={setAppearFormC}
                    formCreateCarrouselSubmit={formCreateCarrouselSubmit}
                    carrouselLink={carrouselLink}
                    carrouselName={carrouselName}
                    handleInputCarrousel={handleInputCarrousel}
                    carrouselPhotoM={carrouselPhotoM}
                    carrouselPhotoD={carrouselPhotoD}
                    carrousels={carrousels}
                    deleteC={deleteC}
                />

                :
                <Services
                    appear={appearFormS}
                    setAppearFormS={setAppearFormS}
                    formCreateServiceSubmit={formCreateServiceSubmit}
                    serviceName={serviceName}
                    serviceDescription={serviceDescription}
                    serviceSlug={serviceSlug}
                    serviceType={serviceType}
                    servicePhoto={servicePhoto}
                    servicePhotoD={servicePhotoD}
                    handleInput={handleInput}
                    services={services}
                    deleteS={deleteS}
                />
            }

        </div>
    );
}

export default Panel;