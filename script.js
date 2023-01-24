const form = document.querySelector("form");
const controller = new NLWSetup(form);
const button = document.querySelector("header button");

button.addEventListener("click", add);
form.addEventListener("change", save);

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5);
  const dayExists = controller.dayExists(today);
  dayExists
    ? alert(
        `Dia ${today} já registrado, volte amanhã para poder registrar mais um dia`
      )
    : controller.addDay(today);
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(controller.data));
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {};

controller.setData(data);
controller.load();
