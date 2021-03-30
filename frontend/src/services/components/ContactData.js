import React from 'react';
import Divider from '../../core/components/Divider';

const ContactData = ({
    setFieldsUser,
    user_name,
    user_lastname,
    user_phone,
    user_email,
    user_comment,
}) => {

    return (
        <div className="row">

            <div className="col-md-10 col-lg-8 mx-auto contact">

                <div className="md-form">
                    <i className="fas fa-user prefix"></i>
                    <input type="text" className="form-control mt-3"
                        id="user_name"
                        name='user_name'
                        value={user_name}
                        onChange={setFieldsUser}
                        required
                    />
                    <label htmlFor="user_name">Nombre(s)</label>
                </div>

                <div className="md-form">
                    <i className="fas fa-arrow-circle-right prefix"></i>
                    <input type="text" className="form-control mt-3"
                        id="user_lastname"
                        name='user_lastname'
                        value={user_lastname}
                        onChange={setFieldsUser}
                        required
                    />
                    <label htmlFor="user_lastname">Apellidos</label>
                </div>

                <div className="md-form">
                    <i className="fas fa-phone prefix"></i>
                    <input type="text" className="form-control mt-3"
                        id="user_phone"
                        name='user_phone'
                        value={user_phone}
                        onChange={setFieldsUser}
                        required
                    />
                    <label htmlFor="user_phone">Teléfono</label>
                </div>

                <div className="md-form">
                    <i className="fas fa-at prefix"></i>
                    <input type="email" className="form-control mt-3"
                        id="user_email"
                        name='user_email'
                        value={user_email}
                        onChange={setFieldsUser}
                        required
                    />
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
                        onChange={setFieldsUser}
                        required
                    />
                    <label htmlFor="user_comment">Comentario Adicional</label>
                </div>

            </div>
        </div>
    );
}


export default ContactData;