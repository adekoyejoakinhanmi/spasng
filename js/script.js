(function initialize () {
  let mobileNav = document.getElementById("mobile-nav");
  let mobileNavTrigger = document.getElementById("mobile-nav-trigger");

  mobileNavTrigger.addEventListener("click", function (e) {
    mobileNav.classList.toggle("hidden");
  });
})();