let messageEl = document.getElementById("message");
let numberEl = document.getElementById("number");
function addNumber() {
  let num = parseInt(numberEl.textContent || "0", 10);
  numberEl.textContent = num + 1;
}
function subNumber() {
  let num = parseInt(numberEl.textContent || "0", 10);
  if (num <= 0) {
    messageEl.textContent = "You cannot decrement any further.";
    setTimeout(() => {numberEl.textContent = ""}, 1000);
  } else {
    numberEl.textContent = num - 1;
  }
}
