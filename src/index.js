

/*
    Título: Index
    Nombre: Héctor Paredes Benavides
    Descripción: Creamos el index para inicializar las diferentes rutas de nuestra página web
    Fecha: 29/11/2022
    Última Modificación: 13/12/2022
*/

/* Preprocesado */
// Bibliotecas básicas
import React from 'react';
import ReactDOM from 'react-dom/client';

// Bibliotecas propias de CSS
import './index.css';

// Bibliotecas propias de componentes
import reportWebVitals from './reportWebVitals';
import App from "./App";

/* Ejecución del Programa */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
