let navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    let target = document.querySelector(this.hash);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});
