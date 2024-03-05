import { getApiKey } from "./apiKey.js";
import data from "../data/dataset.js";

export const communicateWithOpenAI = async (message, card) => {
  //Aquí es donde debes implementar la petición con fetch o axios
  // Obtén la clave de API

  const apiKey = getApiKey(); //la funcion getApiKey obtiene la clave API almacenada en el localStorage y la guardo en una const
  console.log(apiKey);
  // console.log(data);
  const carta = data.find((x) => x.id === card.id);
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
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
            content: `You are a Carta Clow : ${carta.name}`, //darle rol del personaje
          },
          {
            role: "user",
            content: message,
          },
        ],
      }),
    });

    // Maneja la respuesta
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data; // Devuelve la respuesta para que pueda ser utilizada externamente
    } else {
      console.log("Error al hacer la solicitud:", response.statusText);
      return null; // Devuelve null en caso de error/estado
    }
  } catch (error) {
    console.error("Error al hacer la solicitud:", error);
    return null;
  }
};
