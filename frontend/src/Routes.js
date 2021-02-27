import React from 'react';

import { BrowserRouter as Router, 
    Redirect, 
    Route, 
    Switch} from 'react-router-dom';
//import Home from './core/Home'

    import Index from "./vistas/Index";
    import NotFoundPage from "./vistas/404";
    import Quienes from './vistas/Quienes';
    import Servicios from './vistas/Servicios';
    import MecanicaBasica from './vistas/MecanicaBasica';
    import MecanicaEspecializada from './vistas/MecanicaEspecializada';
    import RevisionesAutomotriz from './vistas/RevisionesAutomotriz';
    import EsteticaAutomotriz from './vistas/EsteticaAutomotriz';
    import Lavado from './vistas/Lavado';

    const Routes = ()=>{
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route exact path="/404" component={NotFoundPage} />
                    <Route exact path="/quienes" component={Quienes} />
                    <Route exact path="/servicios" component={Servicios}/>
                    <Route exact path="/servicios/mecanicaBasica" component={MecanicaBasica} />
                    <Route exact path="/servicios/mecanicaEspecializada" component={MecanicaEspecializada} />
                    <Route exact path="/servicios/revisionesAutomotriz" component={RevisionesAutomotriz} />
                    <Route exact path="/servicios/esteticaAutomotriz" component={EsteticaAutomotriz} />
                    <Route exact path="/servicios/lavado" component={Lavado} /> 
                    <Redirect to="/404" />
                </Switch>
            </Router>
        );
    }

    export default Routes;

