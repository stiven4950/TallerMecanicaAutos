// Predefined Packages
import React, { useState, useEffect, createRef } from 'react';
import ShowImage from '../../services/components/ShowImage';
import { getCarrousel } from '../apiCore';

import '../static/css/styles.css';


// Custom packges
import NavBarPanel from '../components/NavBarPanel';

const Panel = () => {
    /*           States          */
    // MENU
    const [numMenu, setNumMenu] = useState(1);

    // CARROUSEL
    const [carrousels, setCarrousels] = useState([]);
    const [, setError] = useState(false);

    const [carrouselName, setCarrouselName] = useState('');
    const [carrouselLink, setCarrouselLink] = useState('');

    // CARROUSEL PHOTO
    let carrouselPhotoM = createRef();
    let carrouselPhotoD = createRef();

    /*           Handlers          */
    const loadCarrousel = () => {
        getCarrousel().then(data=>{
            if (data.error) {
                setError(data.error);
            }else{
                setCarrousels(data);
            }
        });
    }

    useEffect(() => {
        loadCarrousel();
    }, []);

    // GAMES

    const formCreateCarrouselSubmit = async (event) => {
        event.preventDefault();

        /* await createVideogame(
            carrouselName,
            carrouselLink,
            carrouselPhotoM.current.files[0],
            carrouselPhotoD.current.files[0],
        ); */
        loadCarrousel();

        /* Se resetea el valor de los campos */

    }

    const configMenu = (num) => {
        switch (num) {
            case 1:
                setNumMenu(1);
                loadCarrousel();
                break;

            case 2:
                setNumMenu(2);
                
                break;
            
            default:
                break;
        }
    }


    return (
        <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">

            <NavBarPanel configMenu={configMenu} />

            { numMenu === 1 ?

                <main className="mdl-layout__content mdl-color--grey-100">
                    <div className="mdl-grid demo-content">

                        <form onSubmit={formCreateCarrouselSubmit} className="my-4 mx-auto mdl-shadow--4dp p-4 rounded" method="post" encType="multipart/form-data">
                            <h2 className="text-center">Inserte un nuevo Slide</h2>

                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mx-2">
                                <input className="mdl-textfield__input" type="text" value={carrouselName} onChange={(event) => setCarrouselName(event.target.value)} id="nameCarrousel" required />
                                <label className="mdl-textfield__label" htmlFor="nameCarrousel">Nombre</label>
                            </div>

                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mx-2">
                                <input className="mdl-textfield__input" type="text" value={carrouselLink} onChange={(event) => setCarrouselLink(event.target.value)} id="link" required />
                                <label className="mdl-textfield__label" htmlFor="link">Link</label>
                            </div>

                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mx-2">
                                <div class="input-group">
                                    <input type="file" className="form-control" name="photoM" ref={carrouselPhotoM} id="photoM" required />
                                    <label class="input-group-text" htmlFor="photoM">Móvil</label>
                                </div>
                            </div>

                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mx-2">
                                <div class="input-group">
                                    <input type="file" className="form-control" name="photoD" ref={carrouselPhotoD} id="photoD" required />
                                    <label class="input-group-text" htmlFor="photoD">Escritorio</label>
                                </div>
                            </div>


                            <button type="submit" className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-js-ripple-effect mdl-color--amber mx-3">
                                <i className="material-icons">add</i>
                            </button>
                        </form>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">link</th>
                                    <th scope="col">F. Móvil</th>
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
                                        <td><ShowImage item={carrousel} url='carrousel' attr='' option='photoMobile'/></td>
                                        <td><ShowImage item={carrousel} url='carrousel' attr='' option='photoDesktop'/></td>
                                        <td style={{ 'height': '100%' }}>
                                            <button className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored mt-4">
                                                <i className="material-icons">delete</i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>

                </main> : <div></div>}

        </div>
    );
}

export default Panel;