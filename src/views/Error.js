import { Footer } from "../Components/Footer.js";
import { navBar } from "../components/Navbar.js";

const Error = () => {
  const errorView = document.createElement("section"); //contenedor principal de vista error

  const errorPage = document.createElement("div");
  errorPage.innerHTML = `
    <section class="error-container" id="error">
        <div class="error-contain">
            <img class="img-404" src="./img/error404.png" alt="fotoError404" />
            <h1 class="text-404">PAGE NOT FOUND</h1>
        </div>
        <div class="img-error-kero">
            <img class="kerberos" src="./img/kerberos.png" alt="fotoErrorKero" />            
        </div>
    </section>
    `;
  //title.innerHTML = "Sakura: Cazadora de cartas";

  errorView.append(navBar(), errorPage, Footer());

  return errorView;
};

export default Error;
