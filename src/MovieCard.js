import React from 'react';

// Composant réutilisable pour afficher les détails d'un film
const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={movie.posterURL} alt=""/>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <p>Rating: {movie.note}</p>
            </div>
        </div>
    );
};

export default MovieCard;

//MovieCard, qui est un composant fonctionnel de React.
//Il prend une propriété movie en paramètre, qui devrait être un objet représentant les détails d'un film (titre, description, URL de l'affiche, note).
//Le composant rend une carte de film avec une image, le titre, la description et la note du film.
