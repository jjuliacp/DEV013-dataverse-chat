const ApiKey = () => {
    const contenido = document.createElement("div");
    contenido.innerHTML = `
  <section>
  <h1>API KEY ADMIN</h1>
  <input type="password" id="password" placeholder ="Ingresa aqui tu api key..." name="password">
  <input type="submit" value="Enviar"/>
  </section>
  `;
    //title.innerHTML = "Sakura: Cazadora de cartas";
  
    return contenido;
  };
  
  export default ApiKey;