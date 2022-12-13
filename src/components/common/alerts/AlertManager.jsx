

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

    var alertContent;

    if(show){

        switch(alertType){

            case ALERT_TYPES[0]:
                alertContent = <SuccessAlert message={alertMessage} setShow={setShow} />
                break;
                
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