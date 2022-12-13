

/* Preprocesado */
// Inclusión de bibliotecas básicas
import React from "react";

/* Componente Principal */
function UsersList({users}){

    // Variables necesarias
    const listElements = [];

    // Creamos los elementos de la lista en función de la lista de usuarios
    users.map((user) => {

        return listElements.push(<li key={"listID" + user.id} className="list-group-item">{user.name}</li>);

    })

    // Return del código HTML
    return(
        <ul className="list-group">
            <li className="list-group-item active" aria-current="true"><h5 className="card-header">Lista de Usuarios</h5></li>
            {listElements}
        </ul>
    );

}

export default UsersList;