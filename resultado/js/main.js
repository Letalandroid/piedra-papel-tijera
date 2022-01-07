let cuenta = 4;
let opciones = ["Piedra ✊", "Papel 🧻", "Tijeras ✂"];

let yo = localStorage.getItem("opt");
let bot = opciones[Math.round(Math.random() * 2)];

document.getElementById("bot").innerHTML = bot;

if (yo == "piedra" && bot == opciones[0] ||
    yo == "papel" && bot == opciones[1] ||
    yo == "tijera" && bot == opciones[2]) {

        document.getElementById("r").innerHTML = "Empatar";

}

else if (yo == "piedra" && bot == opciones [1] ||
         yo == "papel" && bot == opciones[2] ||
         yo == "tijera" && bot == opciones[0]) {

    document.getElementById("r").innerHTML = "Perder 🚫";

}

else if (yo == "papel" && bot == opciones[0] ||
         yo == "tijera" && bot == opciones[1] ||
         yo == "piedra" && bot == opciones[2]) {

    document.getElementById("r").innerHTML = "Ganar ✔";

}

const myInterval = setInterval(() => {

    document.getElementById("countdown").innerHTML = cuenta;
    cuenta--;

    if (cuenta == -1) {

        document.getElementById("flecha-abajo").style.display = "inline";

        setTimeout(() => {document.getElementById("resultado").style.display = "inline";}, 1000);

        clearInterval(myInterval);

    }

}, 1000);