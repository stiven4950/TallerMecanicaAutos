import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import Divider from './Divider';

class RegisterModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emailController: '',
            passwordController: '',
            passwordController2: '',
            see: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSee = this.handleSee.bind(this);
    }

    handleChange(event) {
        switch (event.target.name) {
            case "emailInput":
                this.setState({
                    emailController: event.target.value,
                });
                break;

            case "passwordInput":
                this.setState({
                    passwordController: event.target.value,
                });
                break;

            case "passwordInput2":
                this.setState({
                    passwordController2: event.target.value,
                });
                break;
            default:
                console.warn("Error");
        }

    }

    handleSubmit(event) {
        alert('A email was submitted: ' + this.state.emailController);
        alert('A password was submitted: ' + this.state.passwordController);
        event.preventDefault();
    }

    handleSee() {
        this.setState({ see: !this.state.see });
    }


    render() {

        const properties = this.props;

        return (
            <div className="container-fluid">
                <div className="row vertical-center">
                    <div className="col-xs-12 col-md-10 col-lg-7 col-xl-5 mt-5 pt-5 mx-auto">

                        <div className="modal-content p-4">
                            <div className="modal-header">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-10">
                                            <h5 className="title">Regístrate</h5>
                                        </div>
                                        <div className="col-2">
                                            <button className="close" onClick={() => properties.closeModalRegister()} >&times;</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-body">

                                    <div className="row my-3">
                                        <div className="col">
                                            <div className="icon-login vertical-center ml-auto">
                                            <i class="fab fa-google"></i>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="icon-login vertical-center mr-auto">
                                            <i class="fab fa-facebook"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <Divider attr="main-color mb-3"/>

                                <form className="newsletterForm" onSubmit={this.handleSubmit}>
                                    <div className="input-contenedor">
                                        <div className="row">
                                            <div className="col-2">
                                                <i className="fas fa-envelope icon"></i>
                                            </div>
                                            <div className="col">
                                                <input type="email"
                                                    name="emailInput"
                                                    value={this.state.emailController}
                                                    onChange={this.handleChange}
                                                    placeholder="Correo electrónico"
                                                    required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="input-contenedor">
                                        <div className="row">
                                            <div className="col-2">
                                                <i className="fas fa-key icon"></i>
                                            </div>
                                            <div className="col">
                                                <input type={!this.state.see ? "password" : "text"}
                                                    onChange={this.handleChange}
                                                    name="passwordInput"
                                                    value={this.state.passwordController}
                                                    placeholder="Contraseña"
                                                    required />
                                            </div>
                                            <div className="col-2 vertical-center">
                                                <i className="fas fa-eye d-block mx-auto"
                                                    onClick={this.handleSee.bind(this)}
                                                    style={this.state.see ? { color: 'var(--main-color)' } : { color: 'var(--color-0)' }}>
                                                </i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="input-contenedor">
                                        <div className="row">
                                            <div className="col-2">
                                                <i className="fas fa-chevron-right icon"></i>
                                            </div>
                                            <div className="col">
                                                <input type={!this.state.see ? "password" : "text"}
                                                    onChange={this.handleChange}
                                                    name="passwordInput2"
                                                    value={this.state.passwordController2}
                                                    placeholder="Confirmar contraseña"
                                                    required />
                                            </div>
                                        </div>
                                    </div>

                                    <p>¿Ya tienes una cuenta?<Link to="#" onClick={() => properties.openOther()} className="link1" data-toggle="modal"> Inicia Sesión</Link></p>
                                    <input type="submit" value="¡Empecemos!" className="guardarBtn" />

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterModal;
