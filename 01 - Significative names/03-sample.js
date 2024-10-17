let primeiroDia = "2024-01-01";
let SegundoDia = "2024-12-31";

function calcularDiferenca(d1, d2) {
    return new Date(d2) - new Date(d1);
}

let res = calcularDiferenca(d1, d2);
console.log(res);
