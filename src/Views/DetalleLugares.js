import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";


const API = 'https://rickandmortyapi.com/api/location/';

const DetalleLugares = () => {
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
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
                                <h5 className="card-title">Tipo: {character.type}</h5>
                                <h5 className="card-title">Dimension: {character.dimension}</h5>
                            </div>
                        </div>
                    </div>
                </div>) : 'loading'
            }
        </>
    )
    
}

export default DetalleLugares;