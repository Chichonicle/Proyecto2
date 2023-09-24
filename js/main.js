let pantalla = document.getElementById("screen");
let botonTriangulo = document.getElementById("triangulo");
let botonIdPower = document.getElementById("idpower");

botonTriangulo.addEventListener("click", (e) => {
    if (e.target.id === "triangulo") {
        pantalla.style.backgroundColor = "red";
    } else if (e.target.id === 'idpower') {
        pantalla.style.backgroundColor = "grey";
    }
});




