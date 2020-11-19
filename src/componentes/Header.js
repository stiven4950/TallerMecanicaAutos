import React, { Component } from 'react'
import { Link, } from 'react-router-dom';
//import { Redirect, Link } from 'react-router-dom'
import Logo from '../img/logo6.png'
import '../css/estilos.css'

class Header extends Component{

    render(){
        return (
        
            <header className="sticky-top">
                <div className="wrapper">
        
                <div className="img-logo">
        
                    <Link to="/">
                    <div className="cols">
                        <img src={Logo} alt="logo"/>
                    </div>
                    <div className="cols">
                        <h1>REPCAR</h1>
                    </div>
                    </Link>
        
                </div>
        
                    <nav>
                    <Link to="/">INICIO</Link>
                    <Link to="/quienes">¿QUIÉNES SOMOS?</Link>
                        <a className="btn dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                        SERVICIOS
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <Link to="/servicios" className="dropdown-item" >Servicios</Link>
                        <div className="dropdown-divider"></div>
                        <Link to="/servicios/mecanicaBasica" className="dropdown-item" >Mecánica básica</Link>
                        <Link to= "/servicios/mecanicaEspecializada" className="dropdown-item" >Mecánica especializada</Link>
                        <Link to="/servicios/revisionesAutomotriz" className="dropdown-item" >Revisiones automotríz</Link>
                        <Link to="/servicios/esteticaAutomotriz" className="dropdown-item" >Estética automotríz</Link>
                        <Link to="/servicios/lavado/" className="dropdown-item" >Lavado</Link>
                        </div>
                    <Link to="" className="Blogin" id="modal-btn"  >INICIAR SESIÓN</Link>
                    </nav>
                </div>
            </header>
        )
    }
  
}
export default Header;
         