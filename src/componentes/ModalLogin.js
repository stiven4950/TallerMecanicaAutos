import React, { Component } from 'react'
//import { Redirect, Link } from 'react-router-dom'
import '../css/estilos.css'


class ModalLogin extends Component 
{
    render()
    {
        return (
            
            <div id="my-modal" className="modal">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="container">
                    <div className="row">
                      <div className="col-10">
                        <h5 className="title">INICIA SESIÓN</h5>
                      </div>
                      <div className="col-2">
                        <span className="close">&times;</span>
                      </div>
                    </div>
                  </div>
                </div>
                  <div className="modal-body">
                      
                        <form action="inicioSesion.php" className="newsletterForm" method="post">
                            <div className="input-contenedor">
                                <div className="row">
                                    <div className="col-2">
                                        <i className="fas fa-envelope icon"></i>
                                    </div>
                                    <div className="col">
                                        <input type="email" name="emailUsuario" id="subscribesForm2" placeholder="Correo electrónico" autocomplete="off" required/>
                                    </div>
                                </div>
                            </div>

                            <div className="input-contenedor">
                                <div className="row">
                                    <div className="col-2">
                                        <i className="fas fa-key icon"></i>
                                    </div>
                                    <div className="col">
                                        <input type="password" name="contraseniaUsuario" placeholder="Contraseña" required/>
                                    </div>
                                </div>
                            </div>
                            <p>¿No tienes una cuenta?<a className="link1" data-toggle="modal"> Regístrate</a></p>
                            <input type="submit" value="Iniciar" className="guardarBtn"/>
                        </form>
                      </div>
                <div className="modal-footer">
                </div>
            </div>
          </div>

        )
    }
}
         
export default ModalLogin