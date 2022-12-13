

/*
    Título: Matches Option Buttons
    Nombre: Héctor Paredes Benavides
    Descripción: Creamos un componente para hacer una tarjeta con los botones de gestión de la tabla de partidos
    Fecha: 29/11/2022
    Última Modificación: 13/12/2022
*/

/* Preprocesado */
// Inclusión de bibliotecas básicas
import React from "react";

/* Componente Principal */
function MatchesOptionButtons({users, setUsers, matches, setMatches, setShow, setAlertType, setAlertMessage}){

    /* Codificación de Event Handlers */
    /* Generate Matches Button Event Handler: Event Handler que se encarga de generar los partidos con la lista de usuarios al pulsar el botón de generar 
    partidos
        Parámetros: Ninguno.
        Retorno: Ninguno.
        Precondición: La lista de usuarios tiene que tener usuarios
        Complejidad Temporal: O(n/2) n-> Cantidad de usuarios
        Complejidad Espacial: O(n/2) n-> Cantidad de usuarios
    */
    const generateMatchesButtonEventHandler = () => {

        // Variables necesarias
        var usersCopy;
        var matchesCopy = [];
        var tableCounter = 1;

        // Comprobamos que haya usuarios
        if(users.length <= 0){

            // Si no hay usuarios en el sistema mostramos error y finalizamos la función
            setShow(true);
            setAlertType("error");
            setAlertMessage("No se han generado partidos porque no hay usuarios introducidos");

            return;

        }

        // Nos hacemos una copia de los usuarios
        usersCopy = [...users];

        // Vamos sacando aleatoriamente a 2 jugadores hasta que no se puedan hacer más partidos
        while(usersCopy.length >= 2){

            // Variables necesarias
            var firstUserIndex;
            var secondUserIndex;
            var firstUserID;
            var secondUserID;
            var firstUserName;
            var secondUserName;

            // Obtenemos el índice del primer jugador
            firstUserIndex = Math.floor(Math.random() * usersCopy.length);
            
            // Obtenemos los datos del primer jugador
            firstUserID = usersCopy[firstUserIndex].id;
            firstUserName = usersCopy[firstUserIndex].name;

            // Eliminamos el primer jugador de la lista de jugadores disponibles
            usersCopy.splice(firstUserIndex, 1);

            // Obtenemos el índice del segundo jugador
            secondUserIndex = Math.floor(Math.random() * usersCopy.length);

            // Obtenemos los datos del segundo jugador
            secondUserID = usersCopy[secondUserIndex].id;
            secondUserName = usersCopy[secondUserIndex].name;

            // Eliminamos el segundo jugador de la lista de jugadores disponibles
            usersCopy.splice(secondUserIndex, 1);

            // Agregamos un nuevo partido a la lista de partidos
            matchesCopy.push({tableNumber: tableCounter, firstUserID: firstUserID, firstUserName: firstUserName, secondUserID: secondUserID, secondUserName: secondUserName, winnerName: ""});

            // Incrementamos el contador del número de mesa
            tableCounter++;

        }

        // Mostramos el mensaje de información
        setShow(true);
        setAlertType("success");
        setAlertMessage("Se han generado los diferentes partidos correctamente");

        // Establecemos la nueva lista de partidos
        setMatches(matchesCopy);

    }

    /* Generate Results Button Event Handler: Event Handler que se encarga de recoger los resultados de los partidos y editar las estadísticas al pulsar el
    botón de cerrar resultados
        Parámetros: Ninguno.
        Retorno: Ninguno.
        Precondición: La lista de partidos tiene que tener partidos
        Complejidad Temporal: O(n) n-> Cantidad de partidos
        Complejidad Espacial: O(1)
    */
    const generateResultsButtonEventHandler = () => {

        // Variables necesarias
        var usersCopy;

        // Comprobamos que haya partidos generados
        if(matches.length <= 0){

            // Si no hay partidos generados mostramos error y nos salimos de la función
            setShow(true);
            setAlertType("error");
            setAlertMessage("No se han cerrado los resultados porque no hay partidos que jugar");

            return;

        }

        // Nos creamos una copia de la lista de usuarios
        usersCopy = [...users];

        // Nos recorremos cada partido estableciendo las nuevas estadísticas de sus jugadores
        matches.map((match) => {

            // Obtenemos el ganador del partido
            var winner = document.getElementById("winnerSelectorTableID" + match.tableNumber).value;
            
            // Comprobamos si ha sido un empate
            if(winner === "0"){

                // Buscamos sus registros y establecemos sus resultados
                usersCopy.filter((user) => user.id === match.firstUserID)[0].draws++;
                return usersCopy.filter((user) => user.id === match.secondUserID)[0].draws++;

            }

            // Comprobamos si ha ganado el primer usuario
            if(winner === match.firstUserName){

                // Buscamos sus registros y establecemos sus resultados
                usersCopy.filter((user) => user.id === match.firstUserID)[0].wins++;
                return usersCopy.filter((user) => user.id === match.secondUserID)[0].lost++;

            }

            // Si no ha sido ni un empate ni ha ganado el primero, entonces ha ganado el segundo
            // Buscamos sus registros y establecemos sus resultados
            usersCopy.filter((user) => user.id === match.firstUserID)[0].lost++;
            return usersCopy.filter((user) => user.id === match.secondUserID)[0].wins++;
            
        });

        // Mostramos el mensaje de información
        setShow(true);
        setAlertType("success");
        setAlertMessage("Se han cerrado los resultados de los partidos correctamente");

        // Establecemos la nueva lista de usuarios (con las estadísticas establecidas)
        setUsers(usersCopy);

    }

    // Return del código HTML
    return(
        /* Tarjeta */
        <div className="card">
            <h5 className="card-header">Opciones</h5>
            <div className="card-body">
                <h5 className="card-title">Botones de opciones</h5>
                <p className="card-text">Pulse alguno de estos botones para generar la tabla de partidos o para cerrar los resultados de los mismos</p>
                <button className="btn btn-primary" onClick={generateMatchesButtonEventHandler}>Generar Partidos</button>
                <button className="btn btn-warning m-2" onClick={generateResultsButtonEventHandler}>Cerrar Resultados</button>
            </div>
        </div>
    );

}

export default MatchesOptionButtons;