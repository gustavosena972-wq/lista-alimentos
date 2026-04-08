// Array global pegando do LocalStorage
let listaDeAlimentos = JSON.parse(localStorage.getItem("minhaLista")) || [];

// Função para renderizar a lista
function renderizarLista() {
    const ul = document.getElementById("listaAlimentos");
    ul.innerHTML = "";

    listaDeAlimentos.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item.nome;

        if (item.riscado) li.classList.add("riscado");

        // Clicar para riscar/desmarcar
        li.addEventListener("click", () => {
            li.classList.toggle("riscado");
            listaDeAlimentos[index].riscado = li.classList.contains("riscado");
            salvarLista();
        });

        // Duplo clique para remover
        li.addEventListener("dblclick", () => {
            listaDeAlimentos.splice(index, 1);
            renderizarLista();
            salvarLista();
        });

        ul.appendChild(li);
    });
}

// Função para adicionar alimentos
function adicionarAlimento() {
    const input = document.getElementById("inputAlimento");
    const nome = input.value.trim();
    if (nome !== "") {
        listaDeAlimentos.push({ nome: nome, riscado: false });
        input.value = "";
        renderizarLista();
        salvarLista();
    }
}

// Função para salvar no LocalStorage e mostrar mensagem
function salvarLista() {
    localStorage.setItem("minhaLista", JSON.stringify(listaDeAlimentos));

    const msg = document.getElementById("mensagemSalva");
    msg.style.display = "block";

    setTimeout(() => {
        msg.style.display = "none";
    }, 2000);
}

// Renderiza lista ao abrir a página
window.onload = renderizarLista;