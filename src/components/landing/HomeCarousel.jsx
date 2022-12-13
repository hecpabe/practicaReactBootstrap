

/* Preprocesado */
// Inclusión de bibliotecas
import React from "react";

/* Componente Principal */
function HomeCarousel(){

    // Return HTML Code
    return(
        // Carousel
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">

            {/* Líneas indicadoras de posición debajo del carousel */}
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            {/* Elementos del carousel */}
            <div className="carousel-inner">

                {/* Apartado de usuarios */}
                <div className="carousel-item active">
                    <img src="usersWallpaper.webp" className="d-block w-100" alt="Users Wallpaper" height={600}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Añade a los usuarios</h5>
                        <p>Navega hasta la ruta de usuarios para añadirlos a mano o de JsonPlaceholder.</p>
                    </div>
                </div>

                {/* Apartado de partidos */}
                <div className="carousel-item">
                    <img src="chessMatch.jpg" className="d-block w-100" alt="Chess Match" height={600} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Establece partidos</h5>
                        <p>Navega hasta la ruta de partidos para establecer de forma aleatoria los encuentros y establecer los resultados de cada uno.</p>
                    </div>
                </div>

                {/* Apartado de resultados */}
                <div className="carousel-item">
                    <img src="winner.jpg" className="d-block w-100" alt="Winner" height={600} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Comprueba las puntuaciones</h5>
                        <p>Navega hasta la ruta de puntuaciones para comprobar los resultados.</p>
                    </div>
                </div>
            </div>

            {/* Botones para ir pasando de elemento */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );

}

export default HomeCarousel;