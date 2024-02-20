import { navBar } from '../components/Navbar.js';
import data from '../data/dataset.js';
const navComponent = navBar();
const CardsInfo = () => {
    const infoCarta = document.createElement("section");
    infoCarta.appendChild(navComponent);
    const carta = data.find(x =>x.id === "1")
    const cardElement = document.createElement("div");
    cardElement.className ="containerInfo"
    cardElement.innerHTML = `
        <div class="mainInfoCard">
         <img id="img" class="imgInfo" src=${carta.imageUrl} alt=${carta.name} />
         <div class="container-text">
            <h2 class="nameCard">${carta.name}</h2>       
            <p class="description">${carta.description} Elemento: ${carta.facts.elementEsencial}</p>
         </div>
         </div> 

    `;
    infoCarta.appendChild(cardElement);
    //title.innerHTML = "Sakura: Cazadora de cartas";
;
    return infoCarta;
  };
  
  
  export default CardsInfo;