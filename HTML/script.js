document.addEventListener("DOMContentLoaded", function() {

    // Actualizar fecha y hora
    function actualizarFechaHora() {
        const fechaHoraDiv = document.getElementById("fechaHora");
        const ahora = new Date();
        fechaHoraDiv.textContent = ahora.toLocaleDateString() + " " + ahora.toLocaleTimeString();
        setTimeout(actualizarFechaHora, 1000);
    }
    actualizarFechaHora();

    // Agregar artículo
    const formArticulo = document.getElementById("agregarArticulo");
    if (formArticulo) {  // Por si el formulario no está en todas las páginas
        formArticulo.addEventListener("submit", function(e) {
            e.preventDefault();
            const titulo = document.getElementById("tituloArticulo").value;
            const descripcion = document.getElementById("descripcionArticulo").value;
            const articulosDiv = document.querySelector(".articulos");
            articulosDiv.innerHTML += `<h2>${titulo}</h2><p>${descripcion}</p>`;
            actualizarContador();
        });
    }

    // Enviar formulario de contacto
    const formContacto = document.getElementById("contactoForm");
    if (formContacto) {  // Por si el formulario no está en todas las páginas
        formContacto.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Mensaje enviado!");
            e.target.reset();
        });
    }

    // Contador de artículos
    function actualizarContador() {
        const articulos = document.querySelectorAll(".articulos h2");
        document.getElementById("contadorArticulos").textContent = articulos.length;
    }
    actualizarContador();

});
