import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Favorites from '../pages/Favorites';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movies" component={Movies} />
            <Route path="/favorites" component={Favorites} />
        </Switch>
    </BrowserRouter>
);

export default Routes;