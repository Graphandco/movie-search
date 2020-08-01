import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import MovieCard from './MovieCard';

const Upcoming = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const handleUpcoming = async () => {
            try {
                const upComingMoviesList = await Axios.get(
                    `https://api.themoviedb.org/3/movie/upcoming?api_key=d40510d8e4acc0141800854b7dabae60&language=fr-FR&page=1`
                );
                setMovies(upComingMoviesList.data.results);
            } catch (e) {
                console.log('Erreur lors de la récupération des films');
            }
        };
        handleUpcoming();
    }, []);

    return (
        <>
            <h2>A venir</h2>
            <div className='upcoming movie-list'>
                {movies.map((movie, index) => (
                    <MovieCard movie={movie} key={index} />
                ))}
            </div>
        </>
    );
};

export default Upcoming;
