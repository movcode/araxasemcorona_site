import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import RouteProtected from './protectedRoute';
import * as Components from './components';
import Wrap from '../components/wrap/wrap';
import PATH_ADMIN from './path_admin';

export default (props) => (
    <BrowserRouter>    
        <Switch>
            
            <Route exact path="/" children={<Wrap page="home" />} />
            <Route path="/sobre" children={<Wrap page="about" />} />
            <Route path="/contato" children={<Wrap page="contact" />} />
            <Route path="/estabelecimentos" children={<Wrap page="establishment" />} />
            <Route path="/registro" children={<Wrap page="registry" />} />

            {/* Admin */}
            <Route path={PATH_ADMIN + "login"} component={Components.Login} />
            <RouteProtected path={PATH_ADMIN + "dash"} component={Components.Dashboard} />
            <RouteProtected path={PATH_ADMIN + "setor"} component={Components.Sector} />
            <RouteProtected path={PATH_ADMIN + "categoria"} component={Components.Categorie} />
            <RouteProtected path={PATH_ADMIN + "estabelecimento"} component={Components.Establishment} />
            <RouteProtected path={PATH_ADMIN + "entregador"} component={Components.Delivery} />
            <RouteProtected path={PATH_ADMIN + "config"} component={Components.Config} />
            <RouteProtected path={PATH_ADMIN + "usuario"} component={Components.User} />

            <Route component={Components.Error} />
        </Switch>
    </BrowserRouter>
)