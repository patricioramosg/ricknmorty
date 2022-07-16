import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

const Seasons = () => {
    return (
        <>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    Temporadas
                </button>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                    <li><Link className="dropdown-item" to='season/1'>Temporada 1</Link></li>
                    <li><Link className="dropdown-item" to='season/2'>Temporada 2</Link></li>
                    <li><Link className="dropdown-item" to='season/3'>Temporada 3</Link></li>
                    <li><Link className="dropdown-item" to='season/4'>Temporada 4</Link></li>
                    <li><Link className="dropdown-item" to='season/5'>Temporada 5</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Seasons;