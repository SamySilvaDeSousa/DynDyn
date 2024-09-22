const fecharSidebarBtn = document.getElementById("fechar-sidebar");
const sidebar = document.getElementById("sidebar");
const logo = document.getElementById("logo");
const botaoNovoRegistro = document.getElementById("botao-novo_registro");

function verificarEstadoSidebar() {
  const estadoSidebar = localStorage.getItem("sidebarFechada");
  
  if (estadoSidebar === "true") {
    fecharSidebar();
  } else {
    abrirSidebar();
  }
}

function fecharSidebar() {
  sidebar.classList.add("w-[64px]");
  sidebar.classList.remove("w-[300px]");
  botaoNovoRegistro.classList.add("pl-2");
  botaoNovoRegistro.classList.remove("pl-5");
  logo.textContent = "D";
  fecharSidebarBtn.querySelector(".material-symbols-outlined").textContent = "chevron_right";
  localStorage.setItem("sidebarFechada", "true");
}

function abrirSidebar() {
  sidebar.classList.add("w-[300px]");
  sidebar.classList.remove("w-[64px]");
  botaoNovoRegistro.classList.add("pl-5");
  botaoNovoRegistro.classList.remove("pl-2");
  logo.textContent = "DynDyn";
  fecharSidebarBtn.querySelector(".material-symbols-outlined").textContent = "chevron_left";
  localStorage.setItem("sidebarFechada", "false");
}

fecharSidebarBtn.addEventListener("click", function () {
  const estadoSidebar = localStorage.getItem("sidebarFechada");
  
  if (estadoSidebar === "true") {
    abrirSidebar();
  } else {
    fecharSidebar();
  }
});

document.addEventListener("DOMContentLoaded", verificarEstadoSidebar);
