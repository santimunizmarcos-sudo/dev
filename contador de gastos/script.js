let gastos = JSON.parse(localStorage.getItem("gastos")) || [];
let total = parseFloat(localStorage.getItem("total")) || 0;

window.onload = function () {
    let lista = document.getElementById("lista");
    gastos.forEach(g => {
        let item = document.createElement("li");
        item.textContent = `${g.descripcion}: $${g.monto}`;
        lista.appendChild(item);
    });
    document.getElementById("total").textContent = total;
};

function agregarGasto() {
    let descripcion = document.getElementById("descripcion").value;
    let monto = parseFloat(document.getElementById("monto").value);

    if (descripcion === "" || isNaN(monto)) {
        alert("Por favor escribe una descripción y un monto válido.");
        return;
    }

    gastos.push({ descripcion: descripcion, monto: monto });
    total += monto;

    // Mostrar en la página (ya lo tienes)
    let lista = document.getElementById("lista");
    let item = document.createElement("li");
    item.textContent = `${descripcion}: $${monto}`;
    lista.appendChild(item);
    document.getElementById("total").textContent = total;

    // Guardar en localStorage
    localStorage.setItem("gastos", JSON.stringify(gastos));
    localStorage.setItem("total", total);

    document.getElementById("descripcion").value = "";
    document.getElementById("monto").value = "";
}
function eliminarGastos() {
    // Vaciar la lista de gastos
    gastos = [];
    total = 0;

    localStorage.removeItem("gastos");
    localStorage.removeItem("total");


    // Limpiar la lista visual en el HTML
    document.getElementById("lista").innerHTML = "";

    // Actualizar el total mostrado
    document.getElementById("total").textContent = total;
}
localStorage.setItem("gastos", JSON.stringify(gastos));
localStorage.setItem("total", total);
