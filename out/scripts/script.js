var slideout = new Slideout({
    'panel': document.querySelectorAll('main')[0],
    'menu': document.querySelectorAll('nav.main')[0],
    'padding': 256,
    'tolerance': 70
  });


  document.querySelector('.burger').addEventListener('click', function() {
    slideout.toggle();
  });
  document.querySelectorAll('nav.main')[0].style.cssText = '';
