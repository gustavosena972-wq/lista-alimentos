function adicionar() {
    const input = document.getElementById("inputAlimento");
    const lista = document.getElementById("lista");

    if (input.value.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = input.value;

    const botao = document.createElement("button");
    botao.textContent = "X";
    botao.className = "remover";

    li.addEventListener("click", () => {
        li.classList.toggle("riscado");
    });
    botao.onclick = function () {
        lista.removeChild(li);
    };

    li.appendChild(botao);
    lista.appendChild(li);

    input.value = "";
}

