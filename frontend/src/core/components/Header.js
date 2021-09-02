// Predefined Packages
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

// Custom packages
import Logo from '../static/img/logo1.png';

const Header = () => {

    const { loginWithRedirect, logout,  isAuthenticated} = useAuth0();

    let route = window.location.pathname;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">


            <Link to="/" className="navbar-brand">
                <div className="container">
                    <div className="row">
                        <div className="col-2 vertical-center">
                            <img src={Logo} alt="RepCar" className="img-logo p-1" />
                        </div>
                        <div className="col-3 vertical-center">
                            <h5 className="name-company ml-4">RepCar</h5>
                        </div>
                    </div>
                </div>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className={`nav-item ${route === '/' ? 'active' : ''}`}>
                        <Link to="/" className="nav-link">Inicio</Link>
                    </li>
                    <li className={`nav-item ${route === '/quienes' ? 'active' : ''}`}>
                        <Link to="/quienes" className="nav-link">¿Quiénes Somos?</Link>
                    </li>

                    <li className="nav-item dropdown bg-dark">
                        <Link to="" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Servicios
                        </Link>

                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <div className="dropdown-divider"></div>
                            <NavLink activeClassName="active" to="/servicio/mecanica-basica" className="dropdown-item">Mecánica básica</NavLink>
                            <NavLink activeClassName="active" to="/servicio/revisiones-automotriz" className="dropdown-item">Revisiones automotríz</NavLink>
                            <NavLink activeClassName="active" to="/servicio/mecanica-especializada" className="dropdown-item">Mecánica especializada</NavLink>
                            <NavLink activeClassName="active" to="/servicio/estetica-automotriz" className="dropdown-item">Estética automotríz</NavLink>
                            <NavLink activeClassName="active" to="/admin" className="dropdown-item">Administrador</NavLink>
                        </div>
                    </li>

                    {isAuthenticated && <li className="nav-item">
                        <Link to="/profile" className="nav-link">
                            <i className="fas fa-user-circle icon"></i>
                        </Link>
                    </li>}

                    {route !== '/servicio/cotizar'
                        ?
                        <li className="nav-item vertical-center mx-auto">
                            <Link to="/servicio/cotizar" className="quote mx-2"> Reservar </Link>
                        </li>
                        :
                        <></>}
                    {
                    isAuthenticated
                    ?
                    <li className="nav-item vertical-center mx-auto">
                        <Link to="#" className="Blogin mx-2 animate__animated animate__swing" onClick={()=>logout()}> Salir </Link>
                    </li>
                    :
                    <li className="nav-item vertical-center mx-auto">
                        <Link to="#" className="Blogin mx-2 animate__animated animate__swing" onClick={() => loginWithRedirect()}> Inicia Sesión </Link>
                    </li>
                    }

                </ul>
            </div>
        </nav>
    );
}

/*
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenModalLogin: false,
            isOpenModalRegister: false,
        }

        this.openModalLogin = this.openModalLogin.bind(this);
        this.closeModalLogin = this.closeModalLogin.bind(this);

        this.openModalRegister = this.openModalRegister.bind(this);
        this.closeModalRegister = this.closeModalRegister.bind(this);
    }

    openModalLogin = () => { this.setState({ isOpenModalLogin: true, isOpenModalRegister: false }); }
    closeModalLogin = () => { this.setState({ isOpenModalLogin: false }); }

    openModalRegister = () => { this.setState({ isOpenModalLogin: false, isOpenModalRegister: true }); }
    closeModalRegister = () => { this.setState({ isOpenModalRegister: false }); }

    render() {
        let route = window.location.pathname;
        return (
            <>
                <Modal
                    isOpen={this.state.isOpenModalLogin}
                    onRequestClose={() => this.closeModalLogin()}
                    className="config-modal"
                    ariaHideApp={false}>

                    <ModalLogin
                        closeModalLogin={this.closeModalLogin}
                        openOther={this.openModalRegister}
                    />

                </Modal>

                <Modal
                    isOpen={this.state.isOpenModalRegister}
                    onRequestClose={() => this.closeModalRegister()}
                    className="config-modal"
                    ariaHideApp={false}>

                    <ModalRegister
                        closeModalRegister={this.closeModalRegister}
                        openOther={this.openModalLogin}
                    />

                </Modal>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">


                    <Link to="/" className="navbar-brand">
                        <div className="container">
                            <div className="row">
                                <div className="col-2 vertical-center">
                                    <img src={Logo} alt="RepCar" className="img-logo p-1" />
                                </div>
                                <div className="col-3 vertical-center">
                                    <h5 className="name-company ml-4">RepCar</h5>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item ${route === '/' ? 'active' : ''}`}>
                                <Link to="/" className="nav-link">Inicio</Link>
                            </li>
                            <li className={`nav-item ${route === '/quienes' ? 'active' : ''}`}>
                                <Link to="/quienes" className="nav-link">¿Quiénes Somos?</Link>
                            </li>

                            <li className="nav-item dropdown bg-dark">
                                <Link to="" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Servicios
                                </Link>

                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="dropdown-divider"></div>
                                    <NavLink activeClassName="active" to="/servicio/mecanica-basica" className="dropdown-item">Mecánica básica</NavLink>
                                    <NavLink activeClassName="active" to="/servicio/revisiones-automotriz" className="dropdown-item">Revisiones automotríz</NavLink>
                                    <NavLink activeClassName="active" to="/servicio/mecanica-especializada" className="dropdown-item">Mecánica especializada</NavLink>
                                    <NavLink activeClassName="active" to="/servicio/estetica-automotriz" className="dropdown-item">Estética automotríz</NavLink>
                                </div>
                            </li>
                            {route !== '/servicio/cotizar'
                                ?
                                <li className="nav-item vertical-center mx-auto">
                                    <Link to="/servicio/cotizar" className="quote mx-2"> Reservar </Link>
                                </li>
                                :
                                <></>}

                            <li className="nav-item vertical-center mx-auto">
                                <Link to="#" className="Blogin mx-2 animate__animated animate__swing" onClick={() => this.openModalLogin()}> Inicia Sesión </Link>
                            </li>

                        </ul>
                    </div>
                </nav>

            </>
        );
    }
}*/

export default Header;
