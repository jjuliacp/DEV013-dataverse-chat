/* import data from "../data/dataset.js"; */

const ChatGrupal = () => {
  const chatG = document.createElement("section");

  /* const carta = data.find((x) => x.id === cardId); */

  chatG.innerHTML = `
    <div class="chatGrupal-view">
      <div class="container-gral-contact">
        <div class="container-contact">
          <h3 class="title-contact">Cartas Clow</h3>
          <div class="contain-card">
            <div class="avatar-container">
              <img id="img2" class="img-Avatar" src="./img/sakura-inicio.jpg" alt="ejemploImg" />
            </div>
            <div class="avatar-name">
              <h4 class="name-card">Sakura</h4>
              <h5 class="description-card">Carta del agua</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="chatGrupal">
        <div class="nav-chatGrupal">
          <h3 class="title-chatGrupal">Chat Grupal</h3>
        </div>
        <div class="window-chat">
          <textarea></textarea>          
        </div>
      </div>    
    </div>
    `;

  return chatG;
};

export default ChatGrupal;
