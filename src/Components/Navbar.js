import { Context } from "../Store/appcontext";
import { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from '../images/logo.png';


const Navbar = () => {

    const { store, actions } = useContext(Context);

    // useEffect(()=> )
    console.log(store.favoritos)
    return (
        <nav className="navbar navbar-expand-lg bg-dark sticky-top superfont">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'><img src={logo} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to='/personajes'>Personajes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/lugares'>Lugares</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/episodios'>Episodios</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Favoritos
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                {store.favoritos.map((favorito, key) => <li className="d-flex flex-row my-1">
                                    <Link to={favorito.tipo + favorito.id } class="dropdown-item" key={key}>{favorito.name}</Link>
                                    <button className="btn" onClick={()=>actions.removeFavorito(favorito.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" >
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                </svg></button></li>)}
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="buscar" aria-label="Search" />
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;