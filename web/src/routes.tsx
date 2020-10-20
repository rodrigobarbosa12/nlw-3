import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanages from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing} /> 
            <Route path="/app" exact component={OrphanagesMap} /> 
            <Route path="/orphanages/create" exact component={CreateOrphanage} /> 
            <Route path="/orphanages/:id" exact component={Orphanages} /> 
        </Switch>
    </BrowserRouter>
);

export default Routes;
