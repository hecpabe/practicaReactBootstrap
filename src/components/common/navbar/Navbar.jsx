

/* Preprocesado */
// Inclusión de bibliotecas básicas
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'

// Declaración de constantes
const links = [
    {linkName: "Home", linkClasses: ""},
    {linkName: "Users", linkClasses: ""},
    {linkName: "Matches", linkClasses: ""},
    {linkName: "Scoreboard", linkClasses: ""}
];

/* Componente Principal */
function Navbar({activeLinkName, setSearchValue}){

    // Variables necesarias
    const searchInputRef = useRef();
    const navigate = useNavigate();

    // Establecemos los links activos / inactivos en base a donde estamos (Obtenemos el nombre del link que está activo en esa página y lo comparamos con
    // los nombres de de los links que tenemos como constante, y en caso de ser ese link le ponemos el atributo de active, sino no)
    links.map((link) => {
        return link.linkClasses = link.linkName === activeLinkName ? "nav-link active" : "nav-link";
    })

    /* Event Handlers */
    const searchEventHandler = () => {

        // Variables necesarias
        var searchInputValue;

        // Obtenemos el valor del input de search
        searchInputValue = searchInputRef.current.value;

        if(searchInputValue !== ""){

            setSearchValue(searchInputValue);
            navigate("/search");

        }

    }

    // Return HTML Code
    return(
        // Navbar
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark fixed-top">

            {/* Navbar Home Image */}
            <div className="container-fluid d-flex">
                <Link className='navbar-brand' to='/'>
                    <img src="chessLogo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Menu */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        {/* Página Home */}
                        <li className="nav-item">
                            <Link className={links[0].linkClasses} aria-current="page" to='/' >Home</Link>
                        </li>

                        {/* Página de Usuarios */}
                        <li className="nav-item">
                            <Link className={links[1].linkClasses} to='/users'>Usuarios</Link>
                        </li>

                        {/* Página de Partidos */}
                        <li className="nav-item">
                            <Link className={links[2].linkClasses} to='/matches'>Partidos</Link>
                        </li>

                        {/* Página de Resultados */}
                        <li className="nav-item">
                            <Link className={links[3].linkClasses} to='/scoreboard'>Puntuaciones</Link>
                        </li>
                    </ul>
                    
                    {/* Search */}
                    <div class="d-flex ms-auto" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscar Usuario" aria-label="Search" ref={searchInputRef} />
                        <button className="btn btn-outline-success" onClick={searchEventHandler} >Buscar</button>
                    </div>

                </div>
            </div>
        </nav>
    );

}

export default Navbar;