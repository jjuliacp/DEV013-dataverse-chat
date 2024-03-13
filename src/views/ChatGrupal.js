import data from "../data/dataset.js";
/* import { renderData } from "../lib/dataFunctions.js"; */
import { communicateWithOpenAI } from "../lib/openAIApi.js";
import { getApiKey } from "../lib/apiKey.js";
const ChatGrupal = () => {
  const chatG = document.createElement("section");
  chatG.className = "viewChatGrupal";

  const chatGrupalText = document.createElement("div");
  chatGrupalText.className = "chatGrupal";

  chatGrupalText.innerHTML = `
        <div class="nav-chatGrupal">
          <a href="./">
            <img class="back" src="./img/chevron-back-svgrepo-com.svg" alt="iconBack" />
          </a>
          <h3 class="title-chatGrupal">Chat Grupal</h3>
          <img id="ico3" class="img-icono openIcon" src="./img/person-3-fill-svgrepo-com(2).svg" alt=icono-3 />
        </div>
        <div class="chatG-historial">
        <div id="output" class="response"></div>
        <div id="received"></div>
        <p id="messageError"></p>
        </div>
        <div class="window-chat">
          <textarea name="message-send" id="message-send" placeholder="type your message"> </textarea>
          <button class="containerSend GrupalSend">    
            <img class="send" src="./img/icono3.svg" alt="iconSend" />
          </button>
        </div> 
  `;

  const chatGContact = document.createElement("div");
  chatGContact.className = "list-ChGr";

  chatGContact.innerHTML = `
  <h3 class="title-contact">Cartas Clow</h3>
  <img id="ico2" class="img-icono" src="./img/person-3-fill-svgrepo-com.svg" alt=icono-2 />
  `;

  const chatGrupalContact = document.createElement("div");
  chatGrupalContact.className = "list-contact-ChGr";

  data.forEach((carta) => {
    const divData = document.createElement("div");
    divData.className = "chatGrList";
    divData.innerHTML = `   
        <ul class="container-contact">
          <li class="contain-card" itemscope itemtype="contact">
            <dd class="avatar-container" itemprop="imagenUrl">
              <img id="img2" class="img-Avatar" src=${carta.imageUrl} alt=${carta.name} />
            </dd>
            <dd class="avatar-name" itemprop="name">
              <h4 class="name-card">${carta.name}</h4>
              <h5 class="description-card">${carta.shortDescription}</h5>
            </dd>
          </li>
        </ul>
  
      `;

    chatG.appendChild(chatGrupalText);
    chatG.appendChild(chatGContact);

    chatGContact.appendChild(chatGrupalContact);
    chatGrupalContact.appendChild(divData);
  });

  //Agregar evento de clic a la imagen con ID "ico2"
  const iconClose = chatG.querySelector("#ico2");
  iconClose.addEventListener("click", () => {
    // Verificar si el ancho de la pantalla es menor que 400px

    if (window.innerWidth < 400) {
      // Ocultar la ventana o div de clase "list-ChGr"
      console.log(window.innerWidth);
      chatGContact.style.display = "none";
    }
  });

  // Agregar evento de clic a la imagen con ID "ico3"
  const iconOpen = chatG.querySelector("#ico3");
  iconOpen.addEventListener("click", () => {
    // Verificar si el ancho de la pantalla es menor que 400px

    if (window.innerWidth < 400) {
      // Mostrar la ventana o div de clase "list-ChGr"
      chatGContact.style.display = "block";
    }
  });

  const btnChat = chatGrupalText.querySelector(".send");

  btnChat.addEventListener("click", () => {
    const message = chatGrupalText.querySelector("#message-send");
    const received = chatGrupalText.querySelector("#received");
    const output = chatGrupalText.querySelector("#output");
    const errormessage = chatGrupalText.querySelector("#messageError")
    const apiKey = getApiKey();
    output.innerHTML = message.value;
    data.forEach((carta) => {
      communicateWithOpenAI(message.value, carta)
        .then((response) => {
          if(!apiKey){
            alert("Por favor, ingresa tu API antes de chatear.");
            // messageError.innerHTML += `<p>${response.error.message}</p>`
             return  window.location= '/apikey';
           //  return  messageError;
           }  else if (response.error.code === "invalid_api_key"){
              errormessage.innerHTML  += `<p>La API key no es válida. Revisa que hayas ingresado una clave válida. Error 401. Haz clic <a href="https://platform.openai.com/docs/guides/error-codes/error-codes" target="_blank">aquí</a> para obtener más información.</p>`;
             //console.log( received.innerHTML = 'La apikey no es valida.Revisa que hayas ingresado una Api valida. Error 401 ingresa aqui para saber mas : https://api.openai.com/v1/chat/completions');
           } else{
             const responseMessage = response.choices[0].message.content;
             received.innerHTML = `<p class="response">${carta.name}: ${responseMessage}</p>`;
             //console.log(received);
           }  
         })
        .catch((error) => {
          console.error('error al obtener respuesta', error)
        })
    });

    // Limpiar el área de mensaje
    message.value = "";
  });
  return chatG;
};

export default ChatGrupal;
