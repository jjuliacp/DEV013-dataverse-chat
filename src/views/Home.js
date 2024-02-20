import { navBar } from "../components/Navbar.js";
import { Footer } from "../Components/Footer.js";
import data from "../data/dataset.js";

const Home = () => {
  const navBarComponent = navBar();

  const homeView = document.createElement("section"); //contenedor principal de vista home
  homeView.appendChild(navBarComponent);

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

  const filterContainer = document.createElement("div");

  filterContainer.innerHTML = `
  <h3>Cartas Clow</h3>
  <!-- filtros/botones -->
  <div class="container-filtros">
    <div class="container-elementosFilter">
      <label for="element">Filtra por Elemento:</label>
      <select data-testid="select-filter" name="elementEsencial" id="element">
        <option value="">Escoge una opción</option>
        <option value="Climáticos">Climáticos</option>
        <option value="Naturaleza">Naturaleza</option>
        <option value="Dualidad">Dualidad</option>
        <option value="Mágicos">Mágicos</option>
        <option value="Emoción">Emoción</option>
        <option value="Versatil">Versatil</option>
        <option value="Tiempo">Tiempo</option>
      </select>
    </div>
    <div class="container-dangerFilter">
      <label for="danger">Filtrar por Daño:</label>
      <select data-testid="select-filter2" name="isDangerous" id="danger">
        <option value="">Escoge una opción</option>
        <option value="true">Peligrosa</option>
        <option value="false">Inofensiva</option>
      </select>
    </div>
    <div class="container-estadistic">
      <label for="estadisticDanger">Ver % de estadística:</label>
      <select data-testid="select-estadistic" name="estadistic" id="estadisticSelect">
        <option value="">Escoge una opción</option>
        <option value="true">% Cartas capturadas por Sakura</option>
        <option value="false">% Cartas capturadas por Syaoran</option>
      </select>
    </div>
    <div class="container-ordenar">
      <label for="ordenarFilter">Ordenar de:</label>
      <select data-testid="select-sort" name="name" id="ordenarFilter">
        <option value="">Ordena de:</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
    </div>
  </div>
  <p id="text"></p>
  <button data-testid="button-clear" class="reset-btn">Reset</button>`;

  const CardsInfo = document.createElement("section");

  data.forEach((cartas) => {
    CardsInfo.innerHTML += `
  <ul>
    <li class="card" itemscope itemtype="Cards">
    <dl>
    <div class="card-front active">
      <dd class="img-container" itemprop="imagenUrl">
        <img class="img-card" src=${cartas.imageUrl} alt=${cartas.name}>
      </dd>
        <dd class="cardName" itemprop="name">${cartas.name} </dd>
        <dd class="cardDescription" itemprop="shortdescription">${cartas.shortDescription}</dd>
        <button class="card-button">Ver mas</button>
    </div>
    </dl>
    </li>
    </ul>
  `;
  });
  /* CardsInfo.innerHTML+= data.forEach( */
  //title.innerHTML = "Sakura: Cazadora de cartas";

  //Renderizando componentes

  const footerComponent = Footer();

  //Renderizando en Home

  homeView.appendChild(inicio);
  homeView.appendChild(filterContainer);
  homeView.appendChild(CardsInfo);
  homeView.appendChild(footerComponent);

  console.log(Home);

  return homeView;
};

export default Home;
