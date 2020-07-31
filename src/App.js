import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './MovieList';
import MovieSingle from './MovieSingle';
import Axios from 'axios';

import './App.scss';
import Upcoming from './Upcoming';

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [upcoming, setUpcoming] = useState(true);
    //const [pageNumber, setPageNumber] = useState('1');

    const handleMovieSearch = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const moviesList = await Axios.get(
                // `http://www.omdbapi.com/?apikey=d13102&s=${title}&plot=full&page=${pageNumber}`
                //`https://api.themoviedb.org/3/movie/550?api_key=d40510d8e4acc0141800854b7dabae60`
                `https://api.themoviedb.org/3/search/movie?api_key=d40510d8e4acc0141800854b7dabae60&language=fr-FR&query=${title}&page=1`
            );
            //console.log(moviesList.data.results);
            //console.log(moviesList.data.Search);
            setUpcoming(false);
            setMovies(moviesList.data.results);
            setIsLoading(false);
        } catch (e) {
            console.log('Erreur lors de la récupération des films');
        }
    };

    return (
        <Router>
            <div className='App'>
                <h1>MovieSearch</h1>
                <Switch>
                    <Route path='/' exact>
                        <form onSubmit={handleMovieSearch}>
                            <label htmlFor='movie-title'>
                                <small>Trouver un film</small>
                            </label>
                            <input
                                onChange={(e) => setTitle(e.target.value)}
                                autoFocus
                                name='title'
                                id='post-title'
                                className='form-control form-control-lg form-control-title'
                                type='text'
                                placeholder=''
                                autoComplete='on'
                            />
                            <button>Rechercher</button>
                        </form>

                        <MovieList list={movies} />
                        <Upcoming list={movies} />
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
