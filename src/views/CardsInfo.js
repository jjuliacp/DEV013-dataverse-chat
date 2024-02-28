import { Footer } from '../Components/Footer.js';
import { navBar } from '../components/Navbar.js';
import data from '../data/dataset.js';
const CardsInfo = (card) => {
  const infoCarta = document.createElement("section");
  const carta = data.find(x => x.id === card.id)
  //console.log(card.id);
  const cardElement = document.createElement("div");
  cardElement.className = "content containerChat"
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
                <div class="chat-message">
                    <textarea name="message-send" id="message-send" placeholder="type your message"> </textarea>
                    <button class="containerSend btnSend">    
                    <img class="send" src="./img/send-2-svgrepo-com (1).svg" alt="iconSend" />
                    </button>            
                </div>
            </div>
        </div>

    `;



  infoCarta.append(navBar(), cardElement, Footer());
  //title.innerHTML = "Sakura: Cazadora de cartas";

  return infoCarta;
};


export default CardsInfo;