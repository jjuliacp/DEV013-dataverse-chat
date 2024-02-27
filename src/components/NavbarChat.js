export const navChat = () => {
  const navBarChat = document.createElement("nav");
  navBarChat.innerHTML = `
    <div class="hero navChat">
      <h2 class="navbar-text"> <a href="./" ><img class ="navbar-img"  src="./img/chevron-back-svgrepo-com.svg" ></a> Chat Individual</h2>
    <img src="./img/person-3-fill-svgrepo-com.svg" class="nav-item">
    </div>
   
    `;

  return navBarChat
}
