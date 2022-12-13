

/* Preprocesado */
// Inclusión de bibliotecas básicas
import React from "react";

/* Componente Principal */
function InfoCard({cardTitle, cardText, collapseText, collapseID}){

    // Return del código HTML
    return(

        // Tarjeta
        <div className="card col-md-4 m-1">

            {/* Contenido de la tarjeta */}
            <div className="card-body">

                {/* Título y descripción de la tarjeta */}
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">{cardText}</p>
                
                {/* COLLAPSE */}
                <p>
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={"#" + collapseID} aria-expanded="false" aria-controls={collapseID}>
                        Más información
                    </button>
                </p>
                <div className="collapse" id={collapseID}>
                    <div className="card card-body">
                        {collapseText}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default InfoCard;