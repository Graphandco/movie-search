import React from 'react';

const Casting = (props) => {
    let directors = [];
    props.realisation.forEach(function (entry) {
        if (entry.job === 'Director') {
            directors.push(entry.name);
        }
    });
    return (
        <div className='movie-casting'>
            Réalisation :
            {directors.map((director) => (
                <div className='realisator' key={director}>
                    {director}
                </div>
            ))}
            {props.acteurs.map((acteur) => (
                <div className='actor' key={acteur.cast_id}>
                    {acteur.character} - {acteur.name}
                    {acteur.profile_path === null ? (
                        <div></div>
                    ) : (
                        <img
                            src={`https://image.tmdb.org/t/p/original/${acteur.profile_path}`}
                            alt={acteur.name}
                        />
                    )}
                    {/* <img
                        src={`https://image.tmdb.org/t/p/original/${acteur.profile_path}`}
                        alt=''
                    /> */}
                </div>
            ))}
        </div>
    );
};

export default Casting;
