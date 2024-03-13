import { getApiKey } from "./apiKey.js";

export const communicateWithOpenAI = (message, carta) => {
  //Aquí es donde debes implementar la petición con fetch o axios
  // Obtén la clave de API

  const apiKey = getApiKey(); //la funcion getApiKey obtiene la clave API almacenada en el localStorage y la guardo en una const
  /* console.log(apiKey); */
  // console.log(data);

  return fetch("https://api.openai.com/v1/chat/completions", {
    //petición fetch a esa dirección
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + apiKey,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo", //modelo que utilizamos de openAI
      messages: [
        {
          role: "system",
          content: `Eres una Carta Clow : ${carta.name}`, //darle rol del personaje
        },
        {
          role: "user",
          content: message,
        },
      ],
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      /* console.log(data); */ // Hacer algo con los datos, en este caso, los imprimes en la consola
      return data;
    })
    .catch((error) => {
      console.error("error al hacer la solicitud", error);
      return null;
    });
};
