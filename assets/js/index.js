// Precio base del producto
let precio = 400000;

// Selección de elementos del DOM
const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".total-a-pagar");
const btnMas = document.querySelector(".btn-mas");
const btnMenos = document.querySelector(".btn-menos");

// Inicialización
let cantidad = 0;
precioSpan.innerHTML = precio;
actualizarTotal();

// Función para actualizar el total
function actualizarTotal() {
    cantidadSpan.innerHTML = cantidad;
    totalSpan.innerHTML = precio * cantidad;
}

// Botón +
btnMas.addEventListener("click", () => {
    cantidad++;
    actualizarTotal();
});

// Botón -
btnMenos.addEventListener("click", () => {
    if (cantidad > 0) {
        cantidad--;
        actualizarTotal();
    }
});
