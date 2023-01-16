function hideResultsAndError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("sully").setAttribute("class", "hidden");
  document.getElementById("mike").setAttribute("class", "hidden");
  document.getElementById("roz").setAttribute("class", "hidden");
  document.getElementById("nobody").setAttribute("class", "hidden");
}

window.onload = function() {
  let form = document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResultsAndError();
    const age = parseInt(document.querySelector("input#age").value);
    const height = parseInt(document.querySelector("input#height").value);

  if (age && height) {
    if (age >= 30 || height >= 70) {
        document.getElementById("sully").removeAttribute("class");
      } else if (age >= 20 && height >= 60) {
        document.getElementById("mike").removeAttribute("class");
      } else if (age >= 15 && height >= 50) {
        document.getElementById("roz").removeAttribute("class");
      } else if (age <= 14 || height <= 49) {
        document.getElementById("nobody").removeAttribute("class");
      } 
  } else {
    document.getElementById("error-message").removeAttribute("class");
  };
}
}