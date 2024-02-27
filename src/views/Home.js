import { navBar } from "../components/Navbar.js";
import { Footer } from "../Components/Footer.js";
import data from "../data/dataset.js";
import { elementDataFilter, renderData, sortData, dangerousDataFilter, computeStats, percent } from "../lib/dataFunctions.js";

const Home = () => {
  const homeView = document.createElement("section"); //contenedor principal de vista home
  const content = document.createElement("div");
  content.className = "contentHome"
  const inicio = document.createElement("div");
  inicio.id = "Inicio";
  inicio.className = "inicioContainer";
  inicio.innerHTML = `
  <div class="contentPortada">
    <h2 class="title">Sakura: Cazadora Mágica</h2>
    <p class="description">
      Sakura debe recapturar las Cartas Clow antes de que desencadenen el caos. Las Cartas Clow son un elemento de la serie de manga y anime "Cardcaptor Sakura", creada por CLAMP. En la historia, las Cartas Clow son cartas mágicas creadas por el poderoso mago Clow Reed. Cada carta representa una fuerza mágica única y tiene su propia personalidad y habilidades distintivas.
    </p>
  </div>
    <img class="sakuraImg" src="./img/sakura-inicio.jpg" alt="fotoInicioSakura" />
  `;

  const filterContainer = document.createElement("div");
  filterContainer.className = "filterContainer";
  filterContainer.id = "Cartas"
  filterContainer.innerHTML = `
  <h3 class="title cartasClow">Cartas Clow</h3>
  <!-- filtros/botones -->
  <div class="cartasContainer">
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
  <button data-testid="button-clear" class="reset-btn button-common">Reset</button>`;

  let cardsData = data; // variable de la data original  - variable global
  const cardsInfo = document.createElement("div");   // contenedor de cartas (o elementos HTML) que se generarán dinámicamente.
  cardsInfo.className = "cartasContainer";
  cardsInfo.innerHTML = renderData(data)    //  colocándolo dentro de este contenedor, el html dinamico generado.


  //-------Botón de VerMas----------

  //--------- filtrado elementos-------
  const selectElement = filterContainer.querySelector('[data-testid="select-filter"]');
  selectElement.addEventListener("change", (event) => {
    const filteredData = elementDataFilter(data, "elementEsencial", event.target.value); //datos que se imprime
    cardsData = filteredData; // asigno nuevo valor de data filtrada
    // console.log(cardsData);
    cardsInfo.innerHTML = renderData(cardsData) //  colocándolo dentro de cardsinfo, la data filtrada renderizada.
  });

  //---------- filtrado daño-------------
  let filterDangerous = []; // data filtrada
  const selectDangerous = filterContainer.querySelector('[data-testid="select-filter2"]');
  const text = filterContainer.querySelector('#text') // para mostrar estadisticas
  selectDangerous.addEventListener("change", () => {
    const selected = selectDangerous.options[selectDangerous.selectedIndex].value;
    filterDangerous = dangerousDataFilter(data, "isDangerous", selected);
    cardsData = filterDangerous;
    const selectedContent = selectDangerous.options[selectDangerous.selectedIndex].textContent; // data + campo que filtro y el valor que quiero filtrar
    if (selectedContent === 'Inofensiva') {
      text.textContent = `El  ${computeStats(data).promInofensivas}% de cartas son inofensivas` // ${} insertar valores de variables o expresiones dentro de una cadena de texto.    } else {
      text.textContent = `El ${computeStats(data).promPeligrosas}% de cartas son peligrosas`
    }
    cardsInfo.innerHTML = renderData(cardsData);// sobrescribir la data filtrada
  });

  // ---------- filtro por capturado

  let filterCapturedPercent = []; // data filtrada
  const selectCaptured = filterContainer.querySelector('[data-testid="select-estadistic"]');
  selectCaptured.addEventListener("change", () => {
    filterCapturedPercent = percent(data, "capturedBySyaoran");
    const selectIndex = selectCaptured.options[selectCaptured.selectedIndex].textContent;
    if (selectIndex === "% Cartas capturadas por Sakura") {
      text.textContent = `El porcentaje de cartas capturadas por Sakura es ${filterCapturedPercent.percentSakura}%`;
    } else {
      text.textContent = `El porcentaje de cartas capturadas por Syaoran es ${filterCapturedPercent.percentSyaoran}%`;
    }
  });

  // ------------- ordenar--------  
  const sortOrden = filterContainer.querySelector('[data-testid="select-sort"]');
  sortOrden.addEventListener("change", (e) => {
    const sortedData = sortData(cardsData, "name", e.target.value);
    ///console.log(sortedData);
    cardsData = sortedData;
    cardsInfo.innerHTML = renderData(sortedData);

  });

  //--- boton de reseteo--------
  const resetBtn = filterContainer.querySelector('[data-testid="button-clear"]')
  resetBtn.addEventListener('click', () => {
    //console.log(resetBtn);
    cardsData = data;
    cardsInfo.innerHTML = renderData(cardsData);
    selectElement[0].selected = true;
    selectDangerous[0].selected = true;
    sortOrden[0].selected = true;
    text.textContent = "";
  });

  content.appendChild(inicio);
  content.appendChild(filterContainer)
  content.appendChild(cardsInfo)
  homeView.append(navBar(), content, Footer());

  return homeView;
};

export default Home;
