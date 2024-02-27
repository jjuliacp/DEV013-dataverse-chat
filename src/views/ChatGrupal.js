import data from "../data/dataset.js";
/* import { renderData } from "../lib/dataFunctions.js"; */

const ChatGrupal = () => {
  const chatG = document.createElement("section");
  chatG.className = "view-ChGr";

  const chatGrupalText = document.createElement("div");
  chatGrupalText.className = "text-ChGr";
  const chatGrupalContact = document.createElement("div");
  chatGrupalContact.className = "List-contact-ChGr";

  chatGrupalText.innerHTML = `
      <div class="chatGrupal">
        <div class="nav-chatGrupal">
          <h3 class="title-chatGrupal">Chat Grupal</h3>
        </div>
        <div class="window-chat">
          <textarea></textarea>          
        </div>
      </div>
  `;

  data.forEach((carta) => {
    const divData = document.createElement("div");
    divData.className = "chatGrupal-view";

    divData.innerHTML = `   
      <div class="container-gral-contact">
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
      </div>
      `;

    chatG.appendChild(chatGrupalText);
    chatG.appendChild(chatGrupalContact);

    chatGrupalContact.appendChild(divData);
  });

  return chatG;
};

export default ChatGrupal;
