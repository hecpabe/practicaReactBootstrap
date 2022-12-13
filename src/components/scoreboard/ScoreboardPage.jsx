

/* Preprocesado */
// Inclusión de bibliotecas básicas
import React from "react";

// Inclusión de bibliotecas de componentes propios
import Navbar from "../common/navbar/Navbar";

// Inclusión de bibliotecas de componentes propios
import Scoreboard from "./Scoreboard";

/* Componente Principal */
function ScoreboardPage({users, setSearchValue}){

    // Return del código HTML
    return(
        <>

            {/* Navbar */}
            <Navbar activeLinkName="Scoreboard" setSearchValue={setSearchValue} />

            <br />
            <br />
            <div className="container mt-5">
                <div className="container d-flex justify-content-center">
                    <h1>Tabla de Puntuaciones</h1>
                </div>
                <Scoreboard users={users} />
            </div>

        </>
    );

}

export default ScoreboardPage;