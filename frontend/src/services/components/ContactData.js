import React from 'react';
import Divider from '../../core/components/Divider';

const ContactData = () => {

    return (
        <>
            <div className="row">

                <div className="col-md-10 col-lg-8 mx-auto contact">

                    <div className="md-form">
                        <i className="fas fa-user prefix"></i>
                        <input type="text" className="form-control mt-3" id="name" />
                        <label htmlFor="name">Nombre(s)</label>
                    </div>

                    <div className="md-form">
                        <i className="fas fa-arrow-circle-right prefix"></i>
                        <input type="text" className="form-control mt-3" id="lastName" />
                        <label htmlFor="lastName">Apellidos</label>
                    </div>

                    <div className="md-form">
                        <i className="fas fa-phone prefix"></i>
                        <input type="text" className="form-control mt-3" id="phone" />
                        <label htmlFor="phone">Teléfono</label>
                    </div>

                    <div className="md-form">
                        <i className="fas fa-at prefix"></i>
                        <input type="email" className="form-control mt-3" id="email" />
                        <label htmlFor="email">Correo</label>
                    </div>

                    <Divider attr="main-color" />
                    <Divider attr="main-color" />

                    <div className="md-form">
                        <i className="fas fa-comment prefix"></i>
                        <input type="text" className="form-control mt-3" id="comment" />
                        <label htmlFor="comment">Comentario Adicional</label>
                    </div>

                    <button type="submit" className="btn bg-warning rounded-pill waves-effect mx-auto d-block">
                        Enviar
                            </button>

                </div>
            </div>
        </>
    );
}


export default ContactData;