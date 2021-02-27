import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ()=>{
    return(
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" >VideoPlay</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{"--bs-scroll-height": "100px"}}>
                        <li className="nav-item">
                            <Link to="" className="nav-link active" aria-current="page">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="" className="nav-link">Link</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="" className="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Link
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><Link to="" className="dropdown-item">Action</Link></li>
                                <li><Link to="" className="dropdown-item">Another action</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link to="" className="dropdown-item">Something else here</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                        <Link to="" className="nav-link disabled" tabIndex="-1" aria-disabled="true">Link</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </>);
}

export default NavBar;