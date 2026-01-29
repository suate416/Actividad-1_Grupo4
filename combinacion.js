
 //posibles salas de Zoom con grupos de 2 estudiantes.

function parejasOrdenLex(nombres) {
  const ordenados = [...nombres].sort((a, b) => a.localeCompare(b, "es"));
  const parejas = [];
  for (let i = 0; i < ordenados.length; i++) {
    for (let j = i + 1; j < ordenados.length; j++) {
      parejas.push([ordenados[i], ordenados[j]]);
    }
  }
  return parejas;
}

function actualizarCombinaciones(estudiantes) {
  const contenedor = document.getElementById("combinaciones");
  if (!contenedor) return;
  if (estudiantes.length < 2) {
    contenedor.innerHTML = "<p>Se necesitan al menos 2 estudiantes para formar parejas.</p>";
    return;
  }
  const parejas = parejasOrdenLex(estudiantes);
  contenedor.innerHTML = `
    <h2>Parejas para salas de Zoom (orden lexicográfico)</h2>
    <p class="combinaciones-desc">Todas las combinaciones de 2 estudiantes:</p>
    <ol class="lista-combinaciones">
      ${parejas
        .map(
          (p, i) =>
            `<li>${p[0]} — ${p[1]}</li>`
        )
        .join("")}
    </ol>
  `;
}

window.actualizarCombinaciones = actualizarCombinaciones;
