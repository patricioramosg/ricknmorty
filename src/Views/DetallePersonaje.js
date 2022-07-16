import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";


const API = 'https://rickandmortyapi.com/api/character/';

const DetallePersonaje = () => {
    const params = useParams();
    const [character, setCharacter] = useState();

    useEffect(() => {
        fetch(API + params.id)
            .then(res => res.json())
            .then(data => setCharacter(data))
    }, []);

    return (
        <>
            <Navbar />
            {character ?
                (<div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={character.image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
                                <h5 className="card-title">Species: {character.species}</h5>
                                <h5 className="card-title">Gender: {character.gender}</h5>
                                <h5 className="card-title">Origin: {character.origin.name}</h5>
                                <p className="card-text"><small className="text-muted">
                                    Episodes:{character.episode.map((episodio,key) => <li>{episodio}</li>)}
                                    </small></p>
                            </div>
                        </div>
                    </div>
                </div>) : 'loading'
            }
        </>
    )
    
}

export default DetallePersonaje;
