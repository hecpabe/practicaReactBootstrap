

/*
    Título: Matches Board Winner Selector
    Name: Héctor Paredes Benavides
    Descripción: Creamos un componente para hacer el selector de ganador de un partido de la tabla de partidos
    Fecha: 29/11/2022
    Última Modificación: 13/12/2022
*/

/* Preprocesado */
// Inclusión de bibliotecas externas
import React from "react";

/* Componente Principal */
function MatchesBoardWinnerSelector({tableNumber, firstUserName, secondUserName}){

    // Return del código HTML
    return(
        /* Formulario de Selección */
        <select className="form-select" id={"winnerSelectorTableID" + tableNumber}>
            <option value="0">Empate</option>
            <option value={firstUserName}>{firstUserName}</option>
            <option value={secondUserName}>{secondUserName}</option>
        </select>
    );

}

export default MatchesBoardWinnerSelector;