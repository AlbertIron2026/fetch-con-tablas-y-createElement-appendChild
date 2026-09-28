// Asignación de constantes

const cocheURL = "http://localhost:8080/coches";

// Elementos HTML
const datosCoche = document.getElementById("datosCoche");
const datosCocheTabla = document.getElementById("datosCocheTabla");
const listaDOM = document.getElementById("listaDOM");
const tablaDOM = document.getElementById("tablaDOM");



// FETCH

fetch(cocheURL)

  // Convertimos la respuesta HTTP a JSON
  .then((respuesta) => respuesta.json())

  .then((data) => {

    console.log("todo:", data);



    // 1. LISTA CON innerHTML

    data.forEach((coche) => {

      const precioFormateado = coche.precio.toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR"
      });

      datosCoche.innerHTML += `
        <div>
          <h3>${coche.marca} ${coche.modelo}</h3>
          <p>ID: ${coche.id}</p>
          <p>Precio: ${precioFormateado}</p>
        </div>
        <hr>
      `;
    });


    // 2. TABLA CON innerHTML
   
    data.forEach((coche) => {

      const precioFormateado = coche.precio.toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR"
      });

      datosCocheTabla.innerHTML += `
        <tr>
          <td>${coche.id}</td>
          <td>${coche.marca}</td>
          <td>${coche.modelo}</td>
          <td>${precioFormateado}</td>
        </tr>
      `;
    });


    // 3. LISTA CON createElement + appendChild

    data.forEach((coche) => {

      const precioFormateado = coche.precio.toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR"
      });

      // Creamos el div principal
      const div = document.createElement("div");

      // Marca + modelo
      const h3 = document.createElement("h3");
      h3.textContent = `${coche.marca} ${coche.modelo}`;

      // ID
      const pId = document.createElement("p");
      pId.textContent = `ID: ${coche.id}`;

      // Precio
      const pPrecio = document.createElement("p");
      pPrecio.textContent = `Precio: ${precioFormateado}`;

      // Línea separadora
      const hr = document.createElement("hr");

      // Construimos el div
      div.appendChild(h3);
      div.appendChild(pId);
      div.appendChild(pPrecio);
      div.appendChild(hr);

      // Añadimos el div a la página
      listaDOM.appendChild(div);
    });


    // 4. TABLA CON createElement + appendChild

    data.forEach((coche) => {

      const precioFormateado = coche.precio.toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR"
      });

      // Creamos la fila
      const fila = document.createElement("tr");

      // ID
      const tdId = document.createElement("td");
      tdId.textContent = coche.id;

      // Marca
      const tdMarca = document.createElement("td");
      tdMarca.textContent = coche.marca;

      // Modelo
      const tdModelo = document.createElement("td");
      tdModelo.textContent = coche.modelo;

      // Precio
      const tdPrecio = document.createElement("td");
      tdPrecio.textContent = precioFormateado;

      // Construimos la fila
      fila.appendChild(tdId);
      fila.appendChild(tdMarca);
      fila.appendChild(tdModelo);
      fila.appendChild(tdPrecio);

      // Añadimos la fila a la tabla
      tablaDOM.appendChild(fila);
    });

  })

  // Si ocurre algún error
  .catch((error) => console.log(error));
