

/* Preprocesado */
// Inclusión de bibliotecas básicas
import React from "react";

// Inclusión de bibliotecas de componentes propios
import Navbar from "../common/navbar/Navbar"
import UsersList from "./UsersList";

/* Componente Principal */
function UsersListPage({users, searchValue, setSearchValue, setUserProfileInfo}){

    // Return del código HTML
    return(
        <>

            {/* Navbar */}
            <Navbar activeLinkName="none" setSearchValue={setSearchValue} />

            {/* Resultados */}
            <br />
            <br />
            <div className="container mt-5">
                <div className="container d-flex justify-content-center">
                    <h1>Resultados de la búsqueda para '{searchValue}'</h1>
                </div>
                <UsersList users={users} searchValue={searchValue} setUserProfileInfo={setUserProfileInfo} />
            </div>

        </>
    );

}

export default UsersListPage;