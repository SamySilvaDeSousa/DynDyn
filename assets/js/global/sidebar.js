document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function() {

    document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('ativo'));
    
    document.querySelectorAll('.section').forEach(section => section.style.display = 'none');
    
    this.classList.add('ativo');
    const sectionId = this.id.replace('nav-', '');
    document.getElementById(sectionId).style.display = 'flex';
  });
});
