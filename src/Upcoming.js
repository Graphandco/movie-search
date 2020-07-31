import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import MovieCard from './MovieCard';

const Upcoming = () => {
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        const handleUpcoming = async () => {
            try {
                const moviesList = await Axios.get(
                    `https://api.themoviedb.org/3/movie/upcoming?api_key=d40510d8e4acc0141800854b7dabae60&language=fr-FR&page=1`
                );
                setUpcomingMovies(moviesList.data.results);
            } catch (e) {
                console.log('Erreur lors de la récupération des films');
            }
        };
        handleUpcoming();
    }, []);

    return (
        <>
            <h2>A venir</h2>
            <div className='upcoming'>
                {upcomingMovies.map((movie, index) => (
                    <MovieCard movie={movie} />
                ))}
            </div>
        </>
    );
};

export default Upcoming;
