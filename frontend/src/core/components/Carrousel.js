// Predefined Packages
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Custom packges
import { API } from '../../config';

class Carrousel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            screenSize: window.screen.width
        }
    }

    render() {

        const properties = this.props;

        return (
            <div className="bd-example">
                <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        {properties.carrousel.map((item, i) => (
                            <li data-target="#carouselExampleCaptions" key={item._id} data-slide-to={i} className={i === 0 ? 'active' : ''}></li>
                        ))}
                    </ol>
                    <div className="carousel-inner">

                        {properties.carrousel.map((item, i) => (
                            <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={item._id}>
                                <Link to={`/${item.link}`}>
                                    <img src={this.state.screenSize < 900
                                        ?
                                        `${API}/carrousel/photoMobile/${item._id}`
                                        :
                                        `${API}/carrousel/photoDesktop/${item._id}`} className="d-block w-100" alt={item.name}
                                    />
                                </Link>
                            </div>
                        ))}

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