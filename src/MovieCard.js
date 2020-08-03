import React from 'react';
import { Link } from 'react-router-dom';
import noImg from './assets/movie-default.png';

import MovieRate from './MovieRate';

const MovieCard = ({ movie }) => {
    return (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className='movie-card'>
                {/* {console.log(movie)} */}
                {movie.poster_path === null ? (
                    <img src={noImg} alt={movie.title} />
                ) : (
                    <img
                        src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                        alt={movie.title}
                    />
                )}
                <div className='movie-desc'>
                    <MovieRate movie={movie} />
                    <span className='title'>
                        {movie.title.substring(0, 25)}
                        {movie.title.length > 25 && ' ...'}
                    </span>
                    {/* <span className='date-sortie'>
                        {movie.release_date.substring(0, 4)}
                    </span> */}
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;
