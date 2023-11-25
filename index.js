//DATOS POR DEFECTO
let el, i;
let data = [
  { pnombre: "Mauricio //", apellido: "Sevilla //", nacionalidad: "Colombia" },
  { pnombre: "Jorge //", apellido: "Barón //" , nacionalidad: "Francia" },
  { pnombre: "Andrés //", apellido: "Espinoza //" , nacionalidad: "España" },
  { pnombre: "Rafael //", apellido: "Pérez //" , nacionalidad: "Italia"}
];
let panel = document.querySelector("#panel");

//LIMPIAR EL FORMULARIO
function clearForm() {
  document.querySelector("#nombre").value = "";
  document.querySelector("#apellido").value = "";
  document.querySelector("#nacionalidad").value = "";
}


function renderItem() {
  panel.textContent = "";
  data.forEach(x => {
    el = document.createElement("option");
    el.innerText = `${x.pnombre} ${x.apellido} ${x.nacionalidad}`;
    panel.append(el);
  });
}

//CREAR REGISTRO
function create() {
  let pn = document.querySelector("#nombre").value;
  let ap = document.querySelector("#apellido").value;
  let na = document.querySelector("#nacionalidad").value;
  data = [...data, { pnombre: pn, apellido: ap, nacionalidad: na }];
  clearForm();
  console.log(data)
  renderItem();
}

function panelClick() {
  i = panel.selectedIndex;
  document.querySelector("#nombre").value = data[i].pnombre;
  document.querySelector("#apellido").value = data[i].apellido;
  document.querySelector("#nacionalidad").value = data[i].nacionalidad;
}
//ACTUALIZAR REGISTRO
function update() {
  data[i].pnombre = document.querySelector("#nombre").value;

  data[i].apellido = document.querySelector("#apellido").value;

  data[i].nacionalidad = document.querySelector("#nacionalidad").value;

  renderItem();
}

//ELIMINAR REGISTRO
function deleteItem() {
  data.splice(i, 1);
  renderItem();
}

 renderItem();