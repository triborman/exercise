let learnButton = document.querySelector(".learn-button");
learnButton.addEventListener("click", learn);
function learn() {
  let name = prompt("What is your name?");
  let preference = prompt("Do you enjoy coding?");
  return alert("Keep coding, " + name + "❤️");
}

function bingo(x) {
  if (x > 5) {
    console.log("Bingo");
  } else console.log("Loser!");
}
bingo(4);
bingo(7);
