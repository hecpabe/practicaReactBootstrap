

/*
    Título: App
    Nombre: Héctor Paredes Benavides
    Descripción: Creamos un programa para gestionar la aplicación web
    Fecha: 29/11/2022
    Última Modificación: 13/12/2022
*/

/* Preprocesado */
// Inclusión de bibliotecas básicas
import React, { useState } from "react";

// Inclusión de bibliotecas para las rutas
import{
    Routes,
    Route,
    BrowserRouter
} from "react-router-dom";

// Bibliotecas propias de componentes
import Home from './components/landing/Home';
import UsersInsertion from './components/usersInsertion/UsersInsertion';
import MatchesPage from './components/matches/MatchesPage';
import ScoreboardPage from './components/scoreboard/ScoreboardPage';
import UsersListPage from "./components/usersList/UsersListPage";
import UserProfilePage from "./components/userProfile/UserProfilePage";

/* Componente Principal */
function App(){

    // Inicializamos las variables de estado
    const [users, setUsers] = useState([]);
    const [matches, setMatches] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [userProfileInfo, setUserProfileInfo] = useState([]);

    // Retornamos las rutas
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home setSearchValue={setSearchValue} />} />
                <Route path='/users' element={<UsersInsertion users={users} setUsers={setUsers} setSearchValue={setSearchValue} />} />
                <Route path='/matches' element={<MatchesPage 
                                                    users={users} 
                                                    setUsers={setUsers} 
                                                    matches={matches} 
                                                    setMatches={setMatches} 
                                                    setSearchValue={setSearchValue} 
                                                />} />
                <Route path='/scoreboard' element={<ScoreboardPage users={users} setSearchValue={setSearchValue} />} />
                <Route path="/search" element={<UsersListPage users={users} searchValue={searchValue} setSearchValue={setSearchValue} setUserProfileInfo={setUserProfileInfo} />} />
                <Route path="/profile" element={<UserProfilePage userProfileInfo={userProfileInfo} setSearchValue={setSearchValue} />} />
            </Routes>
        </BrowserRouter>
    );

}

export default App;