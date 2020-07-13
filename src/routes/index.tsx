import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Favorites from '../pages/Favorites';
import About from '../pages/About';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movies" component={Movies} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/about/:id" component={About} />
        </Switch>
    </BrowserRouter>
);

export default Routes;