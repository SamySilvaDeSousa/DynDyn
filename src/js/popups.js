//NOVO REGISTRO

const novoRegistro = document.getElementById('botao-novo_registro');
const popupNovoRegistro = document.getElementById('popup-novo_registro');

novoRegistro.addEventListener('click', function () {
  popupNovoRegistro.classList.toggle('hidden');
  novoRegistro.classList.toggle('bg-[--theme]');
  novoRegistro.classList.toggle('text-white');
});

document.addEventListener('click', function (event) {
  if (!popupNovoRegistro.contains(event.target) && !novoRegistro.contains(event.target)) {
    popupNovoRegistro.classList.add('hidden');
    novoRegistro.classList.remove('bg-[--theme]');
    novoRegistro.classList.remove('text-white');
  }
});

//PERFIL

const perfil = document.getElementById('perfil');
const popupPerfil = document.getElementById('popup-perfil');
const perfilSpan = document.getElementById('perfil-span');

perfil.addEventListener('click', function () {
  perfil.classList.toggle('bg-[--tertiary]');
  popupPerfil.classList.toggle('hidden');
  perfilSpan.classList.toggle('rotate-180');
});

document.addEventListener('click', function (event) {
  if (!popupPerfil.contains(event.target) && !perfil.contains(event.target)) {
    perfil.classList.remove('bg-[--tertiary]');
    popupPerfil.classList.add('hidden');
    perfilSpan.classList.remove('rotate-180');
  }
});

//RELATÓRIOS

const filtrarRelatorios = document.getElementById('botao-filtrar_relatorios');
const popupFiltrarRelatorios = document.getElementById('popup-filtrar_relatorios');

filtrarRelatorios.addEventListener('click', function (event) {
  event.stopPropagation();
  popupFiltrarRelatorios.classList.toggle('hidden');
  filtrarRelatorios.classList.toggle('bg-[--primary]');
});

document.addEventListener('click', function (event) {
  if (!popupFiltrarRelatorios.contains(event.target) && !filtrarRelatorios.contains(event.target)) {
    popupFiltrarRelatorios.classList.add('hidden');
    filtrarRelatorios.classList.remove('bg-[--primary]');
  }
});

