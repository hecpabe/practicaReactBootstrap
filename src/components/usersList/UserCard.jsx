

/*
    Título: User Card
    Nombre: Héctor Paredes Benavides
    Descripción: Creamos un componente para hacer una tarjeta de usuario para la lista de usuarios buscados
    Fecha: 13/12/2022
    Última Modificación: 13/12/2022
*/

/* Preprocesado */
// Inclusión de bibliotecas básicas
import React from "react";
import { useNavigate } from "react-router-dom";

/* Componente Principal */
function UserCard({user, setUserProfileInfo}){

    // Variables necesarias
    const navigate = useNavigate();

    /* Event Handlers */
    /* View Profile Event Handler: Event Handler que se encarga de gestionar la visualización del usuario seleccionado al pulsar el link correspondiente
        Parámetros: Ninguno.
        Retorno: Ninguno.
        Precondición: Ninguna.
        Complejidad Temporal: O(1)
        Complejidad Espacial: O(1)
    */
    const viewProfileEventHandler = () => {

        // Establecemos el usuario seleccionado y navegamos a la página de perfil para visualizar su información
        setUserProfileInfo(user);
        navigate("/profile");

    }

    // Return del código HTML
    return(
        <>
            {/* Tarjeta */}
            <div key={"cardUser" + user.id} className="card mt-2">
                <div key={"cardBodyUser" + user.id} className="card-body">
                    {/* Nombre de Usuario, información y enlace de acceso */}
                    <h5 key={"cardTitleUser" + user.id} className="card-title">{user.name}</h5>
                    <p key={"cardTextUser" + user.id} className="card-text">
                        Haz click en el enlace de abajo para ver más información de este usuario.
                    </p>
                    <button key={"cardLinkUser" + user.id} className="btn btn-link" onClick={viewProfileEventHandler}>Ver perfil</button>
                </div>
            </div>
        </>
    );

}

export default UserCard;