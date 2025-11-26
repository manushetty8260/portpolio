// Basic interactivity: nav toggle, year, smooth scroll, simple form handler
document.addEventListener('DOMContentLoaded', function(){
  // year
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // nav toggle for small screens
  const nav = document.getElementById('main-nav');
  const toggle = document.getElementById('nav-toggle');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      nav.classList.toggle('show-nav');
    });
  }

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      const href = a.getAttribute('href');
      if(href.length > 1){
        const target = document.querySelector(href);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth', block:'start'});
          if(nav && nav.classList.contains('show-nav')) nav.classList.remove('show-nav');
        }
      }
    });
  });

  // contact form: open mailto as a fallback
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const message = form.querySelector('#message').value.trim();
      const subject = encodeURIComponent('Portfolio contact from ' + name);
      const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
      // try to open mail client
      window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
    });
  }
});
