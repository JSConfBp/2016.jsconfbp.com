function toggleMenu (e) {
  e.preventDefault()
  e.stopPropagation()

$('main').css('width',$('body').width() )

  if (window.menuOpen) {
    setTimeout(function () {
      window.menuOpen = !window.menuOpen;
      document.querySelector('main').removeEventListener('touchend', toggleMenu);
    }, 200)
  } else {
    window.menuOpen = !window.menuOpen;
    document.querySelector('main').addEventListener('touchend', toggleMenu);

  }

  $('body').toggleClass('cbp-spmenu-push-toright');
  $('nav').toggleClass('cbp-spmenu-open');


}

$('nav')[0].addEventListener('transitionend', function () {
  $('main').toggleClass('pushed');
  $('main').css('width','100%' )
})

document.querySelector('#logo').addEventListener('touchend', toggleMenu);

document.querySelectorAll('nav')[0].style.cssText = '';
