

/* Preprocesado */
// Inclusión de bibliotecas básicas
import React from "react";

// Inclusión de bibliotecas externas
import { Alert } from "react-bootstrap";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/* Componente Principal */
function SuccessAlert({message, setShow}){

    // Return del código HTML
    return(
        <>
            <Alert variant="success" onClose={() => setShow(false)} dismissible >
                <div className="container container-fluid d-flex">
                    <FontAwesomeIcon className="m-2" icon={faCircleCheck} />
                    <p className="m-2">{message}</p>
                </div>
            </Alert>
        </>
    );

}

export default SuccessAlert;