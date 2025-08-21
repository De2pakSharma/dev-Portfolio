    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Theme toggle (persist in localStorage)
    const root = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme){ root.setAttribute('data-theme', savedTheme); }
    themeToggle.addEventListener('click', function(){
      const active = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', active);
      localStorage.setItem('theme', active);
      themeToggle.innerHTML = active === 'dark' ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
    });

    // Back to top visibility
    const toTop = document.getElementById('toTop');
    window.addEventListener('scroll', () => {
      toTop.style.display = window.scrollY > 600 ? 'inline-flex' : 'none';
    });
    toTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

    // Bootstrap form validation
    (()=>{
      const forms = document.querySelectorAll('.needs-validation');
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          if (!form.checkValidity()) { event.preventDefault(); event.stopPropagation(); }
          form.classList.add('was-validated');
        }, false);
      });
    })();
 
 //Projects
// Year
document.getElementById('year2').textContent = new Date().getFullYear();


// Theme toggle (persist across pages using localStorage)
const root2 = document.documentElement;
const saved = localStorage.getItem('theme');
if(saved){ root2.setAttribute('data-theme', saved); }
const t2 = document.getElementById('themeToggle2');
t2.addEventListener('click', function(){
const next = root2.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
root2.setAttribute('data-theme', next);
localStorage.setItem('theme', next);
t2.innerHTML = next === 'dark' ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
});


// Simple client-side filter
const buttons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('#grid > div');


buttons.forEach(btn => {
btn.addEventListener('click', () => {
buttons.forEach(b=>b.classList.remove('active'));
btn.classList.add('active');
const cat = btn.getAttribute('data-filter');
cards.forEach(c => {
const show = cat === 'all' || c.getAttribute('data-cat') === cat;
c.style.display = show ? '' : 'none';
});
});
});
 
function sendToWhatsApp(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Apna WhatsApp number yahan dalna (91 = India code)
  let phoneNumber = "918059985303";

  let url = "https://wa.me/" + phoneNumber + "?text="
    + "*Name:* " + name + "%0a"
    + "*Email:* " + email + "%0a"
    + "*Message:* " + message;

  window.open(url, "_blank").focus();
}