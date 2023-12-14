const zapasBases = [
  {
    nombre: "White-on",
    imagen: "./assets/zapas0.jpg",
    descripcion: "Zapatillas color blanco con lines negras",
    precio: 78600,
    stock: 23,
    categoria: "Urbanas",
    id: "96656417-7cd9-46f9-9dd6-4db7584c8cbb",
  },
  {
    nombre: "Pinkrun-1",
    imagen: "./assets/zapas23.jpg",
    descripcion: "Zapatillas deportivas rosa con lineas blancas",
    precio: 58600,
    stock: 17,
    categoria: "Deportivas",
    id: "96656417-7cd9-46p9-9dd6-4db7584f8cbb",
  },
  {
    nombre: "CityGrip",
    imagen: "./assets/zapas3.jpg",
    descripcion: "Zapatillas urbanas color aqua",
    precio: 72650,
    stock: 9,
    categoria: "Urbanas",
    id: "96656417-7ud9-46f9-9dd6-4db7584f8cbb",
  },
  {
    nombre: "SkylineGlide",
    imagen: "./assets/zapas2.jpg",
    descripcion: "Zapatillas color blanco con lineas negras y rosas",
    precio: 88.000,
    stock: 41,
    categoria: "Urbanas",
    id: "96656417-7cd9-46f9-9dd6-4dc7584f8cbb",
  },
  {
    nombre: "UrbanBoost",
    imagen: "./assets/zapas4.jpg",
    descripcion: "Zapatillas urbanas color verde",
    precio: 92250,
    stock: 30,
    categoria: "Urbanas",
    id: "96656417-7cd9-46f9-9dd6-4db7584f8clm",
  },
  {
    nombre: "NeoUrbano",
    imagen: "./assets/zapas24.jpg",
    descripcion: "Zapatillas full blancas",
    precio: 76500,
    stock: 29,
    categoria: "Urbanas",
    id: "96656417-7cd9-46f9-9cp6-4db7584f8cbb",
  },
  {
    nombre: "StreetFlow",
    imagen: "./assets/zapas6.jpg",
    descripcion: "Zapatillas color blanco con lineas celestes",
    precio: 91250,
    stock: 35,
    categoria: "Urbanas",
    id: "96656417-7mq9-46f9-9dd6-4db7584f8cbb",
  },
  {
    nombre: "MetroFlex",
    imagen: "./assets/zapas7.jpg",
    descripcion: "Zapatillas estilo vans color negro",
    precio: 75500,
    stock: 27,
    categoria: "Urbanas",
    id: "96656417-7cd9-46f9-9dd6-4dl7584f8cbb",
  },
  {
    nombre: "UrbanStride",
    imagen: "./assets/zapas8.jpg",
    descripcion: "Zapatillas para basquet color blancas",
    precio: 82500,
    stock: 15,
    categoria: "Deportivas",
    id: "96346417-7cd9-46f9-9dd6-4db7584f8cbb",
  },
  {
    nombre: "CityPulse",
    imagen: "./assets/zapas9.jpg",
    descripcion: "Zapatillas color blanco con negro ",
    precio: 98000,
    stock: 3,
    categoria: "Urbanas",
    id: "96656417-7cd9-69f9-9dd6-4db7584f8cbb",
  },
];

const zapatillas =
  JSON.parse(localStorage.getItem("zapatillasDB")) || zapasBases;
localStorage.setItem("zapatillasDB", JSON.stringify(zapatillas));

//solo los primeros 3 personajes
const favorites = zapatillas.slice(0, 3);

//usuario admin
const admin = { username: "admin", password: "admin" };

//funcion para pintar personajes
function renderZPS(coleccion, contenedor) {
  const contenedorToRender = document.getElementById(contenedor);
  // const contenedorToRender2 = document.querySelector("#contenedor_favoritos");
  // const contenedorToRender3 = document.getElementById("contenedor_favoritos");
  contenedorToRender.innerHTML = "";
  for (const pj of coleccion) {
    contenedorToRender.innerHTML += `<div class="card">
                      <img class="card-image"
                          src="${pj.imagen}"
                          alt="${pj.nombre}">
                      <div class="card-content">
                          <h2 class="card-title">${pj.nombre}</h2>
                          <p class="card-description">${pj.descripcion}</p>
                          <p>Precio: ${pj.precio}</p>
                          <p>Stock: ${pj.stock}</p>
                          <p>Categoria: ${pj.categoria}</p>
                          </div>
                  </div>`;
  }
}

//contenedor principal
const main_container = document.getElementById("main_container");

//lo primero que va a hacer el programa
main_container.innerHTML = ` <section class="main_container_welcome">
  <h1>Zapatillas UrbanStride</h1>
  <p>Zapatillas UrbanStride es una pagina de zapatillas donde podrás encontrar
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
const btn_zapatillas = document.getElementById("boton_zapatillas");

btn_zapatillas.addEventListener("click", (event) => {
  const container = document.getElementById("main_container");
  container.innerHTML = `<section class="main_container_favorites" id="contenedor_zapatillas"></section>`;

  for (const pj of zapatillas) {
    const secondary_container = document.getElementById(
      "contenedor_zapatillas"
    );
    secondary_container.innerHTML += `<div class="card">
                      <img class="card-image"
                          src="${pj.imagen}"
                          alt="${pj.nombre}">
                      <div class="card-content">
                          <h2 class="card-title">${pj.nombre}</h2>
                          <p class="card-description">${pj.descripcion}</p>
                          <p>Precio: ${pj.precio}</p>
                          <p>Stock: ${pj.stock}</p>
                          <p>Categoria: ${pj.categoria}</p>
                          </div>
                  </div>`;
  }
});

//funcionalidad de boton home
const btn_home = document.getElementById("boton_home");

btn_home.addEventListener("click", (event) => {
  const container = document.getElementById("main_container");
  container.innerHTML = ` <section class="main_container_welcome">
    <h1>Zapatillas UrbanStride</h1>
    <p>Zapatillas UrbanStride es una pagina de zapatillas donde podrás encontrar
     la la mejor calidad y precio que buscas.</p>

