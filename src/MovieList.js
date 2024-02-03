import React from 'react';
import MovieCard from './MovieCard';

// Composant qui affiche une liste de films en utilisant MovieCard pour chaque film
const MovieList = ({ movies }) => {
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard key={movie.title} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;


//MovieList, qui est également un composant fonctionnel de React. 
//Il prend une propriété movies, qui devrait être un tableau d'objets représentant des films. 
//Le composant rend une liste de films en utilisant la fonction map pour itérer sur le tableau de films 
//et créer un composant MovieCard pour chaque film//