function actualizar() {
  const estudiantes = document.getElementById("nombres").value
    .split("\n").map((s) => s.trim()).filter(Boolean);
  const n = estudiantes.length;

  document.getElementById("n-estudiantes").textContent =
    `Cantidad de estudiantes: ${n}`;
  document.getElementById("lista-ordenada").innerHTML =
    [...estudiantes].sort((a, b) => a.localeCompare(b, "es"))
      .map((x) => `<li>${x}</li>`).join("");

  if (typeof window.actualizarPermutaciones === "function") {
    window.actualizarPermutaciones(estudiantes);
  }
  if (typeof window.actualizarCombinaciones === "function") {
    window.actualizarCombinaciones(estudiantes);
  }
}

function debounce(fn, ms) {
  let t;
  return function () {
    clearTimeout(t);
    t = setTimeout(fn, ms);
  };
}

const nombreAgregado = document.getElementById("nombres");
const btn = document.getElementById("btn-actualizar");

if (nombreAgregado) {
  nombreAgregado.addEventListener("input", debounce(actualizar, 180));
  nombreAgregado.addEventListener("paste", debounce(actualizar, 180));
}
if (btn) {
  btn.addEventListener("click", actualizar);
}

document.querySelectorAll(".tab-btn").forEach((tabBtn) => {
  tabBtn.addEventListener("click", () => {
    const id = tabBtn.getAttribute("data-tab");
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("activo"));
    document.querySelectorAll(".tabs-panel").forEach((p) => p.classList.remove("activo"));
    tabBtn.classList.add("activo");
    const panel = document.getElementById(id);
    if (panel) panel.classList.add("activo");
  });
});

actualizar();
