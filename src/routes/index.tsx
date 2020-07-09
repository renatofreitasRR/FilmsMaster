import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Movies from '../pages/Movies';


const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movies" component={Movies} />
        </Switch>
    </BrowserRouter>
);

export default Routes;