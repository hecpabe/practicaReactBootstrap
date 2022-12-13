

/*
    Título: Matches Board
    Nombre: Héctor Paredes Benavides
    Descripción: Creamos un componente para gestionar la tabla de partidos
    Fecha: 29/11/2022
    Última Modificación: 13/12/2022
*/

/* Preprocesado */
// Inclusión de bibliotecas básicas
import React from "react";

// Inclusión de bibliotecas de componentes propios
import MatchesBoardWinnerSelector from "./MatchesBoardWinnerSelector";

/* Componente Principal */
function MatchesBoard({matches, setMatches}){

    // Variables necesarias
    const tableRows = [];

    // Creamos los elementos de la tabla en función de la lista de partidos
    matches.map((match) => {

        return tableRows.push(
        <tr key={"rowID" + match.tableNumber}>
            <td key={"tableDataTableNumberID" + match.tableNumber}>{match.tableNumber}</td>
            <td key={"tableDataFirstUserNameID" + match.tableNumber + match.firstUserID}>{match.firstUserName}</td>
            <td key={"tableDataSecondUserNameID" + match.tableNumber + match.secondUserID}>{match.secondUserName}</td>
            <td key={"tableDataWinnerSelectorID" + match.tableNumber} ><MatchesBoardWinnerSelector tableNumber={match.tableNumber} firstUserName={match.firstUserName} secondUserName={match.secondUserName} /></td>
        </tr>);

    });

    // Return del código HTML
    return(
        /* Tabla de participantes */
        <table className="table">
            {/* Cabecera de la tabla */}
            <thead>
                <tr>
                    <th scope="col">Mesa</th>
                    <th scope="col">Jugador 1</th>
                    <th scope="col">Jugador 2</th>
                    <th scope="col">Ganador</th>
                </tr>
            </thead>

            {/* Elementos de la tabla */}
            <tbody>
                {tableRows}
            </tbody>
        </table>
    );

}

export default MatchesBoard;