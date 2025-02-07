// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

import { onURLChange, setRootEl, setRoutes } from "./router.js";
import Home from "./views/Home.js";
import Error from "./views/Error.js";
import ChatGrupal from "./views/ChatGrupal.js";
import CardsInfo from "./views/CardsInfo.js";
import ApiKey from "./views/ApiKey.js";

//Ejemplo de definición de rutas:

const routes = {
  "/": { component: Home, title: "Sakura | Home" },
  "/error": { component: Error, title: "Sakura | Error 404" },
  "/chatGrupal": { component: ChatGrupal, title: "Sakura | Chat Grupal" },
  "/cardsInfo": { component: CardsInfo, title: "Sakura | Descripción" },
  "/apikey": { component: ApiKey, title: "Sakura | Api Key" },
};

const viewContainer = document.getElementById("root");
//viewContainer.appendChild(navBar())
setRoutes(routes);
setRootEl(viewContainer);

document.addEventListener("DOMContentLoaded", (event) => {
  //console.log(event.target.location.pathname);
  onURLChange(event.target.location);
});

window.addEventListener("popstate", () => {
  // para retroceder y avanzar??
  onURLChange(location);
});

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
