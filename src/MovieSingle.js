import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Axios from 'axios';

import Casting from './Casting';

const MovieSingle = () => {
    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [genres, setGenres] = useState([]);
    const [duree, setDuree] = useState('');
    const [synopsis, setSynopsis] = useState('');
    const [casting, setCasting] = useState([]);
    const [crew, setCrew] = useState([]);

    const time_convert = (num) => {
        const hours = Math.floor(num / 60);
        const minutes = num % 60;
        return `${hours}h${minutes}`;
    };

    useEffect(() => {
        const handleMovieSingleSearch = async () => {
            try {
                const movieItem = await Axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=d40510d8e4acc0141800854b7dabae60&append_to_response=credits&language=fr-Fr`
                );
                //console.log(movieItem.data);
                setTitle(movieItem.data.title);
                setYear(movieItem.data.release_date);
                setDuree(time_convert(movieItem.data.runtime));
                setSynopsis(movieItem.data.overview);
                setGenres(movieItem.data.genres);
                setCasting(movieItem.data.credits.cast);
                setCrew(movieItem.data.credits.crew);
                //console.log(movieItem.data.credits.crew);

                //console.log(moviesList.data.Search);
            } catch (e) {}
        };
        handleMovieSingleSearch();
    }, [id]);

    const castShort = casting.slice(0, 10);

    return (
        <div className='movie-single'>
            <h2>{title}</h2>
            <p>Année : {year.substr(0, 4)}</p>
            <div className='movie-genre'>
                {genres.map((genre) => (
                    <span key={genre.id}>{genre.name} </span>
                ))}
            </div>
            <div className='movie-synopsis'>{synopsis}</div>
            <div className='movie-runtime'>{duree}</div>

            <Casting acteurs={castShort} realisation={crew} />
        </div>
    );
};

export default MovieSingle;
