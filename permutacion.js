
 // las posibles órdenes de presentación en orden lexicográfico
 
function siguientePermutacion(arr, comparar) {
  comparar = comparar || ((a, b) => a.localeCompare(b, "es"));
  let i = arr.length - 2;
  while (i >= 0 && comparar(arr[i], arr[i + 1]) >= 0) i--;
  if (i < 0) return false;
  let j = arr.length - 1;
  while (comparar(arr[j], arr[i]) <= 0) j--;
  [arr[i], arr[j]] = [arr[j], arr[i]];
  for (let l = i + 1, r = arr.length - 1; l < r; l++, r--) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
  }
  return true;
}

function primerasPermutaciones(nombres, cantidad = 6) {
  const base = [...nombres].sort((a, b) => a.localeCompare(b, "es"));
  const resultado = [base.slice()];
  const copia = base.slice();
  while (resultado.length < cantidad && siguientePermutacion(copia)) {
    resultado.push(copia.slice());
  }
  return resultado;
}

function actualizarPermutaciones(estudiantes) {
  const contenedor = document.getElementById("permutaciones");
  if (!contenedor) return;
  if (estudiantes.length === 0) {
    contenedor.innerHTML = "<p>Ingrese al menos un nombre.</p>";
    return;
  }
  const permutaciones = primerasPermutaciones(estudiantes, 6);
  contenedor.innerHTML = `
    <h2>Primeras 6 permutaciones (orden lexicográfico)</h2>
    <p class="permutaciones-desc">Órdenes de presentación posibles para Sandra:</p>
    <ol class="lista-permutaciones">
      ${permutaciones
        .map(
          (p, i) =>
            `<li>${p.join(" → ")}</li>`
        )
        .join("")}
    </ol>
  `;
}

window.actualizarPermutaciones = actualizarPermutaciones;
