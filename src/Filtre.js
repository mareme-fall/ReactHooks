import React, { useState } from 'react';

// Composant qui permet à l'utilisateur de filtrer les films par titre et note
const Filtre = ({ onFilterChange }) => {
    const [titreFilter, setTitreFilter] = useState('');
    const [noteFilter, setNoteFilter] = useState('');

      // Gère le changement dans les filtres et déclenche la fonction de filtrage
    const handleFilterChange = () => {
        onFilterChange({ titre: titreFilter, note: noteFilter });
    };

    return (
        <div className="filter">
            <input
                type="text"
                placeholder="Par titre"
                value={titreFilter}
                onChange={(e) => setTitreFilter(e.target.value)}
            />
            <input
                type="text"
                placeholder="Par note"
                value={noteFilter}
                onChange={(e) => setNoteFilter(e.target.value)}
            />
            <button onClick={handleFilterChange}>Filtrer</button>
        </div>
    );
};

export default Filtre;

//'Filtre', un composant fonctionnel de React.
//Il utilise le hook 'useState' pour gérer l'état des champs de filtrage ('titreFilter 'et 'noteFilter').
//Le composant rend un formulaire de filtrage avec deux champs de saisie (pour le titre et la note) et un bouton pour déclencher le filtrage.
//Lorsque l'utilisateur modifie les champs de saisie, les valeurs sont mises à jour dans l'état local du composant.
//Lorsque le bouton est cliqué, la fonction 'handleFilterChange 'est appelée, qui déclenche la fonction de filtrage ('onFilterChange') avec les valeurs actuelles des filtres.