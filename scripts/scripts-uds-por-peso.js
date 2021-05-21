const rack = 0.141843
const canasto = 0.144927

function select() {
    if(document.getElementById("producto").value === "resosrtes-rack") {
        let coeficiente = rack
    }
    
    else if(document.getElementById("producto").value === "resortes-canasto") {
        let coeficiente = canasto
    }
}

function calcularUnidades() {

    let peso = document.getElementById("peso").value;

    if(document.getElementById("producto").value === "resortes-rack") {
        
        let unidades = peso*coeficiente;
        document.getElementById("unidades").innerHTML = "Unidades: " + unidades;
    }

    else if(document.getElementById("producto").value === "resortes-canasto") {
        let unidades = peso*coeficiente;
        document.getElementById("unidades").innerHTML = "Unidades: " + unidades;
    }
}

calcularUnidades()