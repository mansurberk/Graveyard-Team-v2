function scrolledDown() {
  var navbar = document.getElementById("navbar");
  navbar.style.opacity = "0";
  navbar.style.pointerEvents = "none";
}

function scrolledUp() {
  var navbar = document.getElementById("navbar");
  navbar.style.opacity = "1";
  navbar.style.pointerEvents = "all";
}




var lastScrollTop = 0;

window.addEventListener("scroll", function(){
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){
      scrolledDown();
   } else {
      scrolledUp();
   }
   lastScrollTop = st <= 0 ? 0 : st;
}, false);