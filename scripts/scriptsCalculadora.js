const densidadPVC = 1.42;
const densidadChapa = 7850;

function select() {
    if(document.getElementById("material").value === "pvc") {
        document.getElementById("anchoLabel").innerHTML = "Ancho lámina (en cm): ";
        document.getElementById("largoLabel").innerHTML = "Largo lámina (en cm): ";
        document.getElementById("espesorLabel").innerHTML = "Espesor lámina (en mic): ";
        document.getElementById("cantidadLabel").innerHTML = "Cantidad de láminas: ";
    }
    
    else if(document.getElementById("material").value === "chapa") {
        document.getElementById("anchoLabel").innerHTML = "Ancho chapa (en m): ";
        document.getElementById("largoLabel").innerHTML = "Largo chapa (en m): ";
        document.getElementById("espesorLabel").innerHTML = "Espesor chapa (en mm): ";
        document.getElementById("cantidadLabel").innerHTML = "Cantidad de chapas: ";
    }
}

function calcularPeso() {

    let ancho = document.getElementById("ancho").value;
    let largo = document.getElementById("largo").value;
    let espesor = document.getElementById("espesor").value;
    let cantidad = document.getElementById("cantidad").value;

    if(document.getElementById("material").value === "pvc") {
        
        let kgTotales = ancho*largo*(espesor/10000)*cantidad*densidadPVC;
        document.getElementById("total").innerHTML = "Kg totales: " + kgTotales/1000 + " Kg";
    }

    else if(document.getElementById("material").value === "chapa") {
        let kgTotales = ancho*largo*(espesor/1000)*cantidad*densidadChapa;
        let kgRedondeados = kgTotales.toFixed(3)
        document.getElementById("total").innerHTML = "Kg totales: " + kgRedondeados + " Kg";
    }
}

calcularPeso()