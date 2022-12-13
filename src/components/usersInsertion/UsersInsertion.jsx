

/* Preprocesado */
// Inclusión de bibliotecas básicas
import React, { useState } from "react";

// Inclusión de bibliotecas de componentes propios
import Navbar from "../common/navbar/Navbar";
import UsersInsertionForm from "./UsersInsertionForm";
import UsersList from "../common/usersList/UsersList";
import AlertManager from "../common/alerts/AlertManager";

/* Componente Principal */
function UsersInsertion({users, setUsers, setSearchValue}){

    // Inicialización de estados
    const [show, setShow] = useState(false);
    const [alertType, setAlertType] = useState("");
    const [alertMessage, setAlertMessage] = useState("");

    // Return del código HTML
    return(
        <>
            <Navbar activeLinkName="Users" setSearchValue={setSearchValue} />

            <br />
            <br />
            {/* Alertas */}
            <div className="container mt-5">
                <AlertManager show={show} setShow={setShow} alertType={alertType} alertMessage={alertMessage} />
            </div>

            {/* Formulario de inserción de usuarios */}
            <div className="container mt-5">
                <UsersInsertionForm users={users} setUsers={setUsers} setShow={setShow} setAlertType={setAlertType} setAlertMessage={setAlertMessage} />
            </div>

            {/* Lista de Usuarios */}
            <div className="container mt-5">
                <UsersList users={users} />
            </div>
            
        </>
    );

}

export default UsersInsertion;