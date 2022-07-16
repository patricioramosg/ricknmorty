import imgcharacters from '../images/characters.png';
import imglocations from '../images/locations.jpeg';
import imgepisodes from '../images/episodes.webp';
import { Link } from "react-router-dom";


const Landing = () => {
    return (


        <div className='d-flex flex-column flex-xl-row align-items-center superfont' id='landing'>
            <Link to='/personajes'>
                <div className="card bg-dark text-white m-3">
                    <img src={imgcharacters} className="card-img" alt="..." />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Personajes</h5>
                    </div>
                </div>
            </Link>
            <Link to='/lugares'>
                <div className="card bg-dark text-white m-3">
                    <img src={imglocations} className="card-img" alt="..." />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Lugares</h5>
                    </div>
                </div>
            </Link>
            <Link to='/episodios'>
                <div className="card bg-dark text-white m-3">
                    <img src={imgepisodes} className="card-img" alt="..." />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Episodios</h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Landing;