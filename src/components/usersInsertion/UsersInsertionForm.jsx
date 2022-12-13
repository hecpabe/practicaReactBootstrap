

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

    // Codificación de EventHandlers
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

            setShow(true);
            setAlertType("error");
            setAlertMessage("No se ha introducido el usuario porque el campo está vacío");

            return;

        }

        // Mostramos que todo ha ido bien
        setShow(true);
        setAlertType("success");
        setAlertMessage("Se ha agregado correctamente al usuario '" + userName + "'");

        // Limpiamos el campo de texto
        userNameFieldRef.current.value = "";

    }

    const importUsersButtonEventHandler = () => {

        // Realizamos la petición de los usuarios a JSON Placeholder
        axios({

            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users'

        }).then(function (response){

            addImportedUsers(response.data)

        });

    }

    // Codificación de funciones
    const addImportedUsers = (responseData) => {

        // Variables necesarias
        var usersCopy;

        // Hacemos una copia de la lista de usuarios
        usersCopy = [...users];

        // Recorremos la lista de usuarios importados añadiéndolos a la copia de la lista de usuarios
        responseData.map((newUser) => {
            return usersCopy.push({id: v4(), name: newUser.name, wins: 0, draws: 0, lost: 0});
        })

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