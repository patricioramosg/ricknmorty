import { useState, useEffect } from 'react';
import CardCharacters from './CardCharacters';

const API_URL = 'https://rickandmortyapi.com/api'

const CardsCharacters = () => {

    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch(API_URL + '/character')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, [])

    return (
    <div className='d-flex flex-column align-items-center'>
        {characters.map((character,i) => {
        return <CardCharacters
        src={character.image}
        name={character.name}
        species={character.species}
        gender={character.gender}
        origin={character.origin.name}
        key={i}
        id={character.id}
        tipo='/personajes/'
        />})}
    </div>
    )
}

export default CardsCharacters;