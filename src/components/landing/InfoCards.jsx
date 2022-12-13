

/*
    Título: Info Cards
    Nombre: Héctor Paredes Benavides
    Descripción: Creamos un componente para generar un conjunto de tarjetas que se muestren seguidas
    Fecha: 29/11/2022
    Última Modificación: 13/12/2022
*/

/* Preprocesado */
// Inclusión de bibliotecas básicas
import React from "react";

// Inclusión de bibliotecas de componentes propios
import InfoCard from "./InfoCard";

/* Componente Principal */
function InfoCards(){

    // Retornamos el código HTML
    return (
        <>
            {/* Tarjetas de información */}
            <div className="container container-fluid d-flex justify-content-center">

                {/* Tarjeta de Usuarios */}
                <InfoCard 
                    cardTitle="Introducir usuarios" 
                    cardText="Información sobre como introducir a los usuarios que van a participar en el campeonato."
                    collapseText="Navega hasta la pestaña de usuarios y rellena a mano el formulario para introducir usuarios o haz click en el botón de 
                                    importar para importar los usuarios de la paǵina JSON Placeholder. Debajo del formulario te aparecerán los usuarios que
                                    se han introducido en el campeonato. Tras acabar de introducir todos los usuarios continua con siguiente punto.
                                "
                    collapseID="collapseUsers"
                />

                {/* Tarjeta de partidos */}
                <InfoCard 
                    cardTitle="Establecer partidos" 
                    cardText="Información sobre como generar los encuentros y establecer sus resultados."
                    collapseText="Navega hasta la pestaña de partidos, ahí, además de poder ver a los usuarios del campeonato, podrás generar los encuentros
                                    del mismo pulsando el botón de generar partidos. Tras generar los partidos, aparecerán en una tabla los diferentes
                                    encuentros generados, ahí podrás establecer el ganador de cada encuentro. Una vez establecidos los resultados deberás
                                    pulsar el botón de establecer resultados para calcular las posiciones de los jugadores según campeonatos ganados. Tras
                                    pulsar este botón podrás continuar con el siguiente punto.
                                "
                    collapseID="collapseMatches"
                />

                {/* Tarjeta de resultados */}
                <InfoCard 
                    cardTitle="Comprobar resultados" 
                    cardText="Información sobre como comprobar los resultados de los usuarios."
                    collapseText="Navega hasta la pestaña de puntuaciones, ahí podrás comprobar en una tabla a todos los usuarios ordenados por la cantidad
                                    de partidos ganados y sus estadísticas.
                                "
                    collapseID="collapseScoreboard"
                />
            </div>
        </>
    );

}

export default InfoCards;