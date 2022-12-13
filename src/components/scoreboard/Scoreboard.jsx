

/*
    Título: Scoreboard
    Nombre: Héctor Paredes Benavides
    Descripción: Creamos un componente para la tabla de puntuaciones de nuestra aplicación
    Fecha: 29/11/2022
    Última Modificación: 13/12/2022
*/

/* Preprocesado */
// Inclusión de bibliotecas básicas
import React from "react";

/* Componente Principal */
function Scoreboard({users}){

    // Variables necesarias
    var sortedScoreboard = [];
    const tableRows = [];

    // Nos copiamos la lista de usuarios
    sortedScoreboard = [...users];

    // Ordenamos la lista de usuarios en función de las victorias (descendente)
    sortedScoreboard.sort((a, b) => {
        return b.wins - a.wins;
    });

    // Construimos el contenido de la tabla en base a las estadísticas de los usuarios
    sortedScoreboard.map((user) => {

        // Si el usuario tiene más victorias que derrotas ponemos la fila de color verde
        if(user.wins > user.lost){

            return tableRows.push(
                <tr key={"scoreboardRowID" + user.id} className="table-success">
                    <td key={"scoreboardRowUserNameDataID" + user.id}>{user.name}</td>
                    <td key={"scoreboardRowWinsDataID" + user.id}>{user.wins}</td>
                    <td key={"scoreboardRowDrawsDataID" + user.id}>{user.draws}</td>
                    <td key={"scoreboardRowLostDataID" + user.id}>{user.lost}</td>
                </tr>
            );

        }
        // Si el usuario tiene más derrotas que victorias ponemos la fila de color rojo
        else if(user.wins < user.lost){

            return tableRows.push(
                <tr key={"scoreboardRowID" + user.id} className="table-danger">
                    <td key={"scoreboardRowUserNameDataID" + user.id}>{user.name}</td>
                    <td key={"scoreboardRowWinsDataID" + user.id}>{user.wins}</td>
                    <td key={"scoreboardRowDrawsDataID" + user.id}>{user.draws}</td>
                    <td key={"scoreboardRowLostDataID" + user.id}>{user.lost}</td>
                </tr>
            );

        }
        // Si el usuario tiene las mismas victorias que derrotas ponemos la fila de color amarillo
        else{

            return tableRows.push(
                <tr key={"scoreboardRowID" + user.id} className="table-warning">
                    <td key={"scoreboardRowUserNameDataID" + user.id}>{user.name}</td>
                    <td key={"scoreboardRowWinsDataID" + user.id}>{user.wins}</td>
                    <td key={"scoreboardRowDrawsDataID" + user.id}>{user.draws}</td>
                    <td key={"scoreboardRowLostDataID" + user.id}>{user.lost}</td>
                </tr>
            );

        }

    });

    // Return del código HTML
    return(
        /* Tabla de Puntuaciones */
        <table className="table table-striped table-hover">

            {/* Cabecera */}
            <thead>
                <tr>
                    <th scope="col">Jugador</th>
                    <th scope="col">Victorias</th>
                    <th scope="col">Empates</th>
                    <th scope="col">Derrotas</th>
                </tr>
            </thead>

            {/* Contenido de la Tabla */}
            <tbody>
                {tableRows}
            </tbody>
        </table>
    );

}

export default Scoreboard;