import React from 'react';

import { BrowserRouter as Router, 
    Redirect, 
    Route, 
    Switch} from 'react-router-dom';

    import Index from "./core/views/Index";
    import NotFoundPage from "./core/views/404";
    import Quienes from './services/views/Quienes';
    import Servicios from './services/views/Servicios';
    import MecanicaBasica from './services/views/MecanicaBasica';
    import MecanicaEspecializada from './services/views/MecanicaEspecializada';
    import RevisionesAutomotriz from './services/views/RevisionesAutomotriz';
    import EsteticaAutomotriz from './services/views/EsteticaAutomotriz';
    import Lavado from './services/views/Lavado';

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

