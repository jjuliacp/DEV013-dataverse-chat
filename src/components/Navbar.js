export const navBar = () => {
    const nav = document.createElement("nav");
    nav.className="nav-container"
    nav.innerHTML = 
    `
    <div class="navbar-logo">
        <img class ="navbar-img" 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Star_of_Sakura_Card_Captor.svg/2560px-Star_of_Sakura_Card_Captor.svg.png" 
        alt="logoSakura" />
        <h2 class="navbar-text">Sakura Card Captor</h2>
        <a href="#nav" id="open" class="nav_hamburguer"><img src="./img/mingcute_menu-fill.svg" class="nav-icon"></a>
       
    </div>
    <div class="navbar-icon-menu" >
    <a href="#nav" id="close" class="nav_close"><img src="./img/mingcute_menu-fill.svg" class="nav-icon"></a>  
        <ul class="nav-list">
            <li class="nav-links"><a href="#Inicio">Inicio</a></li>
            <li class="nav-links"><a href="#Cartas">Cartas</a></li>
            <li class="nav-links"><a href="#Chat">Chat</a></li>
        </ul>
   </div>
   
   
    `;
    
// const open = document.querySelector("#open");
// const close = document.querySelector("#close");

// open.addEventListener("click",()=>{
//   nav.classList.add("visible");
// });
// close.addEventListener("click", ()=>{
//   nav.classList.remove("visible")
// });
  
    return nav
}
