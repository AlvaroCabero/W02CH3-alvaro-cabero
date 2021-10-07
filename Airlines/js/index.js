//window.onload=airlines;
let flights = [
  { id: 00, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

  { id: 01, to: "New York", from: "Barcelona", cost: 700, scale: false },

  { id: 02, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

  { id: 03, to: "Paris", from: "Barcelona", cost: 210, scale: false },

  { id: 04, to: "Roma", from: "Barcelona", cost: 150, scale: false },

  { id: 05, to: "London", from: "Madrid", cost: 200, scale: false },

  { id: 06, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

  { id: 07, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

  { id: 08, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

  { id: 09, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

//console.log(flights);

let suma = 0;
let mediaTotal = 0;

let vuelosEscala = 0;

let opcionAdmin;
let newFlight = {};
let idBorrar;
let panelActualizado;

let comparacionEscogida;
let idEscogido;

let userName;

function airlines() {
  console.log("Vuelos:" + flights.length);
  do {
    userName = prompt("Bienvenid@!!!\nIntroduce tu nombre de usuario");
    if (userName == "") {
      alert("Introduce un usuario válido por favor");
    }
  } while (userName == "");

  for (i = 0; i < flights.length; i++) {
    if (flights[i].scale) {
      //console.log( `El vuelo con origen: ${flights[i].from}, y destino: ${flights[i].to} tiene un coste de ${flights[i].cost} € y realiza escala.`);
      document.write(
        `El vuelo con origen: <b>${flights[i].from}</b>, y destino: <b>${flights[i].to}</b> tiene un coste de <b>${flights[i].cost} €</b> y realiza escala.<br><br>`
      );
    } else {
      //console.log( `El vuelo con origen: ${flights[i].from}, y destino: ${flights[i].to} tiene un coste de ${flights[i].cost} € y no realiza ninguna escala.`);
      document.write(
        `El vuelo con origen: <b>${flights[i].from}</b>, y destino: <b>${flights[i].to}</b> tiene un coste de <b>${flights[i].cost} €</b> y no realiza ninguna escala.<br><br>`
      );
    }
  }

  for (j = 0; j < flights.length; j++) {
    suma += flights[j].cost;
    if (flights[j].scale == true) {
      vuelosEscala++;
    }
  }
  mediaTotal = Number((suma / flights.length).toFixed(2));
  console.log(mediaTotal);
  //document.getElementById("media").innerHTML = `La media de precios hoy es de ${mediaTotal} €`;
  document.write(
    `<br>${userName}, la media de precios hoy es de ${mediaTotal} €<br>`
  );
  //alert(`La media de precios hoy es de ${mediaTotal} €`);

  document.write(
    `<br>Hoy encontramos ${vuelosEscala} vuelos con escala. Revise el panel.<br><br>`
  );

  document.write(
    `<br>Si no sabes dónde ir, aquí tienes los destinos de los últimos vuelos del día:<br>`
  );
  for (k = flights.length - 1; k > flights.length - 6; k--) {
    document.write(`<br>- ${flights[k].to}.<br>`);
  }

  if (confirm("¿Eres ADMIN?")) {
    preguntaAdmin();
  } else {
    let presupuestoUser = Number(prompt("¿Qué precio desea comparar?"));

    do {
      comparacionEscogida = prompt(`Escriba su opción de visualización:\n
                        Mayor (para precios por encima de ${presupuestoUser} €)\n
                        Menor (para precios por debajo de ${presupuestoUser} €)\n
                        Igual (para precios iguales a ${presupuestoUser} €)`);

      if (comparacionEscogida != null) {
        comparacionEscogida = comparacionEscogida.toLowerCase();
      }

      if (comparacionEscogida == null) {
        break;
      }

      if (
        comparacionEscogida != "mayor" &&
        comparacionEscogida != "menor" &&
        comparacionEscogida != "igual"
      ) {
        alert("Introduce un valor válido por favor");
      }
    } while (
      comparacionEscogida != "mayor" &&
      comparacionEscogida != "menor" &&
      comparacionEscogida != "igual"
    );

    if (comparacionEscogida != null && comparacionEscogida != "") {
      let mayores = [];
      let menores = [];
      let iguales = [];
      let mayoresTexto = [];
      let menoresTexto = [];
      let igualesTexto = [];

      for (l = 0; l < flights.length; l++) {
        if (flights[l].cost > presupuestoUser) {
          mayores.push(flights[l]);
        } else if (flights[l].cost < presupuestoUser) {
          menores.push(flights[l]);
        }
        if (flights[l].cost == presupuestoUser) {
          iguales.push(flights[l]);
        }
      }
      console.log(mayores);
      console.log(menores);
      console.log(iguales);

      switch (comparacionEscogida) {
        case "mayor":
          for (m = 0; m < mayores.length; m++) {
            if (mayores[m].scale) {
              mayoresTexto.push(
                `El vuelo ${mayores[m].id} con origen: ${mayores[m].from}, y destino: ${mayores[m].to} tiene un coste de ${mayores[m].cost} € y realiza escala.\n`
              );
            } else {
              mayoresTexto.push(
                `El vuelo ${mayores[m].id} con origen: ${mayores[m].from}, y destino: ${mayores[m].to} tiene un coste de ${mayores[m].cost} € y no realiza ninguna escala.\n`
              );
            }
          }
          alert(
            `Los vuelos con precio mayor son:\n\n ${mayoresTexto.join("\n")}`
          );
          break;

        case "menor":
          for (n = 0; n < menores.length; n++) {
            if (menores[n].scale) {
              menoresTexto.push(
                `El vuelo ${menores[n].id} con origen: ${menores[n].from}, y destino: ${menores[n].to} tiene un coste de ${menores[n].cost} € y realiza escala.\n`
              );
            } else {
              menoresTexto.push(
                `El vuelo ${menores[n].id} con origen: ${menores[n].from}, y destino: ${menores[n].to} tiene un coste de ${menores[n].cost} € y no realiza ninguna escala.\n`
              );
            }
          }
          alert(
            `Los vuelos con precio menor son:\n\n ${menoresTexto.join("\n")}`
          );
          break;

        case "igual":
          for (o = 0; o < iguales.length; o++) {
            if (iguales[o].scale) {
              igualesTexto.push(
                `El vuelo ${iguales[o].id} con origen: ${iguales[o].from}, y destino: ${iguales[o].to} tiene un coste de ${iguales[o].cost} € y realiza escala.\n`
              );
            } else {
              igualesTexto.push(
                `El vuelo ${iguales[o].id} con origen: ${iguales[o].from}, y destino: ${iguales[o].to} tiene un coste de ${iguales[o].cost} € y no realiza ninguna escala.\n`
              );
            }
          }
          if (igualesTexto == "") {
            alert(
              `No existe hoy ningún vuelo con precio igual a ${presupuestoUser} €`
            );
          } else {
            alert(
              `Los vuelos con precio igual son:\n\n ${igualesTexto.join("\n")}`
            );
          }
          break;
      }

      do {
        idEscogido = prompt("Seleccione su vuelo por número de ID");

        if (idEscogido == null) {
          break;
        }
        if (isNaN(idEscogido)) {
          alert("Introduce un id válido por favor");
        }
      } while (isNaN(idEscogido));

      if (idEscogido != null) {
        alert(
          `Vuelo ${idEscogido} seleccionado. Gracias por su compra, vuelva pronto.`
        );
      }
    }
  }
}

airlines();

function preguntaAdmin() {
  do {
    opcionAdmin = prompt(
      "¿Qué acción desea realizar en la lista de vuelos?\n\n- Crear\n- Borrar\n\n"
    );

    if (opcionAdmin != null) {
      opcionAdmin = opcionAdmin.toLowerCase();
    }

    if (opcionAdmin == null) {
      break;
    }

    if (opcionAdmin != "crear" && opcionAdmin != "borrar") {
      alert("Introduce un valor válido por favor");
    }
  } while (opcionAdmin != "crear" && opcionAdmin != "borrar");

  //console.log (opcionAdmin);

  while (opcionAdmin == "crear" || opcionAdmin == "borrar") {
    //console.log(flights.length);

    if (opcionAdmin == "crear") {
      if (flights.length < 15) {
        crearVuelo();
      } else {
        alert("Máximo número de entradas alcanzadas");
      }
    }
    /*if(flights.length >= 15){
                if(confirm("¿Deseas borrar algún vuelo?")){
                    borrarVuelo();
                }
            }*/
    if (opcionAdmin == "borrar") {
      if (flights.length > 0) {
        borrarVuelo();
      } else {
        alert("No quedan vuelos que borrar");
      }
    }

    preguntaAdmin();
  }
}

function crearVuelo() {
  newFlight.to = prompt("Introduzca el destino");
  newFlight.from = prompt("Introduzca el origen");
  newFlight.cost = prompt("Introduzca el precio");
  newFlight.scale = prompt(
    "¿Se trata de un vuelo con escalas? (1 = Sí / 0= No)"
  );

  flights.push(newFlight);
  console.log(flights);
  console.log(opcionAdmin);
  console.log(flights.length);
}

function borrarVuelo() {
  do {
    idBorrar = prompt("¿Cuál es el ID del vuelo que quiere borrar?");
    if (isNaN(idBorrar)) {
      alert("Introduce un valor válido por favor");
    }
  } while (isNaN(idBorrar));

  if (idBorrar != null) {
    flights.splice(idBorrar, 1);

    alert(`Elemento ${idBorrar} eliminado.`);
  }
  panelActualizado = ["El panel de vuelos actualizado es el siguiente:\n"];
  for (p = 0; p < flights.length; p++) {
    if (flights[p].scale) {
      panelActualizado.push(
        `El vuelo ${p} con origen: ${flights[p].from}, y destino: ${flights[p].to} tiene un coste de ${flights[p].cost} € y realiza escala.\n`
      );
    } else {
      panelActualizado.push(
        `El vuelo ${p} con origen: ${flights[p].from}, y destino: ${flights[p].to} tiene un coste de ${flights[p].cost} € y no realiza ninguna escala.\n`
      );
    }
  }
  alert(panelActualizado.join("\n"));
  console.log(flights);
  console.log(flights.length);
  console.log(opcionAdmin);
}
