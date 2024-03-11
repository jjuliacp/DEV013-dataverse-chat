export const navBar = () => {
  const nav = document.createElement("nav");
  nav.innerHTML = `
    <div id="nav" class="hero nav">
      <h2 class="navbar-text">
      <img  class ="navbar-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Star_of_Sakura_Card_Captor.svg/2560px-Star_of_Sakura_Card_Captor.svg.png" alt="logoSakura" />
      Sakura Card Captor</h2>
      <ul class="nav-link">
        <li class="nav-item"><a href="./">Inicio</a></li>
        <li class="nav-item"><a href="./#Cartas">Cartas</a></li>
        <a href="/chatGrupal"class="nav-item navBtn">Chat Grupal</a>
        <a href="/apikey" class="navbar-imgGif">
          <img class ="navbar-gifKey" src="./img/llave.gif" alt="llave" />
        </a>
      </ul>
      <a href="#nav" id="open" class="nav_hamburguer"><img src="./img/mingcute_menu-fill.svg" class="nav-icon"></a>
      <a href="#" id="close" class="nav_close"><img src="./img/Vector.svg" class="nav-icon"></a> 
    </div>
   
    `;

  return nav;
};
