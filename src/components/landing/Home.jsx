

/* Preprocesado */
// Inclusión de bibliotecas básicas
import React from "react";

// Inclusión de bibliotecas de componentes propios
import Navbar from "../common/navbar/Navbar";
import HomeCarousel from "./HomeCarousel";
import InfoCards from "./InfoCards";

/* Componente Principal */
function Home({setSearchValue}){

    // Retonramos el código HTML
    return(
        <>
            {/* Navbar */}
            <Navbar activeLinkName="Home" setSearchValue={setSearchValue} />

            {/* Carousel de Información */}
            <HomeCarousel />

            {/* Tarjetas y Collapses de Información */}
            <div className="container mt-5">
                <div className="d-flex justify-content-center">
                    <h1>Información sobre la aplicación</h1>
                </div>
                <InfoCards />
            </div>
        </>
    );

}

export default Home;