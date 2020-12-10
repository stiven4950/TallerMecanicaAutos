import React from 'react'
import { Link, } from 'react-router-dom';
//import { Redirect, Link } from 'react-router-dom'
import Logo from '../img/logo1.png'
import '../css/estilos.css'

const Header = ({openModal}) =>{

    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">

            
            <Link to="/" className="navbar-brand">
                <div className="container">
                    <div className="row">
                        <div className="col-2 vertical-center">
                            <img src={Logo} alt="RepCar" className="img-logo p-1"/>
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
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/quienes" className="nav-link">¿Quiénes Somos?</Link>
                    </li>

                    <li className="nav-item dropdown bg-dark">
                        <Link to="" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Servicios
                        </Link>

                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <div className="dropdown-divider"></div>
                            <Link to="/servicios/mecanicaBasica" className="dropdown-item" >Mecánica básica</Link>
                            <Link to="/servicios/mecanicaEspecializada" className="dropdown-item" >Mecánica especializada</Link>
                            <Link to="/servicios/revisionesAutomotriz" className="dropdown-item" >Revisiones automotríz</Link>
                            <Link to="/servicios/esteticaAutomotriz" className="dropdown-item" >Estética automotríz</Link>
                            <Link to="/servicios/lavado/" className="dropdown-item" >Lavado</Link>
                        </div>
                    </li>

                    <li className="nav-item vertical-center mx-auto">
                        <Link to="" className="Blogin" onClick={()=>openModal()}> Inicia Sesión </Link>
                    </li>
                
                </ul>
            </div>
        </nav>
    );
}

export default Header;
