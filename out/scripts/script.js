  document.querySelector('#logo').addEventListener('touchstart', function() {
    $('body').toggleClass('cbp-spmenu-push-toright')
    $('nav').toggleClass('cbp-spmenu-open')
  });
  document.querySelectorAll('nav')[0].style.cssText = '';
