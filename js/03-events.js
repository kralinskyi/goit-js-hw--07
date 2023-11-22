const buttons = document.querySelector(".js-buttons");
const addBtn = document.querySelector(".js-add-button");

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
  target.classList.toggle("is-active");
}
