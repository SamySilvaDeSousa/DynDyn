document.getElementById('botao-tema').addEventListener('click', function() {
  document.body.classList.toggle('tema-dark');
});

const check = document.getElementById('check-tema')

check.addEventListener('change', () => {
  document.body.classList.toggle('tema-dark')
})