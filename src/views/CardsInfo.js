import { navBar } from '../components/Navbar.js';
import data from '../data/dataset.js';
const CardsInfo = (card) => {
    const infoCarta = document.createElement("section");
    const carta = data.find(x => x.id === card.id)
    console.log(card.id);
    const cardElement = document.createElement("div");
    cardElement.className = "content"
    cardElement.innerHTML = `
        <div class="mainInfoCard">
            <img id="img" class="imgInfo" src=${carta.imageUrl} alt=${carta.name} />
            <div class="container-text">
                <h2 class="title">${carta.name}</h2>
                <p class="description">${carta.description} 
                    <br><strong>Elemento:</strong> ${carta.facts.elementEsencial} 
                    <br><strong>Poder:</strong>  ${carta.facts.powerFul}
                </p>
                <button id="modal"  class="btnChat button-common">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round"stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.7994 18.3704L23.8013 18.373C24.1307 18.8032 24.2888 20.2316 22.0258 19.9779C21.3596 19.9033 20.4282 19.7715 19.3088 19.3471C18.5551 19.0613 17.8986 18.7026 17.3584 18.3522C16.4699 18.7098 15.5118 18.9296 14.5113 18.9857C13.1436 20.8155 10.9602 22 8.50001 22C7.69152 22 6.91135 21.8717 6.17973 21.6339C5.74016 21.8891 5.24034 22.1376 4.68789 22.3471C3.56851 22.7715 2.63949 22.9297 1.97092 22.9779C1.47028 23.014 1.11823 22.9883 0.944098 22.9681C0.562441 22.9239 0.219524 22.7064 0.072134 22.3397C-0.0571899 22.0179 -0.0104055 21.6519 0.195537 21.3728C0.448192 21.0283 0.680439 20.6673 0.899972 20.3011C1.32809 19.5868 1.74792 18.8167 1.85418 17.9789C1.30848 16.9383 1.00001 15.7539 1.00001 14.5C1.00001 11.5058 2.75456 8.92147 5.29159 7.71896C6.30144 3.85296 9.81755 1 14 1C18.9706 1 23 5.02944 23 10C23 11.3736 22.6916 12.6778 22.1395 13.8448C21.9492 15.5687 22.8157 17.0204 23.7994 18.3704ZM7.00001 10C7.00001 6.13401 10.134 3 14 3C17.866 3 21 6.13401 21 10C21 11.1198 20.7378 12.1756 20.2723 13.1118C20.2242 13.2085 20.1921 13.3124 20.1772 13.4194C19.9584 14.9943 20.3278 16.43 21.0822 17.8083C19.9902 17.5451 18.9611 17.0631 18.0522 16.4035C17.7546 16.1875 17.3625 16.1523 17.0312 16.3117C16.1152 16.7525 15.0879 17 14 17C10.134 17 7.00001 13.866 7.00001 10ZM5.00353 10.2543C5.11889 14.4129 8.05529 17.8664 11.9674 18.7695C11.0213 19.5389 9.8145 20 8.50001 20C7.7707 20 7.07689 19.8586 6.44271 19.6026C6.14147 19.481 5.79993 19.5133 5.52684 19.6892C5.08797 19.972 4.56616 20.2543 3.9788 20.477C3.58892 20.6248 3.23263 20.7316 2.91446 20.8083C3.24678 20.2012 3.58332 19.4779 3.73844 18.7971C3.81503 18.461 3.8572 18.1339 3.87625 17.8266C3.88848 17.6293 3.84192 17.4327 3.74245 17.2618C3.27058 16.451 3.00001 15.5086 3.00001 14.5C3.00001 12.7904 3.78 11.263 5.00353 10.2543Z" fill="#ffffff">
                </path> 
                </g>
                </svg>Chatear</button>
            </div>
    
        </div>
        <dialog id="dialog"> 
            <div class="chat">
                <div class="chat-header"> 
                    <img id="img" class="img-chat" src=${carta.imageUrl} alt=${carta.name} />          
                    <h2 class="chat-with">${carta.name} </h2>
                    <h2 class="chat-with">${carta.shortDescription}</h2>
                    <a href="#" id="close" class="nav_close"><img src="./img/Vector.svg" class="navClose"></a> 
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
        </dialog> 

    `;

    const dialog = cardElement.querySelector('#dialog');
    const modal = cardElement.querySelector("#modal");
    modal.addEventListener('click', (e) => {
        dialog.showModal();

    })

    infoCarta.append(navBar(), cardElement);
    //title.innerHTML = "Sakura: Cazadora de cartas";

    return infoCarta;
};


export default CardsInfo;