import React from 'react';
import { Link } from 'react-router-dom';
import noImg from './assets/movie-default.png';

import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';

const MovieCard = ({ movie }) => {
    const rateToStars = (note) => {
        if (note == 0) {
            return (
                <>
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                </>
            );
        }
        if (note >= 0 && note < 1) {
            return (
                <>
                    <BsStarHalf />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                </>
            );
        }
        if (note >= 1 && note < 2) {
            return (
                <>
                    <BsStarFill />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                </>
            );
        }
        if (note >= 2 && note < 3) {
            return (
                <>
                    <BsStarFill />
                    <BsStarHalf />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                </>
            );
        }
        if (note >= 3 && note < 4) {
            return (
                <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                </>
            );
        }
        if (note >= 4 && note < 5) {
            return (
                <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                    <BsStar />
                    <BsStar />
                </>
            );
        }
        if (note >= 5 && note < 6) {
            return (
                <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                    <BsStar />
                </>
            );
        }
        if (note >= 6 && note < 7) {
            return (
                <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                    <BsStar />
                </>
            );
        }
        if (note >= 7 && note < 8) {
            return (
                <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                </>
            );
        }
        if (note >= 8 && note < 9) {
            return (
                <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                </>
            );
        }
        if (note >= 9 && note <= 10) {
            return (
                <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                </>
            );
        }
    };

    return (
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
                <div className='movie-desc'>
                    {movie.vote_count > 0 && (
                        <div className='note'>
                            <span className='stars'>
                                {rateToStars(movie.vote_average)}
                            </span>
                            <span className='count'>({movie.vote_count})</span>
                        </div>
                    )}
                    <span className='title'>{movie.title}</span>
                    <span className='date-sortie'>
                        {movie.release_date.substring(0, 4)}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;
