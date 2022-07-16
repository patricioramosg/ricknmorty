import CardCharacters from './CardCharacters';
import { useState, useEffect } from 'react';
import CardLocations from './CardLocations';

const API_URL = 'https://rickandmortyapi.com/api'

const Locations = () => {

    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch(API_URL + '/location')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, [])

    return (
    <div>
        {characters.map((character,i) => {
        return <CardLocations
        name={character.name}
        type={character.type}
        dimension={character.dimension}
        key={i}
        id={character.id}
        tipo='/lugares/'
        />})}
    </div>
    )
}

export default Locations;