/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})

/* Contador regressivo */
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = "Você tem " + minutes + ":" + seconds + " para decidir!";
      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

window.onload = function () {
  var duration = 60 * 15; // Converter para segundos (60 segundos X quant. minutos)
      display = document.querySelector('#timer'); // selecionando o timer
  startTimer(duration, display); // iniciando o timer
};


/* Valida email */
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

/* Cadastra email */
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let email = document.getElementById('txtemail').value;
  if (validateEmail(email)) {
    let nome = document.getElementById('txtnome').value;
    let data = {
      nome,
      email
    }
    let convertData = JSON.stringify(data);
  
    localStorage.setItem('lead', convertData)
  
    document.getElementById('error').innerHTML = `<b>Parabéns ` + nome + `!<br>Email cadastrado com sucesso!</b>`
  
    document.getElementById('txtemail').value = ''
    document.getElementById('txtnome').value = ''
  
    content.innerHTML = done
  } else {
    document.getElementById('error').innerHTML = `<b>Atenção! Email inválido!<br>Tente novamente.</b>`
  }
})