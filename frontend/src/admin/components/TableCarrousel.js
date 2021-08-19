import React from 'react';
import PropTypes from 'prop-types';

import ShowImage from '../../services/components/ShowImage';


const TableCarrousel = ({ carrousels, deleteC }) => {

    return (
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
                                className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored mt-4 animate__animated animate__bounce">

                                <i className="material-icons">delete</i>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

TableCarrousel.propTypes = {
    carrousels: PropTypes.array.isRequired,
    deleteC: PropTypes.func.isRequired
}

export default TableCarrousel;
