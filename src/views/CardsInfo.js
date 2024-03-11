import { Footer } from "../Components/Footer.js";
import { navBar } from "../components/Navbar.js";
import data from "../data/dataset.js";
import { getApiKey } from "../lib/apiKey.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";
const CardsInfo = (card) => {
  const infoCarta = document.createElement("section");
  const carta = data.find((x) => x.id === card.id);
  //console.log(card.id);
  const cardElement = document.createElement("div");
  cardElement.className = "content containerChat";
  cardElement.innerHTML = `
        <div class="mainInfoCard">
            <img id="img" class="imgInfo" src=${carta.imageUrl} alt=${carta.name} />
            <div class="container-text">
                <h2 class="title">${carta.name}</h2>
                <p class="description">${carta.description} 
                    <br><strong>Elemento:</strong> ${carta.facts.elementEsencial} 
                    <br><strong>Poder:</strong>  ${carta.facts.powerFul}
                </p>
            </div>
        </div>
        <div class="chatIndContainer">
            <div class="chat-header"> 
                <img id="img" class="img-chat" src=${carta.imageUrl} alt=${carta.name} />          
                <h2 class="chat-with">${carta.name} </h2>
                <h2 class="chat-with">${carta.shortDescription}</h2>
            </div>
            <div class="chat-history">
                <div id="inactive">
                  <div class="message-data">
                    <span class="message-data-name">Tu</span> 
                  </div>
                  <div class="message my-message">
                  <p id="output"></p>
                  </div>
                </div>
              <div class="clearfix"  id="inactive2">
                <div class="message-data align-right">
                  <span class="message-data-name" >${carta.name}</span></i> 
                </div>
                <div class="message other-message float-right ">
                  <p id="received"></p>
                </div>
              </div>
              <p id="messageError"></p>
              <div class="chat-message">
                <textarea name="message-send" id="message-send" placeholder="type your message"> </textarea>
                <button class="containerSend btnSend">    
                  <img class="send" src="./img/icono3.svg" alt="iconSend" />
                </button>            
              </div>
            </div>
        </div>
        
    `;

  const btnChat = cardElement.querySelector(".send");

  btnChat.addEventListener("click", () => {
    const message = cardElement.querySelector("#message-send");
    const received = cardElement.querySelector("#received");
    const output = cardElement.querySelector("#output");
    const messageError = cardElement.querySelector('#messageError')
    const apiKey = getApiKey();
    // if (!apiKey) {
    //   alert("Por favor, ingresa tu API antes de chatear.");
    //   return  window.location= '/apikey';
    // }
    const messageReceived = cardElement.querySelector("#inactive2");


    const messageSend = cardElement.querySelector("#inactive");
    if (!message.value)return;
     messageSend.style.display = "block"
     output.innerHTML = message.value

    const carta = data.find((x) => x.id === card.id);
    communicateWithOpenAI(message.value, carta) // funcion asicronica
      .then((response) => {
        try {
          if(!apiKey){
           alert("Por favor, ingresa tu API antes de chatear.");
            messageReceived.style.display ="none"
           // messageError.innerHTML += `<p>${response.error.message}</p>`
            return  window.location= '/apikey';
          //  return  messageError;
          }  else{
            messageReceived.style.display ="block"
            received.innerHTML = response.choices[0].message.content;
            //console.log(received);
          }  
        } catch (error) { // definir dependiendo el codigo de errror
          messageError.innerHTML += '<p>Apikey mal ingresada o inválida. Intenta de nuevo o pide una nueva apikey</p>';
          //console.log(messageError);
         // console.error('error al obtener', error)
        }
       
      })
      .catch((error) => {
        console.error('error al obtener la respuesta', error)
      })
  });

  infoCarta.append(navBar(), cardElement, Footer());
  //title.innerHTML = "Sakura: Cazadora de cartas";

  return infoCarta;

};

export default CardsInfo;
