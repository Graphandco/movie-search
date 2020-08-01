import React, { useState } from 'react';
import Axios from 'axios';
import MovieCard from './MovieCard';

const MovieList = (props) => {
    const [movies, setMovies] = useState([]);
    //const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState('');
    //const [upcoming, setUpcoming] = useState(true);
    //const [pageNumber, setPageNumber] = useState('1');

    const handleMovieSearch = async (e) => {
        e.preventDefault();
        try {
            //setIsLoading(true);
            const moviesList = await Axios.get(
                // `http://www.omdbapi.com/?apikey=d13102&s=${title}&plot=full&page=${pageNumber}`
                //`https://api.themoviedb.org/3/movie/550?api_key=d40510d8e4acc0141800854b7dabae60`
                `https://api.themoviedb.org/3/search/movie?api_key=d40510d8e4acc0141800854b7dabae60&language=fr-FR&query=${title}&page=1`
            );
            //console.log(moviesList.data.results);
            //console.log(moviesList.data.Search);
            //setUpcoming(false);
            setMovies(moviesList.data.results);
            //setIsLoading(false);
        } catch (e) {
            console.log('Erreur lors de la récupération des films');
        }
    };

    return (
        <div className='movies-search'>
            <div className='movie-form'>
                <form onSubmit={handleMovieSearch}>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        autoFocus
                        name='title'
                        id='post-title'
                        className='form-control form-control-lg form-control-title'
                        type='text'
                        placeholder='Trouver un film'
                        autoComplete='on'
                    />
                    <button>Rechercher</button>
                </form>
            </div>

            <div className='movie-list movie-search'>
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
