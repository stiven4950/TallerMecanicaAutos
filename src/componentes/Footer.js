import React, { Component } from 'react'
import '../css/estilos.css'
import { Link } from 'react-router-dom'

class Footer extends Component {
    render()
    {
        return (
        
              <footer className="page-footer font-small unique-color-dark">


                  <div style={{background:'#6c58e0'}}>
                      <div className="container">
                          <div className="row py-4 d-flex align-items-center">
                              <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                                  <h6 className="mb-0">Conéctate en nuestras redes sociales</h6>
                              </div>
                          
                              <div className="col-md-6 col-lg-7 text-center text-md-right">
                                  <a className="fb-ic">
                                      <i className="fab fa-facebook-f white-text mr-4"> </i>
                                  </a>
                                  <a className="tw-ic">
                                      <i className="fab fa-twitter white-text mr-4"> </i>
                                  </a>
                                  <a className="ins-ic">
                                      <i className="fab fa-instagram white-text"> </i>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>


                <div className="container text-center text-md-left mt-5 footer-link">

                  <div className="row mt-3">

                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                      <h5 className="text-uppercase font-weight-bold">REPCAR INC.</h5>
                      <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                      <p>Te ofrecemos todas las soluciones a los problemas mecánicos de tu vehículo con nuestros especialistas y
                        construimos un perfil para el mismo contando con garantías en los trabajos prestados, todo en un solo lugar.
                      </p>

                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                      <h5 className="text-uppercase font-weight-bold">¿QUÉ BUSCAS?</h5>
                      <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
                      <p>
                        <Link to="/servicios/mecanicaEspecializada" target="_blank">Reparacion</Link>
                      </p>
                      <p>
                        <Link to="/servicios/lavado/" target="_blank">Lavado</Link>
                      </p>
                      <p>
                        <Link to="/servicios/revisionesAutomotriz" target="_blank">Revisión</Link>
                      </p>
                      <p>
                        <Link to="/servicios/esteticaAutomotriz" target="_blank">Estética</Link>
                      </p>

                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                      <h5 className="text-uppercase font-weight-bold">Contáctenos</h5>
                      <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
                      <p>
                        <i className="fas fa-home mr-4"></i>Calle 23 #9-36 N. Colombia</p>
                      <p>
                        <i className="fas fa-envelope mr-4"></i> Repcar@gmail.com</p>
                      <p>
                        <i className="fas fa-print mr-4"></i> +(57) 3108773870</p>

                    </div>

                  </div>

                </div>

                <div className="footer-copyright text-center py-3">© 2019 Copyright: REPCAR INC.
                </div>

              </footer>

        )
    }
}
         
export default Footer