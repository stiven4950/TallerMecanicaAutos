import React from 'react';

import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

import Index from "./core/views/Index";
import NotFoundPage from "./core/views/404";
import Quienes from './services/views/Quienes';
import Servicios from './services/views/Servicios';
import Cotizar from './services/views/Cotizar';
import Panel from './admin/views/Panel';
import Profile from './userdata/views/Profile';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/404" component={NotFoundPage} />
                <Route exact path="/quienes" component={Quienes} />
                <Route exact path="/servicio/cotizar" component={Cotizar} />
                <Route exact path="/admin" component={Panel} />
                <Route exact path="/servicio/:slug" component={Servicios} />
                
                <Route exact path="/profile" component={Profile} />

                <Redirect to="/404" />
            </Switch>
        </Router>
    );
}

export default Routes;

