function showpage(index) {
  switch (index) {
    case 1:
      p.innerHTML = `<iframe src="https://sp.booking.com/index.html?aid=1538014&label=zhtw-edge-ntp-topsites-curate-ana" wid />`;
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
  }
}

const navbar = document.querySelector('#nav');



// add fixed class to navbar

window.addEventListener('scroll', function () {

  if (window.pageYOffset > 100) {

    navbar.classList.add('navbar-fixed');

  } else {

    navbar.classList.remove('navbar-fixed');

  }

});