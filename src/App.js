import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieSearch from './MovieSearch';
import MovieSingle from './MovieSingle';
import Header from './Header';

import './App.scss';
import Upcoming from './Upcoming';

function App() {
    return (
        <Router>
            <div className='App'>
                <Header />
                <Switch>
                    <Route path='/' exact>
                        <MovieSearch />
                        <div className='movies-wrapper'>
                            <Upcoming />
                        </div>
                    </Route>
                    <Route path='/movie/:id' exact>
                        <MovieSingle />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
