"strict mode";

const billInput = document.getElementById("bill");
const BillBox = document.querySelector(".input-box");
const peopleBox = document.querySelector(".people");
const peopleInput = document.getElementById("peopleCount");
const tipBtns = document.querySelectorAll(".tip-btn");
const errorState = document.querySelector(".error");
const custom = document.getElementById("customTip");
const totalTip = document.querySelector(".tip");
const eachTip = document.querySelector(".eachTip");
const resetBtn = document.querySelector(".reset-btn");

let tip;
let tipPercentage;
billInput.addEventListener("change", (event) => {
  tip = event.target.value;

  tipBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      tipCal(event);
    });
  });

  custom.addEventListener("change", (event) => {
    tipCal(event);
  });
});

peopleInput.addEventListener("keyup", (event) => {
  if (event.target.value.length === 0) {
    errorBorder();
  } else {
    removeError();
    const tipForAPerson = tipPercentage / Number(event.target.value);
    totalTip.textContent = `$ ${tip}`;
    eachTip.textContent = `$ ${tipForAPerson}`;
  }
});

resetBtn.addEventListener("click", () => {
  bill.value = "";
  peopleInput.value = "";
  totalTip.innerText = `$0.00`;
  eachTip.innerText = `$0.00`;
  removeBorder(BillBox);
  removeBorder(peopleBox);
  removeError();
});

billInput.addEventListener("click", () => {
  boxCursor(BillBox);
});

peopleInput.addEventListener("click", () => {
  boxCursor(peopleBox);
});

function boxCursor(inputBox) {
  inputBox.classList.add("addBorder");
}

function removeBorder(inputs) {
  inputs.classList.remove("addBorder");
}

function errorBorder() {
  peopleBox.classList.add("addErrorBorder");
  errorState.style.display = "block";
  errorState.classList.add("colorRed");
}

function removeError() {
  peopleBox.classList.remove("addErrorBorder");
  errorState.style.display = "none";
  errorState.classList.remove("colorRed");
}

function tipCal(e) {
  const percentage = Number(e.target.value) / 100;
  return (tipPercentage = tip * percentage);
}
