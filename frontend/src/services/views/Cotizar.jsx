import React, { Component } from 'react';

import Header from '../../core/components/Header';
import Footer from '../../core/components/Footer.js';

import '../../core/static/css/global_theme.css';
import '../../core/static/css/estilos.css';
import '../../core/static/css/accordion.css';
import Accordion from '../components/Accordion';
import { getLists } from '../../core/apiCore';
import { getLists as getCarsModel } from '../apiCore';

class Cotizar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error:[],
            brands:[],
            selectedBrand:[],
            carModel:[],
            selectedCarModel:[],
            years:[],
            selectedYear:[],
        };

        this.loadBrands = this.loadBrands.bind(this);
        this.setBrandSelected = this.setBrandSelected.bind(this);

        this.loadCarModels = this.loadCarModels.bind(this);
        this.setCarModelSelected = this.setCarModelSelected.bind(this);

        
        this.setYearSelected = this.setYearSelected.bind(this);
    }

    setBrandSelected = (brand) => {
        this.setState({
            selectedBrand:brand,
        });

        this.loadCarModels(brand._id);
    }

    setCarModelSelected = (idCarModel) => {
        this.setState({
            selectedCarModel:idCarModel,
        });
        let data = []
        for(let i=2000; i<=2020; i++ ){
            data.push(i);
        }

        this.setState({
            years:data,
        });
    }

    setYearSelected = (year) => {
        this.setState({
            selectedYear:year,
        });
    }
    
    loadBrands = async () => {
        await getLists('brand').then(data => {
          if (data.error) {
            this.setState({
                error:data.error,
            });
          } else {
            this.setState({
                brands:data,
            });
          }
        });
      }

      loadCarModels = async (idBrand) => {
        await getCarsModel('carmodel', idBrand).then(data => {
          if (data.error) {
            this.setState({
                error:data.error,
            });
          } else {
            this.setState({
                carModel:data,
            });
          }
        });
      }

    componentDidMount() {
        this.loadBrands();
    }

    render() {
        return (
            <>
                <Header/>
                <Accordion
                    brands={this.state.brands}
                    setBrand={this.setBrandSelected}
                    selectedBrand={this.state.selectedBrand}
                    carModels={this.state.carModel}
                    setCarModel={this.setCarModelSelected}
                    selectedCarModel={this.state.selectedCarModel}
                    years={this.state.years}
                    selectedYear={this.state.selectedYear}
                    setYearSelected={this.setYearSelected}
                />
                <Footer/>
            </>
        );
    }
}

export default Cotizar;