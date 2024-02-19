import { Footer } from "../Components/Footer.js";

const Home = () => {
  const inicio = document.createElement("div");
  inicio.innerHTML = `
<section class="inicio-section container" id="Inicio">
<div class="content-left">
        <h2 class="content-left-tittle">Sakura: Cazadora Mágica</h2>
        <p>
          Sakura debe recapturar las Cartas Clow antes de que desencadenen el
          caos. Las Cartas Clow son un elemento de la serie de manga y anime
          "Cardcaptor Sakura", creada por CLAMP. En la historia, las Cartas
          Clow son cartas mágicas creadas por el poderoso mago Clow Reed. Cada
          carta representa una fuerza mágica única y tiene su propia
          personalidad y habilidades distintivas.
        </p>
      </div>
      <div class="content-right">
        <img class="sakura-img"
          src="./img/sakura-inicio.jpg"
          alt="fotoInicioSakura" />
      </div>
</section>
`;
  //title.innerHTML = "Sakura: Cazadora de cartas";

  //Renderizando componentes

  const footerComponent = Footer();

  //Renderizando en Home

  inicio.appendChild(footerComponent);

  return inicio;
};

export default Home;
