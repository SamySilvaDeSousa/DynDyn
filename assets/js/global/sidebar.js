document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function() {

    const cortina = document.querySelector('.cortina');
    cortina.style.display = 'block';
    cortina.style.animation = 'none';

    void cortina.offsetWidth;
    cortina.style.animation = 'cortinas 0.5s ease-in-out forwards';

    document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('ativo'));
    document.querySelectorAll('.section').forEach(section => section.style.display = 'none');
    
    this.classList.add('ativo');
    
    setTimeout(() => {
      const sectionId = this.id.replace('nav-', '');
      document.getElementById(sectionId).style.display = 'flex';

      setTimeout(() => {
        cortina.style.display = 'none';
      }, 250);
    }, 250);
  });
});
