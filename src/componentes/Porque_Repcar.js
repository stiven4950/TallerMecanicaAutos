import React, { Component } from 'react'
//import { Redirect, Link } from 'react-router-dom'
import P1 from '../img/circulo.png'
import '../css/estilos.css'

class Porque_Repcar extends Component 
{
    

    render()
    {
       
        return (
            <section className="py-2 section-card">
            <div className="borde">
        
            
            <div className="container">
        
                <div className="row">
                  <div className="col-12">
                    <h3 className="h3-cards"> ¿POR QUÉ REPCAR?</h3>
                  </div>
                </div>
        
                <div className="row">
        
                  <div className="col-md-4">
                    <div className="card" style={{width: '18rem'}}>
                      <img src={P1} className="card-img-top img-card" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title text-center">Card title</h5>
                        <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-card">Saber más...</a>
                      </div>
                    </div>
                   </div>
        
                   <div className="col-md-4">
                    <div className="card" style={{width: '18rem'}}>
                      <img src={P1} className="card-img-top img-card" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title text-center">Card title</h5>
                        <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-card">Saber más...</a>
                      </div>
                    </div>
                   </div>
        
                   <div className="col-md-4">
                    <div className="card" style={{width: '18rem'}}>
                      <img src={P1} className="card-img-top img-card" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title text-center">Card title</h5>
                        <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-card">Saber más...</a>
                      </div>
                    </div>
                   </div>
        
              </div>
            </div>
          </div>
               
          </section>

        )
      
    }
}
         
export default Porque_Repcar