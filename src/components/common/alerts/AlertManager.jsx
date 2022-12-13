

/*
    Título: Alert Manager
    Nombre: Héctor Paredes Benavides
    Descripción: Creamos un componente que gestione el mostrado de las diferentes posibles alertas
    Fecha: 29/11/2022
    Última Modificación: 13/12/2022
*/

/* Preprocesado */
// Inclusión de bibliotecas básicas
import React from "react";

// Inclusión de bibliotecas de componentes propios
import SuccessAlert from "./SuccessAlert";
import ErrorAlert from "./ErrorAlert";

// Definición de constantes
const ALERT_TYPES = [
    "success",
    "error"
]

/* Componente Principal */
function AlertManager({show, setShow, alertType, alertMessage}){

    // Variables necesarias
    var alertContent;

    // Si se muestra la notificación
    if(show){

        // Comprobamos el tipo de notificación que tenemos que mostrar
        switch(alertType){

            // Alerta Success
            case ALERT_TYPES[0]:
                alertContent = <SuccessAlert message={alertMessage} setShow={setShow} />
                break;
                
            // Alerta Error
            case ALERT_TYPES[1]:
                alertContent = <ErrorAlert message={alertMessage} setShow={setShow} />
                break;

            default:
                break;

        }

    }

    // Return del código HTML
    return(
        <>
            {alertContent}
        </>
    );

}

export default AlertManager;