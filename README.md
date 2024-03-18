# Dataverse Chat Sakura

## Índice

- [1. Resumen del proyecto](#1-resumen-del-proyecto).
- [2. Consideraciones generales](#2-consideraciones-generales)
- [3. Funcionalidades](#3-funcionalidades)
- [4. Historias de usuaria](#4-Historias-de-usuaria)
- [5. Diseño de la Interfaz de Usuaria](#5-Diseño-de-la-Interfaz-de-Usuaria)
- [6. Generación de los datos](#6-Generación-de-los-datos)
- [7. Prompt utilizado](#7-Prompt-utilizado)
- [8. Producto Final](#8-Producto-Final)

---

## 1. Resumen del proyecto

En este proyecto convertimos la aplicación desarrollada en Dataverse en una Single Page Application (SPA), manteniendo las funcionalidades de visualizar, filtrar, ordenar y calcular alguna estadística, adicionando una nueva vista para consultar información detallada de cada personaje/entidad y agregando la posibilidad de interactuar con ellos o con todos a la vez a través de un sistema de chat impulsado por la API de OpenAI.
Los objetivos generales que se trabajaron en este proyecto son los siguientes:

- El desarrollo de una Single Page Application (SPA)
- Aplicación de los conceptos de responsividad en el desarrollo de las vistas
- Implementación de un router para la navegación entre las diferentes vistas de la aplicación
- Integración de una API externa
- Comprensión y entendimiento de la asincronía en JavaScript
- Creación de una suite de pruebas unitarias que permitan testear el código asíncrono

## 2. Consideraciones generales

- Este proyecto se realizó en dupla.
- El rango de tiempo estimado en el que se completó este proyecto fue de de 6 Sprints.
- La lógica del proyecto esta implementada completamente en JavaScript (ES6+), HTML y CSS. No se usó ningún tipo de frameworks o librerías de CSS y JS.
- Se reutilizó cierta parte del código del proyecto Dataverse, sobre todo el dataset. Además, se refactorizó el código para que sea más modular y reutilizable implementando nuevas funciones para lograr las funcionalidades requeridas en este proyecto.

## 3. Funcionalidades

Aquí definimos en más detalle las funcionalidades que tiene:

**_Filtrado_** :

Los usuarios tendrán la capacidad de explorar y filtrar las cartas disponibles en la plataforma de acuerdo con sus preferencias individuales. En particular, la opción de filtrar las cartas según su elemento, ya sea climático, relacionado con la naturaleza, de dualidad, mágico, emocional, versátil o vinculado al tiempo. Asimismo, la capacidad de filtrar las cartas según su nivel de peligrosidad, permitiéndoles distinguir entre cartas peligrosas e inofensivas.

La implementación de esta funcionalidad brindará a los usuarios la flexibilidad para personalizar su experiencia, centrándose en los elementos o características que más les interesen en un momento dado. Esto contribuirá a la eficiencia en la exploración y facilitará la búsqueda de cartas específicas dentro de la plataforma

**_Ordenamiento_** :

Los usuarios tendrán de la capacidad de ordenar las cartas proporcionadas de manera ascendente (A-Z) o descendente (Z-A), según sus preferencias individuales. Esta funcionalidad les permitirá realizar búsquedas más efectivas y personalizadas, facilitando la localización de cartas específicas de acuerdo con sus necesidades y preferencias.

**_Estadísticas_** :

Adicionalmente a las funcionalidades previamente mencionadas, los usuarios tendrán la capacidad de acceder a estadísticas específicas de las cartas. Estas estadísticas incluirán el porcentaje de cartas catalogadas como peligrosas y el porcentaje correspondiente a cartas inofensivas. Asimismo, se proporcionará información detallada sobre el porcentaje de cartas capturadas por 'Sakura' y el porcentaje correspondiente a las cartas capturadas por 'Syaoran'. Esta característica ofrecerá a los usuarios una visión más detallada y completa de las dinámicas y resultados relacionados con las cartas dentro de la plataforma.

Funcionalidades mínimas del proyecto:

- La aplicación debe ser responsive
- La aplicación debe ser una SPA con múltiples vistas
- Implementación de un sistema de enrutamiento que permita la navegación dentro de la aplicación.
- Cada vista de la aplicación debe ser cargada dinámicamente mediante JavaScript.
- La URL se debe actualizar de manera acorde a la vista cargada al igual que el title del documento (la pestaña del navegador).
- La aplicación debe ser capaz de cargar la vista correspondiente a la URL actual al iniciar la aplicación.
- La aplicación debe mantener las funcionalidades de Dataverse: visualizar, filtrar, ordenar y calcular estadística de la data.
- Al hacer clic en una tarjeta de personaje/entidad, la aplicación debe redirigirse a una vista con su propia URL que muestre la información detallada sobre ese personaje/entidad en particular
- La aplicación debe permitir a la usuaria configurar la API Key para interactuar con la API de Open AI
- Usando la API de Open AI, la aplicación debe permitir al usuario interactuar con un personaje/entidad a través de un chat.
- La aplicación debe permitir al usuario interactuar de manera simultánea con todos los personajes/entidades a través de un chat
- La aplicación informa a la usuaria los errores que puedan surgir al interactuar con la API, como por ejemplo alcanzar la cuota de tokens por minuto o cualquier otro error relacionado con la API

## 4. Historias de usuaria

Además, se han creado historias de usuario para abordar cada funcionalidad, facilitando la planificación de los sprints al desglosar cada historia en tareas específicas.

**_Historia de usuario 1_** :

Visualizar la información de la carta en una nueva vista

- Tareas:

  - Crear una nueva vista en HTML para mostrar la información detallada de cada carta.
  - Diseñar y maquetar la estructura de la vista de manera clara y legible.
  - Implementar la lógica JavaScript para recuperar y mostrar la información de la carta seleccionada.

- Criterio de aceptación:

  - La nueva vista debe ser accesible desde la interfaz principal de la aplicación.
  - Al seleccionar una carta, se debe mostrar la información detallada correspondiente en la nueva vista.
  - La información detallada de la carta debe incluir todos los atributos relevantes y ser fácilmente legible para el usuario.

- Definición de terminado:

  - La vista muestra la información detallada de cada carta de manera clara y legible.
  - Al seleccionar una carta, se muestra su información detallada de manera precisa y completa.

**_Historia de usuario 2_** :

Interactuar con la carta favorita

- Tareas:

  - Implementar la funcionalidad en JavaScript para permitir la interacción del usuario con su carta favorita.
  - Diseñar y agregar controles de interacción (por ejemplo, botones o menús desplegables) para seleccionar la carta favorita.
  - Programar las acciones específicas que el usuario puede realizar con su carta favorita (por ejemplo, guardar, compartir, etc.)

- Criterio de aceptación:

  - El usuario puede seleccionar fácilmente su carta favorita desde la interfaz principal de la aplicación.
  - Se deben proporcionar opciones claras para interactuar con la carta favorita (por ejemplo, botones con etiquetas descriptivas).
  - Las acciones realizadas con la carta favorita (como guardar o compartir) se ejecutan correctamente y sin errores.

- Definición de terminado:

  - El usuario puede seleccionar su carta favorita de manera intuitiva y sin complicaciones.
  - Las acciones realizadas con la carta favorita se ejecutan correctamente y proporcionan el resultado esperado.

**_Historia de usuario 3_** :

Chatear con todas las cartas a la vez

- Tareas:

  - Integrar la API de OpenAI para habilitar el chat con las cartas.
  - Diseñar la interfaz de usuario para mostrar el chat con todas las cartas de manera clara y legible.
  - Implementar la funcionalidad JavaScript para enviar y recibir mensajes a través del chat con todas las cartas.

- Criterio de aceptación:

  - El usuario puede iniciar una conversación con todas las cartas de manera sencilla desde la interfaz principal de la aplicación.
  - Los mensajes enviados y recibidos a través del chat con todas las cartas se muestran correctamente y en tiempo real.
  - La interfaz de usuario del chat es intuitiva y fácil de usar para el usuario.

- Definición de terminado:

  - El chat con todas las cartas se integra sin problemas en la interfaz principal de la aplicación.
  - Los mensajes enviados y recibidos se muestran correctamente y en tiempo real en el chat.
  - La interfaz de usuario del chat es clara y fácil de usar para el usuario.

**_Historia de usuario 4_** :

Ingresar la clave de API Key para poder chatear.

- Tareas:

  - Diseñar e implementar un formulario en HTML para que el usuario pueda ingresar su clave de API Key.
  - Validar la clave ingresada para asegurar que sea válida y aceptable por la API de OpenAI.
  - Almacenar la clave de API Key de manera segura y persistente en el navegador del usuario.

- Criterio de aceptación:

  - El formulario para ingresar la clave de API Key es fácilmente accesible desde la interfaz principal de la aplicación.
  - Se proporcionan indicaciones claras sobre cómo obtener y dónde ingresar la clave de API Key.
  - La clave de API Key se valida correctamente y se almacena de manera segura para su uso futuro.

- Definición de terminado:

  - El formulario para ingresar la clave de API Key es fácil de encontrar y utilizar para el usuario.
  - La clave de API Key ingresada se valida correctamente antes de ser almacenada y utilizada por la aplicación.

### 5. Diseño de la Interfaz de Usuaria

**_Prototipo de baja fidelidad_** :

![Image20240208133838](https://github.com/Elisantib/DEV013-text-analyzer/assets/142262726/01459057-0db1-4bf9-b2a7-cbc8978a1401)

![Image20240208133924](https://github.com/Elisantib/DEV013-text-analyzer/assets/142262726/fe1d7733-62a4-4241-8463-e55e8f9fad1c)

![Image20240208133932](https://github.com/Elisantib/DEV013-text-analyzer/assets/142262726/b08c3522-350c-4679-8f92-076fcd34bfad)

**_Prototipo de alta fidelidad_** :

![home1](https://github.com/Elisantib/DEV013-text-analyzer/assets/142262726/8042cf55-3fad-4149-81f7-8cd2bea03113)
![Home2](https://github.com/Elisantib/DEV013-text-analyzer/assets/142262726/fe884250-1a1c-4523-aea1-9b8ef3f72b90)
![home3](https://github.com/Elisantib/DEV013-text-analyzer/assets/142262726/a2240442-87e6-45dd-a87c-5961002145dc)

![cardinfo](https://github.com/Elisantib/DEV013-text-analyzer/assets/142262726/f7ad0776-25b1-410e-8cf0-31386e3bd4aa)

![chatgrupal](https://github.com/Elisantib/DEV013-text-analyzer/assets/142262726/ec9d8a64-d210-4e33-8546-a31188c1c81c)

![chatind](https://github.com/Elisantib/DEV013-text-analyzer/assets/142262726/23ced1b9-42fd-4ea7-8a73-6274fb132359)

![error](https://github.com/Elisantib/DEV013-text-analyzer/assets/142262726/17b915e0-cbc2-4492-8121-d66204695f29)

![apikey](https://github.com/Elisantib/DEV013-text-analyzer/assets/142262726/c802cb6a-fce9-4dcb-abff-0238ed193ad4)

![mobile](https://github.com/Elisantib/DEV013-text-analyzer/assets/142262726/5353aa73-479d-4aac-9723-886f16ed2f86)

![mobile2](https://github.com/Elisantib/DEV013-text-analyzer/assets/142262726/84a8b88f-0dd9-4441-8c35-194596f7bd2b)

## 6. Generación de los datos

Se generaron los datos con la temática de Cartas Clow del anime de Sakura Card Captor. Se utilizó el chatgpt para generarlos en el cual obtuvimos 1 array con 24 objetos con las siguientes propiedades a considerar:

- `id`: Identificador único (no pueden haber dos elementos con el mismo `id`).
  Debe ser un string de no más de 32 characteres, en minúscula, compuesto solo
  por letras, números, underscore (`_`) o guión (`-`).
- `name`: El nombre del personaje, país, película, etc.
- `shortDescription`: Descripción corta del elemento. Esta descripción deberá
  tener como máximo 20 palabras.
- `description`: Descripción extendida del elemento. Esta descripción deberá
  tener entre 80 y 100 palabras. Al momento de mostrar este dato en pantalla
  puedes truncarlo para que no ocupe tanto espacio.
- `imageUrl`: URL de la imagen. Esta imagen será generada a través de alguna
  herramienta basada en inteligencia artifical. Una vez generada la imagen,
  y guardada en tu repo, deberás agregar la URL en este campo.
- `facts`: Un objeto con al menos **3** "hechos" o "info" sobre este elemento, en
  formato `"nombre": "valor"`, por ejemplo:

  ```json
  "facts": {
    "elementEsencial": "Climáticos",
    "powerFul": "Control del viento",
    "cardType": "Magia"
  }
  ```

  Los _nombres de las propiedades_, deben estar en formato _camelCase_.
  Por ejemplo **ninguno** de los siguientes nombres sería válido:

  ```json
  "facts": {
    "elementEsencial": "Climáticos",
    "powerFul": "Control del viento",
    "cardType": "Magia"
  }
  ```

  Los _valores de las propiedades_, sólo pueden ser de tipo `number`, `boolean`
  o un `string` de no más de 64 caracteres (este **no** tiene restricciones sobre
  el tipo de caracteres que puede contener).

- `extraInfo`: Y por último un campo libre opcional, similar a `facts`. Aquí se coloca cualquier otro tipo de información.

## 7. Prompt utilizado

![1captura](https://github.com/Elisantib/DEV013-text-analyzer/assets/142262726/9f0c06f2-01be-44d6-87fa-0f406de6a2d6)

![captura](https://github.com/Elisantib/DEV013-text-analyzer/assets/142262726/970d530a-b986-402b-9f18-9686ab2c7ada)

## 8. Producto Final

## 9. Prueba-borrar despues

![1 Home](https://github.com/Elisantib/DEV013-text-analyzer/assets/142262726/bfb24a2b-4888-46e8-9a68-cd18216e5c8a)

![2 Home](https://github.com/Elisantib/DEV013-text-analyzer/assets/142262726/8e75b041-c122-4606-8218-e820fcd2a5c7)

![3 Home](https://github.com/Elisantib/DEV013-text-analyzer/assets/142262726/15626ae2-91f1-482e-99e1-c8cb7899a729)

![4 Home](https://github.com/Elisantib/DEV013-text-analyzer/assets/142262726/8b1e1893-204f-49de-98cb-3cf074de6e02)

![5 ChatGrupal](https://github.com/Elisantib/DEV013-text-analyzer/assets/142262726/1c1239cf-2828-4430-9101-2a681c31e968)

![6 ApiKey](https://github.com/Elisantib/DEV013-text-analyzer/assets/142262726/555ba442-9245-4e05-a9f4-1bd285a53e17)
