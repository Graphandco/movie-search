import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import noImg from './assets/movie-default.png';

const Upcoming = () => {
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    const handleUpcoming = async () => {
        try {
            const moviesList = await Axios.get(
                // `http://www.omdbapi.com/?apikey=d13102&s=${title}&plot=full&page=${pageNumber}`
                //`https://api.themoviedb.org/3/movie/550?api_key=d40510d8e4acc0141800854b7dabae60`
                `https://api.themoviedb.org/3/movie/upcoming?api_key=d40510d8e4acc0141800854b7dabae60&language=fr-FR&page=1`
            );
            //console.log(moviesList.data.results);
            //console.log(moviesList.data.Search);
            setUpcomingMovies(moviesList.data.results);
        } catch (e) {
            console.log('Erreur lors de la récupération des films');
        }
    };
    handleUpcoming();

    return (
        <>
            <div className='upcoming'>
                <h2>A venir</h2>
                {upcomingMovies.map((movie, index) => (
                    <Link to={`/movie/${movie.id}`} key={movie.id}>
                        <div className='movie-card'>
                            {console.log(movie)}
                            {movie.poster_path === null ? (
                                <img src={noImg} alt={movie.title} />
                            ) : (
                                <img
                                    src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                                    alt={movie.title}
                                />
                            )}
                            <div className='movie-title'>{movie.title}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Upcoming;
