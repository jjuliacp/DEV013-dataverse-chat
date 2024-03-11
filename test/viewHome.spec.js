/* import { Footer } from "../src/Components/Footer.js";.*/
/* import { navBar } from "../src/components/Navbar.js"; */
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
