let learnButton = document.querySelector(".learn-button");
learnButton.addEventListener("click", learn);
function learn() {
  let name = prompt("What is your name?");
  let preference = prompt("Do you enjoy coding?");
  alert("Keep coding" + name + "❤️");
}
