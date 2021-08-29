import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";


import Header from '../../core/components/Header';
import { useForm } from '../../hook/useForm';
import { createUser, putUserData } from '../../helpers/crudUser';
import { regExpComment, regExpNames, regExpPhone } from '../../core/utils/validator';
import { getUser } from '../apiCore';

const Profile = () => {

    const { user, isAuthenticated } = useAuth0();

    if (!isAuthenticated) window.location.href = '/login';

    const [value, handleInputChange, , fillOBjects] = useForm({
        email: "", name: "", lastname: "", phone: "", address: "",
    });

    const createIfNotExists = async () => {
        await createUser(user.name, '', user.phone_number, user.email, user.address);
    }

    const loadData = async () => {
        const data = await getUser(user.email);
        fillOBjects(data[0]);
    }

    useEffect(() => {
        createIfNotExists();
        loadData();
    }, []);

    const { email, name, lastname, phone, address } = value;

    const [error, setError] = useState({
        ename: "0",
        elastname: "0",
        ephone: "0",
        eaddress: "0"
    });

    const { ename, elastname, ephone, eaddress } = error;

    const validateAndShow = (e) => {

        const { target } = e;
        const { name } = target;

        switch (name) {
            case 'name':
                setError({ ...error, ename: handleInputChange(e, regExpNames) });
                break;
            case 'lastname':
                setError({ ...error, elastname: handleInputChange(e, regExpNames) });
                break;
            case 'phone':
                setError({ ...error, ephone: handleInputChange(e, regExpPhone) });
                break;
            case 'address':
                setError({ ...error, eaddress: handleInputChange(e, regExpComment) });
                break;
            default:
                break;
        }
    }

    const handleForm = async (e) => {
        e.preventDefault();

        const data = await putUserData(
            name,
            lastname,
            phone,
            email,
            address
        );

        if (data.success) {
            alert('Actualizado ;)');
        }
        else alert('Perfil no actualizado');
    }

    return (
        <>
            <Header />

            <div className="container">
                <div className="row mt-3">

                    <div className="col-md-6 mx-auto register">

                        <form onSubmit={handleForm}>

                            <div className="float-circle d-block mx-auto vertical-center">
                                <img src={user.picture} alt={user.name} />
                            </div>

                            <div className="row">

                                <div className="col-md-12">
                                    <h2 className="mb-3 text-center"><b>Perfil</b></h2>

                                    <div className="md-form">
                                        <i className="fas fa-user prefix"></i>
                                        <input
                                            type="text"
                                            name="name"
                                            id='name'
                                            className="form-control"
                                            maxLength="254"
                                            value={name}
                                            onChange={validateAndShow}
                                            required
                                            autoComplete="off"
                                        />
                                        <label htmlFor="name">Nombre(s)</label>
                                        {!ename && <p className="error">Campo inválido</p>}
                                    </div>

                                    <div className="md-form">
                                        <i className="fas fa-arrow-circle-right prefix"></i>
                                        <input
                                            type="text"
                                            name="lastname"
                                            id='lastname'
                                            className="form-control"
                                            maxLength="254"
                                            value={lastname}
                                            onChange={validateAndShow}
                                            required
                                            autoComplete="off"
                                        />
                                        <label htmlFor="lastname">Apellidos</label>
                                        {!elastname && <p className="error">Campo inválido</p>}
                                    </div>

                                    <div className="md-form">
                                        <i className="fas fa-phone prefix"></i>
                                        <input
                                            type="text"
                                            name="phone"
                                            id='phone'
                                            className="form-control"
                                            maxLength="254"
                                            value={phone}
                                            onChange={validateAndShow}
                                            required
                                            autoComplete="off"
                                        />
                                        <label htmlFor="phone">Teléfono</label>
                                        {!ephone && <p className="error">Campo inválido</p>}
                                    </div>

                                    <div className="md-form">
                                        <i className="fas fa-map-marked-alt prefix"></i>
                                        <input
                                            type="text"
                                            name="address"
                                            id='address'
                                            className="form-control"
                                            maxLength="254"
                                            value={address}
                                            onChange={validateAndShow}
                                            required
                                        />
                                        <label htmlFor="address">Dirección</label>
                                        {!eaddress && <p className="error">Campo inválido</p>}
                                    </div>

                                    <div className="md-form">
                                        <i className="fas fa-at prefix"></i>
                                        <input
                                            type="email"
                                            name="email"
                                            id='email'
                                            className="form-control"
                                            maxLength="254"
                                            value={email}
                                            required
                                            readOnly
                                        />
                                        <label htmlFor="email">Correo</label>
                                    </div>

                                    <button type="submit" className="btn bg-warning rounded-pill waves-effect mx-auto d-block">
                                        Actualizar
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;