

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