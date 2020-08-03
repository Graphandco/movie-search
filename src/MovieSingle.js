import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Axios from 'axios';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Allocine from './assets/allocine.png';

import Casting from './Casting';
import MovieRate from './MovieRate';

const MovieSingle = () => {
    const { id } = useParams();

    const [movie, setMovie] = useState('');
    const [poster, setPoster] = useState('');
    const [year, setYear] = useState('');
    const [genres, setGenres] = useState([]);
    const [duree, setDuree] = useState('');
    const [casting, setCasting] = useState([]);
    const [crew, setCrew] = useState([]);
    const [image, setImage] = useState([]);
    const imagePath = `https://image.tmdb.org/t/p/w1280${image}`;
    const [video, setVideo] = useState([]);

    //const [movieImages, setMovieImages] = useState([]);

    const time_convert = (num) => {
        const hours = Math.floor(num / 60);
        const minutes = num % 60;
        return `${hours}h${minutes < 10 ? '0' : ''}${minutes}`;
    };

    useEffect(() => {
        const handleMovieSingleSearch = async () => {
            try {
                const movieItem = await Axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=d40510d8e4acc0141800854b7dabae60&append_to_response=credits&language=fr-Fr`
                );
                //console.log(movieItem.data);
                setMovie(movieItem.data);
                setPoster(movieItem.data.poster_path);
                setYear(movieItem.data.release_date);
                setDuree(time_convert(movieItem.data.runtime));
                setGenres(movieItem.data.genres);
                setCasting(movieItem.data.credits.cast);
                setCrew(movieItem.data.credits.crew);
                //console.log(movieItem.data.credits.crew);

                //console.log(moviesList.data.Search);
            } catch (e) {}
        };
        handleMovieSingleSearch();
    }, [id]);

    useEffect(() => {
        const MovieBackdrop = async () => {
            try {
                const movieImage = await Axios.get(
                    `https://api.themoviedb.org/3/movie/${id}/images?api_key=d40510d8e4acc0141800854b7dabae60`
                );

                setImage(movieImage.data.backdrops[0].file_path);
            } catch (e) {}
        };
        MovieBackdrop();
    }, [id]);

    useEffect(() => {
        const MovieVideo = async () => {
            try {
                const movieVideo = await Axios.get(
                    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=d40510d8e4acc0141800854b7dabae60`
                );

                setVideo(movieVideo.data.results[0].key);
            } catch (e) {}
        };
        MovieVideo();
    }, [id]);

    const castShort = casting.slice(0, 10);

    let directors = [];
    crew.forEach(function (entry) {
        if (entry.job === 'Director') {
            directors.push(entry.name);
        }
    });

    return (
        <div className='movie-single'>
            <img src={imagePath} alt='Backdrop' className='backdrop' />
            <div className='overlay'></div>
            <div className='content'>
                <Link to={'/'} className='back'>
                    <IoMdArrowRoundBack /> Retour
                </Link>
                <div className='top-content'>
                    <div className='poster'>
                        <img
                            src={`http://image.tmdb.org/t/p/w185/${poster}`}
                            alt={movie.title}
                            className='poster'
                        />
                    </div>
                    <div className='details'>
                        <h2>{movie.title}</h2>
                        <MovieRate movie={movie} />
                        <div className='year'>
                            <span>Année : </span>
                            {year.substr(0, 4)}
                        </div>
                        <div className='movie-genre'>
                            <span>Genre{genres.length > 1 && 's'} :</span>
                            {genres.map((genre) => (
                                <span className='genres-list' key={genre.id}>
                                    {' '}
                                    {genre.name}{' '}
                                </span>
                            ))}
                        </div>
                        <div className='movie-runtime'>
                            <span>Durée : </span>
                            {duree}
                        </div>
                        <div className='movie-realisator'>
                            <span>Réalisation : </span>
                            {directors.map((director) => (
                                <span className='realisator' key={director}>
                                    {director}
                                </span>
                            ))}
                        </div>
                        <div className='movie-synopsis'>
                            <span>Pitch : </span>
                            {movie.overview}
                        </div>
                        <a
                            className='allocine'
                            href={`http://www.allocine.fr/recherche/?q=${movie.title}`}
                            target='blank'
                            title={`Rechercher ${movie.title} sur Allociné`}
                        >
                            <img src={Allocine} alt='allocine' />
                        </a>
                    </div>
                </div>

                <Casting acteurs={castShort} realisation={crew} />
                <div className='video'>
                    <ReactPlayer
                        controls
                        url={`https://www.youtube.com/watch?v=${video}`}
                    />
                </div>
            </div>
        </div>
    );
};

export default MovieSingle;
