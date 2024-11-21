class AlunoControlador {
    constructor() {
        this.servico = new AlunoService();
    }

    inserir() {
        const nomeElemento = document.querySelector("#nome");
        const idadeElemento = document.querySelector("#idade");
        const matriculoElemento = document.querySelector("#matricula");
        const listaAlunosElemento = document.querySelector("#listaAlunos");

        try {
            const alunoInserido = this.servico.inserir(
                nomeElemento.value,
                Number(idadeElemento.value),
                matriculoElemento.value
            );
            if (alunoInserido) {
                this.inserirAlunoNoHtml(alunoInserido, listaAlunosElemento);
            }
        } catch (error) {
            this.exibirMensagemErro(error.message);
        }
    }

    inserirAlunoNoHtml(aluno, elementoDestino) {
        const alunoElemento = document.createElement("li");
        alunoElemento.textContent = `Nome: ${aluno.nome} - Idade: ${aluno.idade}`;
        elementoDestino.appendChild(alunoElemento);
    }

    listarAlunosMenoresIdade() {
        const listaAlunosMenoresElemento = document.querySelector('#listaAlunosMenores');
        const alunosMenores = this.servico.listarMenoresIdade();
        listaAlunosMenoresElemento.innerHTML = ''; 
        alunosMenores.forEach(menor => this.inserirAlunoNoHtml(menor, listaAlunosMenoresElemento));
    }

    exibirMensagemErro(mensagem) {
        const erroElemento = document.querySelector('#mensagemErro');
        if (erroElemento) {
            erroElemento.textContent = mensagem;
            erroElemento.style.display = 'block'; 
            setTimeout(() => erroElemento.style.display = 'none', 5000); 
        } else {
            alert(mensagem); 
        }
    }
}
