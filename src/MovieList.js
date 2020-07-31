import React from 'react';
import MovieCard from './MovieCard';

const MovieList = (props) => {
    return (
        <div className='movies-wrapper'>
            <div className='movie-list'>
                {props.list.map((movie) => (
                    <MovieCard movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
