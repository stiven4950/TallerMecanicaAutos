import React from 'react';
import { Link } from 'react-router-dom';
import User from '../static/img/user.jpg';

const NavBarPanel=({configMenu})=>{

    return(
        <>
            <header className="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">Panel</span>
                    <div className="mdl-layout-spacer"></div>

                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                        <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search">
                            <i className="material-icons">search</i>
                        </label>
                        <div className="mdl-textfield__expandable-holder">
                            <input className="mdl-textfield__input" type="text" id="search"/>
                            <label className="mdl-textfield__label" htmlFor="search">Enter your query...</label>
                        </div>
                    </div>

                    <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">
                        <i className="material-icons">more_vert</i>
                    </button>

                    <ul className="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" htmlFor="hdrbtn">
                        <li className="mdl-menu__item">Acerca de</li>
                        <li className="mdl-menu__item">Contacto</li>
                        <li className="mdl-menu__item vertical-center"><Link to="/" className="mdl-navigation__link"><span className="material-icons">undo</span>Salir</Link></li>
                    </ul>
                </div>
            </header>
            <div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
                <header className="demo-drawer-header">
                    <img src={User} className="demo-avatar" alt='avatar'/>
                    <div className="demo-avatar-dropdown">
                        <span>hello@example.com</span>
                        <div className="mdl-layout-spacer"></div>
                        <button id="accbtn" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
                            <i className="material-icons" role="presentation">arrow_drop_down</i>
                            <span className="visuallyhidden">Accounts</span>
                        </button>
                        <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" htmlFor="accbtn">
                            <li className="mdl-menu__item">hello@example.com</li>
                            <li className="mdl-menu__item">info@example.com</li>
                            <li className="mdl-menu__item"><i className="material-icons">add</i>Add another account...</li>
                        </ul>
                    </div>
                </header>

                <nav className="demo-navigation mdl-navigation mdl-color--white">
                    <a href=";" className="mdl-navigation__link" onClick={()=>configMenu(1)}><i className="mdl-color-text--blue-grey-800 material-icons" role="presentation">home</i>Categorías</a>
                    <a href=";" className="mdl-navigation__link" onClick={()=>configMenu(2)}><i className="mdl-color-text--blue-grey-800 material-icons" role="presentation">inbox</i>Juegos</a>
                    <a href=";" className="mdl-navigation__link" onClick={()=>configMenu(3)}><i className="mdl-color-text--blue-grey-800 material-icons" role="presentation">face</i>Perfil</a>
                    <a href=";" className="mdl-navigation__link" onClick={()=>configMenu(4)}><i className="mdl-color-text--blue-grey-800 material-icons" role="presentation">shopping_cart</i>Purchases</a>
                    <a href=";" className="mdl-navigation__link" onClick={()=>configMenu(5)}><i className="mdl-color-text--blue-grey-800 material-icons" role="presentation">people</i>Social</a>
                    <div className="mdl-layout-spacer"></div>
                    <a className="mdl-navigation__link" href=";"><i className="mdl-color-text--blue-grey-800 material-icons" role="presentation">help_outline</i><span className="visuallyhidden">Help</span></a>
                </nav>
            </div>
        </>
    );
}

export default NavBarPanel;