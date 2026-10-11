function activarSpookyMonth() {
        alert ("IT IS THE SPOOKY MONTH! 🎃🎺")
        window.location.href = "eastereggs/spookyegg3.htm"; 
}

let secuenciaTeclas = "";
const palabraSecreta = "spooky";

window.addEventListener("keydown", (evento) => {
    secuenciaTeclas += evento.key.toLowerCase();
    if (secuenciaTeclas.length > palabraSecreta.length) {
        secuenciaTeclas = secuenciaTeclas.slice(-palabraSecreta.length);
    }
    if (secuenciaTeclas === palabraSecreta) {
        activarSpookyMonth();
    }
});

// movil
let contadorToques = 0;
let temporizadorToques;

const tituloPrincipal = document.getElementById("titulo-principal");

if (tituloPrincipal) {
    tituloPrincipal.addEventListener("click", () => {
        contadorToques++;
        clearTimeout(temporizadorToques);
        temporizadorToques = setTimeout(() => {
            contadorToques = 0;
        }, 1500);
        if (contadorToques === 5) {
            activarSpookyMonth();
            contadorToques = 0;
        }
    });
}