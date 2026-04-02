const form = document.getElementById("formAlumno");
const lista = document.getElementById("lista");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const celular = document.getElementById("celular").value.trim();
  const ciudad = document.getElementById("ciudad").value.trim();
  const edad = document.getElementById("edad").value.trim();
  const sexo = document.getElementById("sexo").value;

  if (!nombre || !apellido || !celular) {
    alert("Por favor, complete todos los campos obligatorios.");
    return;
  }

  if (isNaN(celular)) {
    alert("El número celular debe contener solo números.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = `${nombre} ${apellido} - ${celular} - ${ciudad} - ${edad} años - ${sexo}`;
  lista.appendChild(li);

  actualizarContador();

  form.reset();
});

document.getElementById("limpiar").addEventListener("click", function () {
  const confirmar = confirm("¿Estás seguro de que deseas limpiar la lista?");
  if (confirmar) {
    lista.innerHTML = "";
    actualizarContador();
  }
});

function actualizarContador() {
  const contador = document.getElementById("contador");
  contador.textContent = `Total registrados: ${lista.children.length}`;
}