</section>
<section class="main_container_title">
    <h2>DESTACADAS</h2>
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
      // Continuar con la carga de personajes
      cargaZapatillas();

      // Cambiar el nombre del botón a "Skyn" después de iniciar sesión
      btn_login.innerHTML = "Carga Zapatillas";
    } else {
      alert("Usuario o contraseña incorrectos");
      form_login.reset();
      form_login.elements.username.focus();
    }
  });
});
//pantalla de carga de personajes
function cargaZapatillas() {
  const container = document.getElementById("main_container");
  container.innerHTML = `<article class="login_form">
            <h1>Cargar zapatilla</h1>
              
          <form action="" id="personaje_form">
              <label for="nombre">Ingrese nombre de la zapatilla</label>
              <input type="text" placeholder="Nombre" name="nombre">
              <label for="imagen">Ingrese URL o ruta a la imagen de personaje</label>
              <input type="text" placeholder="URL o Ruta" name="imagen">
              <label for="descripcion">Ingrese descripcion de la zapatilla</label>
              <input type="text" placeholder="Breve descipción" name="descripcion">
              <label for="nivel">Ingrese el precio actul de la zapatilla</label>
              <input type="number" placeholder="75000" name="nivel" min="1" max="1000000">
              <label for="salud">Ingrese el stock actual de la zapatilla</label>
              <input type="number" placeholder="20" name="salud" min="1">
               <label for="clase">Ingrese categoria de la zapatilla</label>
              <input type="text" placeholder="Urbana" name="clase">
              <input type="submit" value="CARGAR" id="">
          </form>
          <h1>Borrar Zapatillas</h1>
         <form action="" id="borrarPersonaje_form">
              <label for="buscarID">Ingrese el id del personaje a borrar</label>
              <input type="text" placeholder="96656327-7cd9-46f9-9dd6-4db7584f8cbb" name="buscarID">
              <input type="submit" value="BORRAR" id="">
          </form>
      </article>
       <table>
                  <thead>
                      <tr>
                          <th>ID</th>
                          <th>Nombre</th>
                          <th>Imagen</th>
                          <th>Descripcion</th>
                          <th>Preci</th>
                          <th>Stock</th>
                          <th>Categoria</th>
                      </tr>
                  </thead>
                  <tbody id="zapatillas_tabla">
                     
                  </tbody>
              </table>`;
  //pintar personajes
  renderTablaZapatillas();
  //evento de cargar personaje
  const personaje_form = document.getElementById("personaje_form");
  personaje_form.addEventListener("submit", (event) => {
    event.preventDefault();

    const personajeNuevo = {
      id: crypto.randomUUID(),
      nombre: personaje_form.elements.nombre.value,
      imagen: personaje_form.elements.imagen.value,
      descripcion: personaje_form.elements.descripcion.value,
      nivel: personaje_form.elements.nivel.valueAsNumber,
      salud: personaje_form.elements.salud.valueAsNumber,
      clase: personaje_form.elements.clase.value,
    };
    zapatillas.push(personajeNuevo);
    const zapatillasJSON = JSON.stringify(zapatillas);
    localStorage.setItem("zapatillasDB", zapatillasJSON);
    renderTablaZapatillas();
    personaje_form.reset();
    personaje_form.elements.nombre.focus();
  });
  //evento de borrar personajes
  const borrarZapatillas_form = document.getElementById("borrarPersonaje_form");
  borrarZapatillas_form.addEventListener("submit", (event) => {
    event.preventDefault();
    const id = borrarZapatillas_form.elements.buscarID.value;
    borrarPersonaje(id);
    borrarZapatillas_form.reset();
    borrarZapatillas_form.elements.buscarID.focus();
  });
}

function renderTablaZapatillas() {
  const container = document.getElementById("zapatillas_tabla");
  container.innerHTML = "";
  const zapatillasInveretido = [...zapatillas];
  zapatillasInveretido.reverse();
  for (const pj of zapatillasInveretido) {
    container.innerHTML += `<tr>
                          <th>${pj.id}</th>
                        <td>${pj.nombre}</td>
                        <td><img width="100px" src="${pj.imagen}"
                          alt="${pj.nombre}"></td>
                        <td>${pj.descripcion}</td>
                        <td>${pj.precio}</td>
                        <td>${pj.stock}</td>
                        <td>${pj.categoria}</td>
                     </tr>`;
  }
}

function borrarPersonaje(id) {
  const index = zapatillas.findIndex((cadaPersonaje) => {
    return cadaPersonaje.id === id;
  });

  if (index === -1) {
    alert("No se encontró el personaje");
  } else {
    zapatillas.splice(index, 1);
    renderTablaZapatillas();
  }

  const zapatillasJSON = JSON.stringify(zapatillas);
  localStorage.setItem("zapatillasDB", zapatillasJSON);
}