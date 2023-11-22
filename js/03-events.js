const buttons = document.querySelector(".js-buttons");
const addBtn = document.querySelector(".js-add-button");
const selectedBtns = new Set();

let amountCounter = 1;

addBtn.addEventListener("click", onAddBtnClick);
buttons.addEventListener("click", onButtonsClick);

function onAddBtnClick() {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = `Button ${amountCounter}`;

  buttons.appendChild(button);
  amountCounter += 1;
}

function onButtonsClick({ target }) {
  if (target.nodeName !== "BUTTON") return;

  if (target.classList.contains("is-active")) {
    selectedBtns.delete(target.textContent);
  } else {
    selectedBtns.add(target.textContent);
  }

  target.classList.toggle("is-active");
}
