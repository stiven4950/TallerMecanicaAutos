import React, {Component} from 'react';

class RegisterModal extends Component{
    

    render(){
    
        const properties = this.props;

        return(
            <div className="container-fluid">
                <div className="row vertical-center">
                    <div className="col-xs-12 col-md-10 col-lg-7 col-xl-5 mt-5 pt-5 mx-auto">

                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="container">
                                <div className="row">
                                    <div className="col-10">
                                    <h5 className="title">Regístrate</h5>
                                    </div>
                                    <div className="col-2">
                                    <button className="close" onClick = { ()=>properties.closeModal() } >&times;</button>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="modal-body">
                                
                                <form className="newsletterForm" onSubmit={this.handleSubmit}>
                                    <div className="input-contenedor">
                                        <div className="row">
                                            <div className="col-2">
                                                <i className="fas fa-envelope icon"></i>
                                            </div>
                                            <div className="col">
                                                <input type="email"
                                                name = "emailInput"
                                                value={this.state.emailController}
                                                onChange={this.handleChange}
                                                placeholder="Correo electrónico"
                                                required/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="input-contenedor">
                                        <div className="row">
                                            <div className="col-2">
                                                <i className="fas fa-key icon"></i>
                                            </div>
                                            <div className="col">
                                                <input type={ !this.state.see? "password" : "text" }
                                                onChange={this.handleChange}
                                                name="passwordInput"
                                                value={this.state.passwordController}
                                                placeholder="Contraseña"
                                                required/>
                                            </div>
                                            <div className="col-2 vertical-center">
                                                <i className="fas fa-eye d-block mx-auto"
                                                onClick={ this.handleSee.bind(this) }
                                                style={ this.state.see ? {color: 'var(--main-color)'} : {color: 'var(--color-0)'}}>
                                                </i>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <p>¿Ya tienes una cuenta?<Link to="" className="link1" data-toggle="modal"> Inicia Sesión</Link></p>
                                    <input type="submit" value="Iniciar" className="guardarBtn"/>
                                    
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
