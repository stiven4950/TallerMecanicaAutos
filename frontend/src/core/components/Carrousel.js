import React, { Component } from 'react';
//import { Redirect, Link } from 'react-router-dom'
import C1 from '../static/img/img1Carrusel.jpg';
import C2 from '../static/img/img2Carrusel.jpg';
import C3 from '../static/img/img3Carrusel.jpg';

import C1M from '../static/img/img1CarruselM.jpg';
import C2M from '../static/img/img2CarruselM.jpg';
import C3M from '../static/img/img3CarruselM.jpg';
import '../static/css/estilos.css';

class Carrousel extends Component{

    constructor(props){
        super(props);

        this.state = {
            screenSize : window.screen.width
        }
    }

    render(){
        
        return (
            <div className="bd-example">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <img src={this.state.screenSize<800? C1M : C1} className="d-block w-100" alt="..."/>
                        </div>

                        <div className="carousel-item">
                            <img src={this.state.screenSize<800? C2M : C2} className="d-block w-100" alt="..."/>
                        </div>

                        <div className="carousel-item">
                            <img src={this.state.screenSize<800? C3M : C3} className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}
         
export default Carrousel;