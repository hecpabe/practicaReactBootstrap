

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

        if(user.name.toLowerCase().includes(searchValue.toLowerCase())){

            return searchContainerContent.push(
                <UserCard user={user} setUserProfileInfo={setUserProfileInfo} />
            );

        }

        return "";

    });

    // Return del código HTML
    return(
        <>
            <div className="container">
                {searchContainerContent}
            </div>
        </>
    );

}

export default UsersList;