

/* Preprocesado */
// Inclusión de bibliotecas básicas
import React, { useState } from "react";
import AlertManager from "../common/alerts/AlertManager";

// Inclusión de bibliotecas de componentes propios
import Navbar from "../common/navbar/Navbar";
import MatchesBoard from "./MatchesBoard";
import MatchesOptionButtons from "./MatchesOptionButtons";

/* Componente Principal */
function MatchesPage({users, setUsers, matches, setMatches, setSearchValue}){

    // Inicialización de estados
    const [show, setShow] = useState(false);
    const [alertType, setAlertType] = useState("");
    const [alertMessage, setAlertMessage] = useState("");

    // Return del código HTML
    return(
        <>
            {/* Navbar */}
            <Navbar activeLinkName="Matches" setSearchValue={setSearchValue} />

            <br />
            <br />
            {/* Alertas */}
            <div className="container mt-5">
                <AlertManager show={show} setShow={setShow} alertType={alertType} alertMessage={alertMessage} />
            </div>

            {/* Botones de Opciones */}
            <div className="container mt-5">
                <div className="container d-flex justify-content-center">
                    <h1>Opciones</h1>
                </div>
                <MatchesOptionButtons 
                    users={users} 
                    setUsers={setUsers} 
                    matches={matches} 
                    setMatches={setMatches} 
                    setShow={setShow} 
                    setAlertType={setAlertType} 
                    setAlertMessage={setAlertMessage} 
                />
            </div>

            {/* Tabla de Partidos */}
            <div className="container mt-5">
                <div className="container d-flex justify-content-center">
                    <h1>Tabla de Partidos</h1>
                </div>
                <MatchesBoard matches={matches} setMatches={setMatches} />
            </div>
        </>
    );

}

export default MatchesPage;