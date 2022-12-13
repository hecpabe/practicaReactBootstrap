

/* Preprocesado */
// Inclusión de bibliotecas básicas
import React from "react";
import { useNavigate } from "react-router-dom";

/* Componente Principal */
function UserCard({user, setUserProfileInfo}){

    // Variables necesarias
    const navigate = useNavigate();

    /* Event Handlers */
    const viewProfileEventHandler = () => {

        setUserProfileInfo(user);
        navigate("/profile");

    }

    // Return del código HTML
    return(
        <>
            <div key={"cardUser" + user.id} className="card mt-2">
                <div key={"cardBodyUser" + user.id} className="card-body">
                    <h5 key={"cardTitleUser" + user.id} className="card-title">{user.name}</h5>
                    <p key={"cardTextUser" + user.id} className="card-text">
                        Haz click en el enlace de abajo para ver más información de este usuario.
                    </p>
                    <a key={"cardLinkUser" + user.id} href="#" onClick={viewProfileEventHandler} >Ver perfil</a>
                </div>
            </div>
        </>
    );

}

export default UserCard;