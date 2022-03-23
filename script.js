const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


$(".gl-slider").slick(
  {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    prevArrow: '<span class="priv-arrow"><i class="far fa-arrow-alt-circle-left"></i></span>',
    nextArrow: '<span class="next-arrow"><i class="far fa-arrow-alt-circle-right"></i></span>',
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<span class="priv-arrow"><i class="far fa-arrow-alt-circle-left"></i></span>',
          nextArrow: '<span class="next-arrow"><i class="far fa-arrow-alt-circle-right"></i></span>',
        }
      }
    ]
  });




	