import { navBar } from "../components/Navbar.js";
import { Footer } from "../Components/Footer.js";
import {setApiKey } from "../lib/apiKey.js";

const ApiKey = () => {
  const apiKeyContent = document.createElement("section")
  const contenido = document.createElement("div");
  contenido.className ="content apiview"
  contenido.innerHTML = `
  <div class="apikeyContent">
  <h1 class="title">API KEY ADMIN</h1>
  <input type="password" id="password" placeholder ="Ingresa aqui tu api key..." name="password">
  <input type="submit"  class="btnChat button-common" value="Save"/></div>
  `;

  //title.innerHTML = "Sakura: Cazadora de cartas";
  apiKeyContent.append(navBar(), contenido, Footer());

  const inputApi = contenido.querySelector("input[type='password']");
  const saveApi = contenido.querySelector('.btnChat');

  saveApi.addEventListener('click', function(){
    if (saveApi.value === 'Save'){
      const passwordValue = inputApi.value
      saveApi.value='Delete';
      setApiKey(passwordValue);
      //console.log('Valor del campo de contraseña:', passwordValue);
    } else{
      inputApi.value='';
      saveApi.value='Save';
      localStorage.removeItem('apikey')    
    }
  
  })

  return apiKeyContent;
};

export default ApiKey;