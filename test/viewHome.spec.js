import Home from "../src/views/Home.js";

const home = Home();

describe("Componente navBar", () => {
  it("Componente navBar debería mostrarse en el DOM", () => {
    expect(home.innerHTML).toContain("<nav>");
  });
});

describe("Componente Footer", () => {
  it("Componente Footer debería existir y estar definido", () => {
    expect(home.innerHTML).toContain("<footer>");
  });
});

describe("evento de resetear", () => {
  it("restablecer los filtros al hacer clic al boton", () => {
    const home = Home();
    const resetBtn = home.querySelector('[data-testid="button-clear"]');
    const selectFilter = home.querySelector('[data-testid="select-filter"]');
    selectFilter.value = "Climáticos";

    resetBtn.click();
    expect(selectFilter.value).toBe("");
  });
});

describe("verificar filter bar", () => {
  it("verificar que se pinte los filtros", () => {
    const home = Home();
    const filterContainer = home.querySelector('.filterContainer');
    const container = filterContainer.querySelector('.container-elementosFilter');
    expect(container).toBeDefined();
  });
});

describe("evento change de los filtros", () => {
  it("se activa el evento de cambio al darle click", () => {
    const data = [
      { elementEsencial: 'value1' },
      { elementEsencial: 'value2' }
    ];
    const selectElement = document.createElement('select');
    selectElement.id = 'selectElement';
    const cardsInfo = document.createElement('div');
    cardsInfo.id = 'cardsInfo';

    // Simula la función de filtrado de datos y de renderizado
    const elementDataFilterMock = jest.fn((data, key, value) => data.filter(item => item[key] === value));
    const renderDataMock = jest.fn(data => JSON.stringify(data));
    selectElement.addEventListener('change', (event) => {
      const filteredData = elementDataFilterMock(data, "elementEsencial", event.target.value);
      cardsInfo.innerHTML = renderDataMock(filteredData);
    });
    const event = new Event('change');
    selectElement.dispatchEvent(event)

    expect(elementDataFilterMock).toHaveBeenCalledWith(data, "elementEsencial", expect.any(String))
    expect(renderDataMock).toHaveBeenCalledWith(expect.any(Array));
  });
});