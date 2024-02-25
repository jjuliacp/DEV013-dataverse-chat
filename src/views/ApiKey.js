import { navBar } from "../components/Navbar.js";

const ApiKey = () => {
  const apiKeyContent = document.createElement("section")
  const contenido = document.createElement("div");
  contenido.className ="content"
  contenido.innerHTML = `
  <div class="apikeyContent">
  <h1 class="title">API KEY ADMIN</h1>
  <input type="password" id="password" placeholder ="Ingresa aqui tu api key..." name="password">
  <input type="submit"  class="btnChat button-common" value="Enviar"/></div>
  `;

  //title.innerHTML = "Sakura: Cazadora de cartas";
  apiKeyContent.append(navBar(), contenido);

  return apiKeyContent;
};

export default ApiKey;