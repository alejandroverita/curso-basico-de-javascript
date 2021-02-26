const start = document.getElementById("empezar");
const options = document.getElementById("opciones");
const cartelFinal = document.getElementById("cartelFinal");

const piedra1 = document.getElementById("piedraPlayer1");
const papel1 = document.getElementById("papelPlayer1");
const tijeras1 = document.getElementById("tijerasPlayer1");
const piedra2 = document.getElementById("piedraPlayer2");
const papel2 = document.getElementById("papelPlayer2");
const tijeras2 = document.getElementById("tijerasPlayer2");

const elegirPiedra =  document.getElementById("elegirPiedra");
const elegirPapel = document.getElementById("elegirPapel");
const elegirTijeras = document.getElementById("elegirTijeras");

const tituloFinal = document.getElementById("final");
const contador = document.getElementById("footer__counter");

var jugador = null;
var maquina = null;
var contadorJugador = 0;
var contadorMaquina = 0;

var empezar = () => {
    start.classList.add("hidden");     
    options.classList.remove("hidden");
    cartelFinal.classList.add("hidden");
    piedra1.classList.add("hidden");   
    piedra2.classList.add("hidden");   
    papel1.classList.add("hidden");   
    papel2.classList.add("hidden");   
    tijeras1.classList.add("hidden");   
    tijeras2.classList.add("hidden");   
}

var eleccion = () => {
    if(event.srcElement === elegirPiedra){
        options.classList.add("hidden");
        piedra1.classList.remove("hidden");
        jugador = 1;
    }
    if(event.srcElement === elegirPapel){
        options.classList.add("hidden");
        papel1.classList.remove("hidden");
        jugador = 2;
    }
    if(event.srcElement === elegirTijeras){
        options.classList.add("hidden");
        tijeras1.classList.remove("hidden");
        jugador = 3;  
    }
    machine();
}

var machine = () => {
    let random = Math.random();
    if(random <= 0.33){
        piedra2.classList.remove("hidden");
        maquina = 1;
    }
    if(random >= 0.34 && random <= 0.66){
        papel2.classList.remove("hidden");
        maquina = 2;
    }
    if(random >= 0.67) {
        tijeras2.classList.remove("hidden");
        maquina = 3;
    }
    console.log(random)
    final();
}

var final = () => {
    cartelFinal.classList.remove("hidden");
    if(jugador - maquina === 0){
        tituloFinal.innerHTML = "Empate";
        contador.innerHTML = `${contadorJugador} - ${contadorMaquina}`;
    }
    if(jugador === 1 && maquina === 2){
        tituloFinal.innerHTML = "Perdiste...";
        contadorMaquina++;
        contador.innerHTML = `${contadorJugador} - ${contadorMaquina}`;
    }
    if(jugador === 1 && maquina === 3){
        tituloFinal.innerHTML = "Ganaste!!!";
        contadorJugador++;
        contador.innerHTML = `${contadorJugador} - ${contadorMaquina}`;
    }
    if(jugador === 2 && maquina === 1){
        tituloFinal.innerHTML = "Ganaste!!!";
        contadorJugador++;
        contador.innerHTML = `${contadorJugador} - ${contadorMaquina}`;
    }
    if(jugador === 2 && maquina === 3){
        tituloFinal.innerHTML = "Perdiste...";
        contadorMaquina++
        contador.innerHTML = `${contadorJugador} - ${contadorMaquina}`;
    }
    if(jugador === 3 && maquina === 1){
        tituloFinal.innerHTML = "Perdiste...";
        contadorMaquina++;
        contador.innerHTML = `${contadorJugador} - ${contadorMaquina}`;
    }
    if(jugador === 3 && maquina === 2){
        tituloFinal.innerHTML = "Ganaste!!!";
        contadorJugador++;
        contador.innerHTML = `${contadorJugador} - ${contadorMaquina}`;
    }
}