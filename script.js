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

document.getElementById("addDiv").addEventListener("click", function() {
  // Create a new div element
  var newDiv = document.createElement("div");
  newDiv.innerHTML = "I am a new div";

  // Add the new div to the container
  document.getElementById("container").appendChild(newDiv);
});