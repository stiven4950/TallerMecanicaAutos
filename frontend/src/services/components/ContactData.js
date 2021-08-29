import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Divider from '../../core/components/Divider';
import { regExpComment, regExpEmail, regExpNames, regExpPhone } from '../../core/utils/validator';

const ContactData = React.memo(({
    handleInputChange,
    user_name,
    user_lastname,
    user_phone,
    user_email,
    user_comment,
}) => {

    const [error, setError] = useState({
        name: "0",
        lastname: "0",
        phone: "0",
        email: "0",
        comment: "0"
    });

    const { name, lastname, phone, email, comment } = error;

    const validateAndShow = (e) => {

        const { target } = e;
        const {name} = target;
        
        switch (name) {
            case 'user_name':
                setError({ ...error, name: handleInputChange(e, regExpNames) });
                break;
            case 'user_lastname':
                setError({ ...error, lastname: handleInputChange(e, regExpNames) });
                break;
            case 'user_phone':
                setError({ ...error, phone: handleInputChange(e, regExpPhone) });
                break;
            case 'user_email':
                setError({ ...error, email: handleInputChange(e, regExpEmail) });
                break;
            case 'user_comment':
                setError({ ...error, comment: handleInputChange(e, regExpComment) });
                break;
            default:
                break;
        }
    }

    return (
        <div className="row">

            <div className="col-md-10 col-lg-8 mx-auto contact">

                <div className="md-form">
                    <i className="fas fa-user prefix"></i>
                    <input type="text" className="form-control mt-3"
                        id="user_name"
                        name='user_name'
                        value={user_name}
                        onChange={validateAndShow}
                        autoComplete='off'
                        required
                    />
                    {!name&&<p className="error">Campo inválido</p>}
                    <label htmlFor="user_name">Nombre(s)</label>
                </div>

                <div className="md-form">
                    <i className="fas fa-arrow-circle-right prefix"></i>
                    <input type="text" className="form-control mt-3"
                        id="user_lastname"
                        name='user_lastname'
                        value={user_lastname}
                        onChange={validateAndShow}
                        autoComplete='off'
                        required
                    />
                    {!lastname&&<p className="error">Campo inválido</p>}
                    <label htmlFor="user_lastname">Apellidos</label>
                </div>

                <div className="md-form">
                    <i className="fas fa-phone prefix"></i>
                    <input type="text" className="form-control mt-3"
                        id="user_phone"
                        name='user_phone'
                        value={user_phone}
                        onChange={validateAndShow}
                        autoComplete='off'
                        required
                    />
                    {!phone&&<p className="error">Campo inválido</p>}
                    <label htmlFor="user_phone">Teléfono</label>
                </div>

                <div className="md-form">
                    <i className="fas fa-at prefix"></i>
                    <input type="email" className="form-control mt-3"
                        id="user_email"
                        name='user_email'
                        value={user_email}
                        onChange={validateAndShow}
                        autoComplete='off'
                        required
                    />
                    {!email&&<p className="error">Campo inválido</p>}
                    <label htmlFor="user_email">Correo</label>
                </div>

                <Divider attr="main-color" />
                <Divider attr="main-color" />

                <div className="md-form">
                    <i className="fas fa-comment prefix"></i>
                    <input type="text" className="form-control mt-3"
                        id="user_comment"
                        name='user_comment'
                        value={user_comment}
                        onChange={validateAndShow}
                        autoComplete='off'
                        required
                    />
                    {!comment&&<p className="error">Campo inválido</p>}
                    <label htmlFor="user_comment">Comentario Adicional</label>
                </div>

            </div>
        </div>
    );
});

ContactData.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    user_name: PropTypes.string.isRequired,
    user_lastname: PropTypes.string.isRequired,
    user_phone: PropTypes.string.isRequired,
    user_email: PropTypes.string.isRequired,
    user_comment: PropTypes.string.isRequired
}


export default ContactData;