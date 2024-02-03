import React, { useState } from 'react';
import MovieList from './MovieList';
import Filtre from './Filtre';
import './styles.css'; // Importez le fichier CSS


const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Scorpion',
      description: 'Une équipe de génies qui travaillent pour le gouvernement américain afin de résoudre des problèmes complexes, de prévenir des catastrophes et de lutter contre les menaces mondiales.  Scorpion, comprend des experts en informatique, en mécanique, en comportement humain et en statistiques qui utilisent leurs compétences pour résoudre des problèmes qui ne peuvent pas se résoudre.  .',
      posterURL: 'https://th.bing.com/th/id/OIP.C7Q86b2oprgmmW3RoF8FAgHaEK?w=312&h=180&c=7&r=0&o=5&pid=1.7',
      note: 8,
    },
    {
      title: 'Inception',
      description: 'Un film de science-fiction captivant. Ce film est acclamé pour sa complexité narrative, son style visuel distinctif et ses performances exceptionnell déroulant dans un monde où les personnes peuvent entrer dans les rêves des autres pour extraire ou implanter des idéeses."Inception" est salué pour sa réalisation innovante, ainsi que pour son scénario complexe et métaphysique.',
      posterURL: 'https://th.bing.com/th/id/OIP.YjVEbAQCqwAtLGG7cxnkIAHaEK?w=270&h=180&c=7&r=0&o=5&pid=1.7',
      note: 7,
    }, 
    {
      title: 'The Social Network',
      description: ' Le film se concentre sur la création et le développement de Facebook, la célèbre plateforme de médias sociaux. Le film met également en lumière les poursuites judiciaires qui ont suivi le succès offre un regard captivant sur les débuts controversés de Facebook et entrepreneuriales qui ont entouré sa création.Il a reçu des éloges de la part  son scénario intelligent et les performances des acteurs.',
      posterURL: 'https://th.bing.com/th/id/OIP.oiAvY4VHpahEZL56Pu39BwHaE7?w=244&h=180&c=7&r=0&o=5&pid=1.7',
      note: 6,
    },
    {
      title: 'Hackers',
      description: 'Hackers est un culte qui met en scène un groupe de jeunes hackers talentueux et leur immersion dans le monde de la cybercriminalité et de la sécurité informatique explore des thèmes tels que la liberté dexpression en ligne, le conflit entre les hackers et les entreprises informatiques, ainsi que la manière dont la technologie peut être utilisée pour le bien ou le mal.',
      posterURL: 'https://th.bing.com/th?q=The+Hackers&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=fr-FR&cc=FR&setlang=fr&adlt=moderate&t=1&mw=247',
      note: 9,
    },
    
    // ... ajoutez d'autres films ici
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]); // Mettre à jour la liste filtrée
  };

  const filterMovies = ({ titre, note }) => {
    const filtered = movies.filter((movie) => {
      const titreMatch = movie.title.toLowerCase().includes(titre.toLowerCase());
      const noteMatch = movie.note.toString().includes(note.toString());
      return titreMatch && noteMatch;
    });

    setFilteredMovies(filtered);
  };

  return (
    <div className="app">
      <Filtre onFilterChange={filterMovies} />
      <MovieList movies={filteredMovies} />
      {/* Ajouter un composant pour ajouter un nouveau film ici */}
    </div>
  );
};

export default App;


//'useState' est utilisé pour initialiser les états 'movies' et 'filteredMovies'.
//La fonction 'addMovie' utilise 'setMovies' pour mettre à jour l'état des films lorsqu'un nouveau film est ajouté.
//La fonction 'filterMovies' utilise 'setFilteredMovies' pour mettre à jour l'état des films filtrés en fonction du titre et de la note.
//Le composant' Filtre' est rendu pour permettre à l'utilisateur de filtrer les films.
//Le composant' MovieLis't est rendu pour afficher la liste de films filtrée.
//Cela crée une application React simple avec un état géré par le hook 'useState' et des fonctions pour modifier cet état en réponse aux actions de l'utilisateur.