import React from 'react';
import { Link } from 'react-router-dom';
import noImg from './assets/movie-default.png';

const MovieList = (props) => {
    return (
        <div className='movies-wrapper'>
            <div className='movie-list'>
                {props.list.map((movie) => (
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
        </div>
    );
};

export default MovieList;
