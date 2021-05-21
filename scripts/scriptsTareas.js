var abrirModal = document.getElementById("abrirModal");
var modal = document.getElementById("modal");
var cerrarModal = document.getElementById("cerrarModal")

abrirModal.onclick = function abrirModal() {
    modal.style.display = "block";
}

cerrarModal.onclick = function cerrarModal() {
    modal.style.display = "none";
    // let tarea = document.getElementById("tarea").value;
    // let estado = document.getElementById("estado").value;
    // let lineaDeTarea = document.createElement("span")
    // let nuevaTarea = document.createTextNode(tarea + " " + estado);
    // let tareas = document.getElementById("tareas");
    // lineaDeTarea.appendChild(nuevaTarea)
    // tareas.appendChild(lineaDeTarea)

    let tarea = document.getElementById("tarea").value;
    let estado = document.getElementById("estado").value;
    let listaTareas = document.getElementById("listaTareas");
    let listaEstados = document.getElementById("listaEstados");
    let crearDivTarea = document.createElement("div");
    crearDivTarea.classList.add("tareas")
    let crearDivEstado = document.createElement("div");
    crearDivEstado.classList.add("estados")
    parteTarea = document.createTextNode(tarea);
    parteEstado = document.createTextNode(estado);
    crearDivTarea.appendChild(parteTarea);
    crearDivEstado.appendChild(parteEstado);
    listaTareas.appendChild(crearDivTarea);
    listaEstados.appendChild(crearDivEstado);
    document.getElementById("tareas").style.display = "flex";
}