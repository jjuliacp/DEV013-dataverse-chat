import { navChat } from '../components/NavbarChat.js';

const ChatIndividual = () => {
  const chatInd = document.createElement("section");
  chatInd.className = "normal"
  const contentChat = document.createElement("div")
  contentChat.innerHTML = `
  <div class="containerIndividual">
    <div class="chat-history">
    <div class="chat-message">
    <textarea name="message-send" id="message-send" placeholder="type your message"> </textarea>
    <button class="containerSend">    
      <img class="send" src="./img/send-2-svgrepo-com (1).svg" alt="iconSend" />
    </button>
    </div>
    </div>
  </div>
      `;

  chatInd.append(navChat(), contentChat)
  return chatInd;
};

export default ChatIndividual;
