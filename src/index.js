// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

import { onURLChange, setRootEl, setRoutes } from "./router.js";
import Home from "./views/Home.js";
import Error from "./../views/Error.js";
import ChatGrupal from "./views/ChatGrupal.js";
import CardsInfo from "./views/CardsInfo.js";
import ApiKey from "./views/ApiKey.js";
import ChatIndividual from "./views/ChatIndividual.js";
import { navBar } from "./components/Navbar.js";

//Ejemplo de definición de rutas:

const routes = {
  "/": Home,
  "/error": Error,
  "/chatGrupal": ChatGrupal,
  "/cardsInfo": CardsInfo,
  "/apikey": ApiKey,
  "/chatIndividual": ChatIndividual,
};



const viewContainer = document.getElementById("root");
//viewContainer.appendChild(navBar())
setRoutes(routes);
setRootEl(viewContainer);

document.addEventListener("DOMContentLoaded", (event) => {
  //console.log("DOM fully loaded and parsed");
  onURLChange(event.target.location.pathname);
});

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
