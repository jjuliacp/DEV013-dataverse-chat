export const  renderData = (data) => { // función toma un array de objetos y genera un bloque de HTML para cada objeto
  let cardsHtml ='' ; // se utilizará para acumular el HTML que se generará en el bucle.
  data.forEach((cartas) => {
  cardsHtml +=  `
  <ul >
    <li class="card" itemscope itemtype="Cards">
    <dl>
    <div class="card-front">
      <dd class="img-container" itemprop="imagenUrl">
        <img class="img-card" src=${cartas.imageUrl} alt=${cartas.name}>
      </dd>
        <dd class="cardName" itemprop="name">${cartas.name} </dd>
        <dd class="cardDescription" itemprop="shortdescription">${cartas.shortDescription}</dd>
        <button class="card-button button-common" data-id="${cartas.id}">Ver mas</button>
    </div>
    </dl>
    </li>
    </ul>
  `;
  })
  return cardsHtml
}

//funcion de filtrar por elemento
export const elementDataFilter = (data, filterBy, value) => {
  const filterElement = data.filter(
    (elemento) => elemento.facts[filterBy] === value
  );
  return filterElement;
};

//funcion de ordenado
export const sortData = (data, sortBy, sortOrder) => {
  if (sortOrder === "asc") {
    return data.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }
  if (sortOrder === "desc") {
    return data.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
  }
};

//funcion de filtrar por carta peligrosa o inofensiva

export const dangerousDataFilter = (data, filterBy, value) => {
  const filterDangerous = data.filter(
    (dangerous) => dangerous.extraInfo[filterBy] === value.includes("true")
  );
  return filterDangerous;
};

//Estadistica de las cartas por peligro o inofensivas

export const computeStats = (data) => {
  const result = data.reduce(
    (acumulador, carta) => {
      acumulador[
        carta.extraInfo.isDangerous ? "peligrosas" : "inofensivas"
      ] += 1;
      return acumulador;
    },
    { peligrosas: 0, inofensivas: 0 }
  );
  const promPeligrosas = Math.round((result.peligrosas / data.length) * 100); 
  const promInofensivas = Math.round((result.inofensivas / data.length) * 100);
  return { promPeligrosas, promInofensivas };
};

//Estadistica por captura de carta

export const percent = (data, filterBy) => {
  const filterCaptured = data.filter(
    (captured) => captured.extraInfo[filterBy] === true
  );

  const percentSyaoran = Math.round(
    (filterCaptured.length / data.length) * 100
  );

  const percentSakura = 100 - percentSyaoran;

  return {
    percentSakura,
    percentSyaoran,
  };
};
