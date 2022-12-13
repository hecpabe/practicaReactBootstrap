

/*
    Título: Users List
    Nombre: Héctor Paredes Benavides
    Descripción: Creamos un componente para hacer la lista de usuarios encontrados tras la búsqueda
    Fecha: 13/12/2022
    Última Modificación: 13/12/2022
*/

/* Preprocesado */
// Inclusión de bibliotecas básicas
import React from "react";

// Inclusión de bibliotecas de componentes propios
import UserCard from "./UserCard";

/* Componente Principal */
function UsersList({users, searchValue, setUserProfileInfo}){

    // Variables necesarias
    var searchContainerContent = [];

    // Obtenemos los usuarios que coinciden con la búsqueda
    users.map((user) => {

        // Si el usuario contiene el string buscado
        if(user.name.toLowerCase().includes(searchValue.toLowerCase())){

            // Lo agregamos a la lista
            return searchContainerContent.push(
                <UserCard user={user} setUserProfileInfo={setUserProfileInfo} />
            );

        }

        // Sino no agregamos nada
        return "";

    });

    // Return del código HTML
    return(
        <>
            {/* Contenedor con la lista de tarjetas creadas */}
            <div className="container">
                {searchContainerContent}
            </div>
        </>
    );

}

export default UsersList;