  document.querySelector('#logo').addEventListener('touchstart', function() {

    if (window.menuOpen) {
      setTimeout(function () {
        window.menuOpen = !window.menuOpen;
      }, 800)
    } else {
      window.menuOpen = !window.menuOpen;
    }
    
    $('body').toggleClass('cbp-spmenu-push-toright')
    $('nav').toggleClass('cbp-spmenu-open')
  });
  document.querySelectorAll('nav')[0].style.cssText = '';
