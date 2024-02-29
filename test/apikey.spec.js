import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

describe('getApiKey', () => {

  it('debería devolver el valor de la API Key', () => {
    const apikey = 'estoesunakey56565';
    localStorage.setItem("apikey", apikey)          // para establecerlo en el localStorage
    expect(getApiKey()).toBe('estoesunakey56565') // y luego obtenerlo el valor get
  });
});

describe('setApiKey', () => {
  it('debería establecer correctamente la API Key', () => {
    const key = 'estoesunakey56565'
    setApiKey(key)
    expect(localStorage.getItem('apikey')).toBe(key) // verificar que el valor almacenado en el localStorage 
  });
});
