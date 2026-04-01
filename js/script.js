const form = document.getElementById("formAlumno");
const lista = document.getElementById("lista");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const celular = document.getElementById("celular").value.trim();

  if (!nombre || !apellido || !celular) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  if (isNaN(celular)) {
  alert("El número celular debe contener solo números.");
  return;
}
  const li = document.createElement("li");
  li.textContent = `${nombre} ${apellido} - ${celular}`;
  lista.appendChild(li);

  actualizarContador();

  form.reset();
});


document.getElementById("limpiar").addEventListener("click", function () {
  lista.innerHTML = "";
});