import { communicateWithOpenAI } from "../src/lib/openAIApi.js";

describe("communicateWithOpenAI", () => {
  test("communicateWithOpenAI debería enviar una solicitud a la Api de OpenAI y devolver los datos exitosamente", async () => {
    const data = await communicateWithOpenAI("Este es un mensaje", {
      id: "carta 1",
    });
    expect(data).toStrictEqual({ response: "datos" });
  });
});
