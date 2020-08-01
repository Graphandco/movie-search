import React from 'react';
import { GoPerson } from 'react-icons/go';

const Casting = (props) => {
    return (
        <div className='movie-casting'>
            {props.acteurs.map((acteur) => (
                <div className='actor' key={acteur.cast_id}>
                    {acteur.profile_path === null ? (
                        <GoPerson />
                    ) : (
                        <img
                            src={`https://image.tmdb.org/t/p/original/${acteur.profile_path}`}
                            alt={acteur.name}
                        />
                    )}
                    <div className='actor-name'>{acteur.name}</div>
                    <div className='actor-perso'>{acteur.character}</div>
                </div>
            ))}
        </div>
    );
};

export default Casting;
