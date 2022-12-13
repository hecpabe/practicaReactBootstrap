

/*
    Título: Users Insertion Form
    Nombre: Héctor Paredes Benavides
    Descripción: Creamos un componente para hacer un formulario de inserción de usuarios
    Fecha: 29/11/2022
    Última Modificación: 13/12/2022
*/

/* Preprocesado */
// Inclusión de bibliotecas básicas
import React from "react";
import { useRef } from 'react'

// Inclusión de bibliotecas externas
import { v4 } from 'uuid';
import axios from 'axios';

/* Componente Principal */
function UsersInsertionForm({users, setUsers, setShow, setAlertType, setAlertMessage}){

    // Inicializamos las referencias
    const userNameFieldRef = useRef();

    /* Codificación de Event Handlers */
    /* Add User Button Event Handler: Event Handler con el que insertamos un nuevo usuario introducido en el formulario al pulsar el botón de insertar 
    usuario
        Parámetros: Ninguno.
        Retorno: Ninguno.
        Precondición: El campo de nombre de usuario tiene que estar referenciado con el useRef de la función y este debe tener contenido.
        Complejidad Temporal: O(1)
        Complejidad Espacial: O(1)
    */
    const addUserButtonEventHandler = () => {

        // Varaibles necesarias
        var userName;

        // Obtenemos los datos del nuevo usuario
        userName = userNameFieldRef.current.value;

        // Comprobamos que el usuario haya metido datos válidos
        if(userName !== ""){

            // Establecemos la nueva lista de usuarios a a una copia de la misma más el nuevo usuario
            setUsers((currentUsers) => {
                return [...currentUsers, {id: v4(), name: userName, wins: 0, draws: 0, lost: 0}];
            });

        }
        else{

            // Si no nos han metido datos válidos mostramos error y nos salimos de la función
            setShow(true);
            setAlertType("error");
            setAlertMessage("No se ha introducido el usuario porque el campo está vacío");

            return;

        }

        // Mostramos el mensaje de información
        setShow(true);
        setAlertType("success");
        setAlertMessage("Se ha agregado correctamente al usuario '" + userName + "'");

        // Limpiamos el campo de texto
        userNameFieldRef.current.value = "";

    }

    /* Import Users button Event Handler: Event Handler con el que obtenemos el JSON de usuarios de JSON Placeholder al pulsar el botón de importar usuarios
        Parámetros: Ninguno.
        Retorno: Ninguno.
        Precondición: Ninguna.
        Complejidad Temporal: O(1) + await (Función asíncrona)
        Complejidad Espacial: O(n) n-> Cantidad de usuarios en JSON Placeholder
    */
    const importUsersButtonEventHandler = () => {

        // Realizamos la petición de los usuarios a JSON Placeholder
        axios({

            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users'

        }).then(function (response){

            // Procesamos la información retornada
            addImportedUsers(response.data)

        });

    }

    /* Codificación de Funciones */
    /* Add Imported Users: Función con la que alimentamos la lista de usuarios en función de los datos que recibimos de JSON PLaceholder
        Parámetros:
            0: [JSON] Información devuelta por JSON Placeholder
        Retorno: Ninguno.
        Precondición: Ninguna.
        Complejidad Temporal: O(n) n-> Cantidad de usuarios devueltos
        Complejidad Espacial: O(n) n-> Cantidad de usuarios devueltos
    */
    const addImportedUsers = (responseData) => {

        // Variables necesarias
        var usersCopy;

        // Hacemos una copia de la lista de usuarios
        usersCopy = [...users];

        // Recorremos la lista de usuarios importados añadiéndolos a la copia de la lista de usuarios
        responseData.map((newUser) => {
            return usersCopy.push({id: v4(), name: newUser.name, wins: 0, draws: 0, lost: 0});
        })

        // Mostramos el mensaje de información
        setShow(true);
        setAlertType("success");
        setAlertMessage("Se han importado los usuarios correctamente");

        // Establecemos la nueva lista de usuarios
        setUsers(usersCopy);

    }

    // Return del código HTML
    return(
        /* Tarjeta del Formulario */
        <div className="card">
            <h5 className="card-header">Formulario de inserción de usuarios</h5>

            {/* Formulario */}
            <div className="card-body">
                {/* Nombre */}
                <label htmlFor="usersInsertionFormUserName" className="form-label">Nombre del Usuario</label>
                <input type="text" className="form-control" id="usersInsertionFormUserName" placeholder="Nombre Apellido" ref={userNameFieldRef} />

                {/* Boton para añadir usuario */}
                <button className="btn btn-primary" onClick={addUserButtonEventHandler}>Añadir Usuario</button>

                {/* Botón para importar usuarios */}
                <button className="btn btn-info m-2" onClick={importUsersButtonEventHandler}>Importar Usuarios</button>

            </div>
        </div>
    );

}

export default UsersInsertionForm;