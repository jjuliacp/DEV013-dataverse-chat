//funcion de filtrar por elemento
export const elementDataFilter = (data, filterBy, value) => {
  const filterElement = data.filter(
    (elemento) => elemento.facts[filterBy] === value
  );
  return filterElement;
};

//sort asc
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
  /* console.log("value: ", value); */
  /* console.log("data despues del filtro: ", filterDangerous); */
  return filterDangerous;
};

//Estadistica de las cartas por peligro o inofensivas

export const computeStats = (data) => {
  //console.log(data);
  const result = data.reduce(
    (acumulador, carta) => {
      acumulador[
        carta.extraInfo.isDangerous ? "peligrosas" : "inofensivas"
      ] += 1;
      //console.log(acumulador);
      return acumulador;
    },
    { peligrosas: 0, inofensivas: 0 }
  );
  const promPeligrosas = Math.round((result.peligrosas / data.length) * 100); // Math.round() redondear
  const promInofensivas = Math.round((result.inofensivas / data.length) * 100);
  //console.log('El porcentaje de cartas peligrosas son', promPeligrosas);
  //console.log('El porcentaje de cartas inocentes son', promInofensivas);
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
