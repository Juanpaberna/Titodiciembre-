
//base de datos de personajes

const zapasBases = [
    {
      nombre: "White-on",
      imagen:"./assets/zapas0.jpg",
      descripcion: "Zapatillas color blanco con lines negras",
      precio: 78600,
      stock: 23,
      categoria: "Urbanas",
    },
    {
      nombre: "Pinkrun-1",
      imagen: "./assets/zapas23.jpg",
      descripcion: "Zapatillas deportivas negras con blancas",
      precio: 58600,
      stock: 17,
      categoria: "Deportivas",
    },
    {
      nombre: "CityGrip",
      imagen: "./assets/zapas3.jpg",
      descripcion: "Guerrero del clan del Trueno",
      precio: 72650,
      stock: 9,
      categoria: "Urbanas",
    },
    {
      nombre: "SkylineGlide",
      imagen: "./assets/zapas2.jpg",
      descripcion: "Cazadora de criaturas mágicas",
      precio: 88.000,
      stock: 41,
      categoria: "Urbanas",
    },
    {
      nombre: "UrbanBoost",
      imagen: "./assets/zapas4.jpg",
      descripcion: "Mago de la academia Arcana",
      precio: 92250,
      stock: 30,
      categoria: "Urbanas",
    },
    {
      nombre: "NeoUrbano",
      imagen: "./assets/zapas24.jpg",
      descripcion: "Sacerdotisa de la luz",
      precio: 76500,
      stock: 29,
      categoria: "Urbanas",
    },
    {
      nombre: "StreetFlow",
      imagen: "./assets/zapas6.jpg",
      descripcion: "Bárbaro de las tierras salvajes",
      precio: 91250,
      stock: 35,
      categoria: "Urbanas",
    },
    {
      nombre: "MetroFlex",
      imagen: "./assets/zapas7.jpg",
      descripcion: "Bailarina de dagas",
      precio: 75500,
      stock: 27,
      categoria: "Urbanas",
    },
    {
      nombre: "UrbanStride",
      imagen: "./assets/zapas8.jpg",
      descripcion: "Brujo oscuro",
      precio: 82500,
      stock: 15,
      categoria: "Urbanas",
    },
    {
      nombre: "CityPulse",
      imagen: "./assets/zapas9.jpg",
      descripcion: "Paladín de la justicia",
      precio: 98000,
      stock: 3,
      categoria: "Urbanas",
    },
  ];
  
  const zapas =
    JSON.parse(localStorage.getItem("zapasDB")) || zapasBases;

  localStorage.setItem("zapasDB", JSON.stringify(zapas));
  
  //solo los primeros 3 personajes
  const favorites = zapas.slice(0, 3);
  
  //usuario admin
  const admin = { username: "admin", password: "admin" };
  
  //funcion para pintar personajes
  function renderZPS(coleccion, contenedor) {
    const contenedorToRender = document.getElementById(contenedor);
    // const contenedorToRender2 = document.querySelector("#contenedor_favoritos");
    // const contenedorToRender3 = document.getElementById("contenedor_favoritos");
    contenedorToRender.innerHTML = "";
    for (const zps of coleccion) {
      contenedorToRender.innerHTML += `<div class="card">
                      <img class="card-image"
                          src="${zps.imagen}"
                          alt="${zps.nombre}">
                      <div class="card-content">
                          <h2 class="card-title">${zps.nombre}</h2>
                          <p class="card-description">${zps.descripcion}</p>
                          <p>Precio: ${zps.precio}</p>
                          <p>Stock: ${zps.stock}</p>
                          <p>Categoria: ${zps.categoria}</p>
                          </div>
                  </div>`;
    }
  }
  
  //contenedor principal
  const main_container = document.getElementById("main_container");
  
  //lo primero que va a hacer el programa
  main_container.innerHTML = ` <section class="main_container_welcome">
                  <h1>Zapatillas de 4to</h1>
                  <p>Zapatillas de 4to es una pagina de zapatillas donde podrás encontrar
                   la la mejor calidad y precio que buscas.</p>
  
              </section>
              <section class="main_container_title">
                  <h2>DESTACADAS</h2>
              </section>
              <section class="main_container_favorites" id="contenedor_favoritos">
  
              </section>`;
  //lo segundo que va a hacer el programa
  renderZPS(favorites, "contenedor_favoritos");
  
  //funcionalidad boton personajes
  const btn_personajes = document.getElementById("boton_personajes");
  
  btn_personajes.addEventListener("click", (event) => {
    const container = document.getElementById("main_container");
    container.innerHTML = `<section class="main_container_favorites" id="contenedor_personajes"></section>`;
  
    for (const zps of zapas) {
      const secondary_container = document.getElementById(
        "contenedor_personajes"
      );
      secondary_container.innerHTML += `<div class="card">
                      <img class="card-image"
                          src="${zps.imagen}"
                          alt="${zps.nombre}">
                      <div class="card-content">
                          <h2 class="card-title">${zps.nombre}</h2>
                          <p class="card-description">${zps.descripcion}</p>
                          <p>Precio: ${zps.precio}</p>
                          <p>Stock: ${zps.stock}</p>
                          <p>Categoria: ${zps.categoria}</p>
                          </div>
                  </div>`;
    }
  });
  
  //funcionalidad de boton home
  const btn_home = document.getElementById("boton_home");
  
  btn_home.addEventListener("click", (event) => {
    const container = document.getElementById("main_container");
    container.innerHTML = ` <section class="main_container_welcome">
                  <h1>Heroes of 4to</h1>
                  <p>Heroes of 4to es un juego de rol online multijugador masivo en el que podrás crear tu propio
                      personaje y vivir aventuras en un mundo de fantasía medieval.</p>
  
              </section>
              <section class="main_container_title">
                  <h2>DESTACADOS</h2>
              </section>
              <section class="main_container_favorites" id="contenedor_favoritos">
  
              </section>`;
    //lo segundo que va a hacer el programa
    renderZPS(favorites, "contenedor_favoritos");
  });
  
  //funcionalidad de boton login
  const btn_login = document.getElementById("boton_login");
  
  btn_login.addEventListener("click", (event) => {
    const container = document.getElementById("main_container");
    container.innerHTML = `<article class="login_form">
          <form action="" id="form_login">
              <label for="username">Ingrese usuario</label>
              <input type="text" placeholder="Username" name="username">
              <input type="password" placeholder="Password" name="password">
              <input type="submit" value="Login" id="">
          </form>
      </article>`;
    const form_login = document.getElementById("form_login");
    form_login.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const user = {
        username: form_login.elements.username.value,
        password: form_login.elements.password.value,
      };
  
      if (admin.username == user.username && admin.password == user.password) {
        cargaZapatillas();
      } else {
        alert("Usuario o contraseña incorrectos");
        form_login.reset();
        form_login.elements.username.focus();
      }
    });
  });
  
  //pantalla de carga de zapatillas 
  function cargaZapatillas() {
    const container = document.getElementById("main_container");
    container.innerHTML = `<article class="login_form">
          <form action="" id="personaje_form">
              <label for="nombre">Ingrese nombre de personaje</label>
              <input type="text" placeholder="Nombre" name="nombre">
              <label for="imagen">Ingrese URL o ruta a la imagen de personaje</label>
              <input type="text" placeholder="URL o Ruta" name="imagen">
              <label for="descripcion">Ingrese descripcion de personaje</label>
              <input type="text" placeholder="Breve descipción" name="descripcion">
              <label for="nivel">Ingrese el nivel actual de personaje</label>
              <input type="number" placeholder="23" name="nivel" min="1" max="1000">
              <label for="salud">Ingrese la salud actual del personaje</label>
              <input type="number" placeholder="230" name="salud" min="1">
               <label for="clase">Ingrese clase de personaje</label>
              <input type="text" placeholder="Guerrero" name="clase">
              <input type="submit" value="GUARDAR" id="">
          </form>
          <table>
                  <thead>
                      <tr>
                          <th>Nombre</th>
                          <th>Imagen</th>
                          <th>Descripcion</th>
                          <th>Nivel</th>
                          <th>Salud</th>
                          <th>Clase</th>
                          <th>Eliminar</th>
                      </tr>
                  </thead>
                  <tbody id="personajes_tabla">
                   
                  </tbody>
              </table>
      </article>`;
    const personaje_form = document.getElementById("personaje_form");
    personaje_form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const zapatillaNueva = {
        nombre: personaje_form.elements.nombre.value,
        imagen: personaje_form.elements.imagen.value,
        descripcion: personaje_form.elements.descripcion.value,
        nivel: personaje_form.elements.nivel.valueAsNumber,
        salud: personaje_form.elements.salud.valueAsNumber,
        clase: personaje_form.elements.clase.value,
      };
      personajes.push(zapatillaNueva);
      const zapasJSON = JSON.stringify(zapas);
      localStorage.setItem("zapasDB", zapasJSON);
    });
  }
  
  function renderTablaPersonajes() {
    const container = document.getElementById("main_container");
    container.innerHTML += ``;
  }
