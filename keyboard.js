const teclas = document.querySelectorAll(".tecla");

teclas.forEach(function (tecla) {
  tecla.onmousedown = function () {
    respostaTeclado.value += tecla.textContent;
    console.log(tecla.textContent);
  };
});

const backspace = document.querySelector("#backspace");

backspace.addEventListener("click", deletar);
function deletar() {
  let conteudoInput = respostaTeclado.value;
  backspace.onmousedown = conteudoInput.replace(/.$/, "");
}
