const form = document.querySelector("form");
const controller = new NLWSetup(form);
const button = document.querySelector("header button");

button.addEventListener("click", add);
form.addEventListener("change", save);

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5);
  const dayExists = controller.dayExists(today);
  if (dayExists) {
    Swal.fire({
      icon: "error",
      title: `Dia ${today} já adicionado!`,
      text: 'Volte amanha para registrar mais um dia',
    });
  } else {
    controller.addDay(today);
    Swal.fire({
      icon: "success",
      title: "Dia adicionado com sucesso!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(controller.data));
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {};

controller.setData(data);
controller.load();
