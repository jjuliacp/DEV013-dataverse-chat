import { Footer } from "../Components/Footer.js";
import { navBar } from "../components/Navbar.js";

const Error = () => {
  const errorView = document.createElement("section"); //contenedor principal de vista error

  const errorPage = document.createElement("section");
  errorPage.innerHTML = `
    <div class=" contentHome  error-container" id="error">
            <img class="img-404" src="./img/error404.png" alt="fotoError404" />
            <h1 class="text-404">PAGE NOT FOUND</h1>       
            <img class="kerberos" src="./img/kerberos.png" alt="fotoErrorKero" />            
    </div>
    `;
  //title.innerHTML = "Sakura: Cazadora de cartas";

  errorView.append(navBar(), errorPage, Footer());

  return errorView;
};

export default Error;
