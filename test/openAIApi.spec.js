/* eslint-disable */
import { communicateWithOpenAI } from "../src/lib/openAIApi.js";
describe("communicateWithOpenAI", () => {
  test("communicateWithOpenAI debería enviar una solicitud a la Api de OpenAI y devolver los datos exitosamente", () => {
    const respuesta = { choices: [{ message: { content: 'Soy  una respuestaa' } }], ok: true }
    global.fetch = jest.fn(() => Promise.resolve({ ok: true, json: () => Promise.resolve(respuesta) })

    )
    const data = communicateWithOpenAI("Este es un mensaje", {
      id: "carta 1",
    });
    expect(typeof (data)).toEqual('object');
  });
  test("deberia el error que devuelve",  () => {
    global.fetch = jest.fn(() => Promise.reject(new Error("Error en la solicitud")));
    try {
       communicateWithOpenAI("Hola", { id: "carta 1" });
    } catch (error) {
      expect(error).toBeNull();
    }
  });
});
