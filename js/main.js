let pantalla = document.getElementById("screen");

document.addEventListener("click", (e) => {
  if (e.target.id === "triangulo") {
    pantalla.style.backgroundColor = "red";
  } else if (e.target.id === "idpower") {
    pantalla.style.backgroundColor = "pink";
  }
});
