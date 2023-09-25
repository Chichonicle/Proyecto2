let pantalla = document.getElementById("screen");
let luz = document.getElementById("led");
let botonPower = document.getElementById("idpower");
let pantallaEncendida = false;

botonPower.addEventListener("click", () => {
  if (!pantallaEncendida) {

    pantalla.style.backgroundImage = "url('../img/on.jpg')";
    luz.style.backgroundColor = "yellow";
    pantallaEncendida = true;
    pantalla.addEventListener("animationiteration", () => {
      pantalla.style.animationPlayState = "paused";
    });
  } else {
    
    pantalla.style.backgroundImage = "none";
    luz.style.backgroundColor = "";
    pantallaEncendida = false;
  }
});

document.addEventListener("click", (e) => {

  if (pantallaEncendida) {
    if (e.target.id === "triangulo") {
      pantalla.style.backgroundImage = "url('../img/oliver.gif')";
    } else if (e.target.id === "cuadrado") {
      pantalla.style.backgroundImage = "url('../img/mk.gif')";
    } else if (e.target.id === "circulo") {
      pantalla.style.backgroundImage = "url('../img/sonic.gif')";
    } else if (e.target.id === "x") {
      pantalla.style.backgroundImage = "url('../img/car.gif')";
    }
  }
})
;
