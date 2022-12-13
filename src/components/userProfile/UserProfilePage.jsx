

/* Preprocesado */
// Inclusión de bibliotecas básicas
import React from "react";

// Inclusión de bibliotecas externas
import { Link } from "react-router-dom";

// Inclusión de bibliotecas de componentes propios
import Navbar from "../common/navbar/Navbar";

/* Componente Principal */
function UserProfilePage({userProfileInfo, setSearchValue}){

    // Return del código HTML
    return(
        <>

            {/* Navbar */}
            <Navbar activeLinkName="none" setSearchValue={setSearchValue} />

            {/* Profile */}
            <section className="vh-100" style={{backgroundColor: "#9de2ff"}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-md-9 col-lg-7 col-xl-5">
                        <div className="card" style={{borderRadius: "15px"}}>
                        <div className="card-body p-4">
                            <div className="d-flex text-black">
                            <div className="flex-shrink-0">
                                <img src="userIcon.png"
                                alt="Generic placeholder image" className="img-fluid"
                                style={{width: "180px", borderRadius: "10px"}} />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5 className="mb-1">{userProfileInfo.name}</h5>
                                <p className="mb-2 pb-1" style={{color: "#2b2a2a"}}>Usuario</p>
                                <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                                style={{backgroundColor: "#efefef"}}>
                                <div>
                                    <p className="small text-muted mb-1">Victorias</p>
                                    <p className="mb-0">{userProfileInfo.wins}</p>
                                </div>
                                <div className="px-3">
                                    <p className="small text-muted mb-1">Empates</p>
                                    <p className="mb-0">{userProfileInfo.draws}</p>
                                </div>
                                <div>
                                    <p className="small text-muted mb-1">Derrotas</p>
                                    <p className="mb-0">{userProfileInfo.lost}</p>
                                </div>
                                </div>
                                <div className="d-flex pt-1">
                                    <Link to="/scoreboard" className="btn btn-outline-primary me-1 flex-grow-1">Ver Puntuaciones</Link>
                                    <Link to="/matches" className="btn btn-primary flex-grow-1">Ver Partidos</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default UserProfilePage;