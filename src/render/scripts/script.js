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



// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function (event) {
  var that = $(this);

  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}

var onMapClickHandler = function (event) {
  var that = $(this);

  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);

  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");

  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}

// Enable map zooming with mouse scroll when the user clicks the map
$('.google-map').on('click', onMapClickHandler);
