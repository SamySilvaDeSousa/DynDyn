    // Função para aplicar o tema com base na preferência armazenada
    function aplicarTema() {
      const tema = localStorage.getItem('tema');
      if (tema === 'dark') {
        document.body.classList.add('tema-dark');
        document.getElementById('check-tema').checked = true;
      }
    }

    // Aplica o tema ao carregar a página
    aplicarTema();

    document.getElementById('botao-tema').addEventListener('click', function() {
      document.body.classList.toggle('tema-dark');
      // Armazenar a preferência do usuário
      const tema = document.body.classList.contains('tema-dark') ? 'dark' : 'light';
      localStorage.setItem('tema', tema);
    });

    const check = document.getElementById('check-tema');
    check.addEventListener('change', () => {
      document.body.classList.toggle('tema-dark');
      // Armazenar a preferência do usuário
      const tema = document.body.classList.contains('tema-dark') ? 'dark' : 'light';
      localStorage.setItem('tema', tema);
    });