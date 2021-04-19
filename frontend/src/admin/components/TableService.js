import React from 'react';
import PropTypes from 'prop-types';
import ShowImage from '../../services/components/ShowImage';

const TableService = ({ services, deleteS }) => {
    return (
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
    );
}

TableService.propTypes = {
    services: PropTypes.array.isRequired,
    deleteS: PropTypes.func.isRequired
}

export default TableService;