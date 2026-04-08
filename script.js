let listaDeAlimentos = JSON.parse(localStorage.getItem("minhaLista")) || [];
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
    function salvarLista() {
        localStorage.setItem("minhaLista", JSON.stringify(listaDeAlimentos));
        alert("Lista salva com sucesso! ✅");
    }
    // Exemplo: adicionar alimento
    function adicionarAlimento() {
        const input = document.getElementById("inputAlimento");
        const nome = input.value.trim();
        if (nome !== "") {

            listaDeAlimentos.push({ nome: nome, riscado: false });
            input.value = "";
            renderizarLista();
            salvarLista(); // salva automaticamente
        }
    }
    botao.onclick = function () {
        lista.removeChild(li);
    };

    li.appendChild(botao);
    lista.appendChild(li);

    input.value = "";
}
function salvarLista() {
    localStorage.setItem("minhaLista", JSON.stringify(listaDeAlimentos));
    alert("Lista salva com sucesso! ✅");
}
renderizarLista();

