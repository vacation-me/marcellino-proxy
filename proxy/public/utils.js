var debounce = function(func, timeout) {
  var callable = true;
  return function() {
    if (callable) {
      func();
      callable = false;
      setTimeout(function() {
        callable = true;
      }, timeout);
    }
  };
};

var scrollSticky = function() {
  var booking = document.getElementById("book");
  if (booking) {
    if (window.pageYOffset > booking.offsetTop - 12) {
      booking.children[0].classList.add("sticky");
    } else {
      booking.children[0].classList.remove("sticky");
    }
  }
};

window.onscroll = scrollSticky;
