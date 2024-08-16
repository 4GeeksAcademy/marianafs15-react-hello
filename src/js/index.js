import React from "react"; //import react into the bundle
import ReactDOM from "react-dom/client"; 
import "../styles/index.css"; // include your styles into the webpack bundle
import Home from "./component/Home.jsx";//import your own components

//render your react application - renderizando nuesta aplicacion
//                   //donde?                       //que?
ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);

