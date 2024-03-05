export const getApiKey = () => {
  // Implementa el código para obtener la API KEY desde Local Storage

  const key = localStorage.getItem("apikey");
  console.log(key);
  return key;
};

export const setApiKey = (key) => {
  // Implementa el código para guardar la API KEY en Local Storage
  localStorage.setItem("apikey", key);
};
