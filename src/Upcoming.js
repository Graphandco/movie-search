import React, { useState } from 'react';
import Axios from 'axios';

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
                    <div className='movie' key={index}>
                        {movie.title}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Upcoming;
