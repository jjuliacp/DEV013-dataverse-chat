let ROUTES = {}; // objeto que mapea la  ruta de nuestro sitio. almacenar la info sobre las rutas de tu SPA
let rootEl = ""; // referencia al elemento html en donde se dibuja el contenido/ variable almacena el elemento raiz el contenido cambiara o aparecera

export const setRootEl = (element) => {
  // funcion para establecer el elemento raiz del router -  funcion como contenedero de las vistas
  rootEl = element; // validar si el es un objeto html
};

export const setRoutes = (routes) => {
  // asigna valor al parametro routes al objeto ROUTES
  // assign ROUTES - asignar
  if (typeof routes === "object") {
    if (routes["/error"]) {
      ROUTES = routes;
    }
  }
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
};

const renderView = (pathname, props = {}) => {
  // funcion para renderizar una vista en elemento root.
  // clear the root element -borrar el elemento root
  const root = rootEl;
  root.innerHTML = "";
  // find the correct view in ROUTES for the pathname
  /* console.log(pathname); */
  if (ROUTES[pathname]) {
    const { component, title } = ROUTES[pathname];
    //console.log(component);
    //Desetructuración para acceder a las propiedades del pathname
    const template = component(props);

    document.title = title;
    /* console.log(template); */
    root.appendChild(template); // add the view element to the DOM root element
  } else {
    // in case not found render the error view
    root.appendChild(ROUTES["/error"](props));
  }

  // render the correct view passing the value of props
};

export const navigateTo = (pathname, props = {}) => {
  // update window history with pushState
  const URLvisited = window.location.hostname + pathname;
  history.pushState({}, "", URLvisited);
  // render the view with the pathname and props
  renderView(pathname, props);
};

export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
  renderView(location);
};
