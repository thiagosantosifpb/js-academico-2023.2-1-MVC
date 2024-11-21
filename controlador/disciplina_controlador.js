class DisciplinaControlador {
    constructor() {
        this.servico = new DisciplinaServico();
    }

    inserir() {
        const codigoElemento = document.querySelector("#codigoDisciplina");
        const nomeElemento = document.querySelector("#nomeDisciplina");
        try {
            const disciplina = this.servico.inserir(codigoElemento.value, nomeElemento.value);
            const listaDisciplinasElemento = document.querySelector("#listaDisciplinas");
            this.inserirDisciplinaNoHtml(disciplina, listaDisciplinasElemento);
        } catch (e) {
            alert(e.message);
        }
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Código: ${disciplina.codigo} - Nome: ${disciplina.nome}`;
        elementoDestino.appendChild(disciplinaElemento);
    }

    inserirAlunoNaDisciplina() {
        const codigoDisciplina = prompt('Informe o código da disciplina:');
        const nomeAluno = prompt('Informe o nome do aluno:');
        const idadeAluno = parseInt(prompt('Informe a idade do aluno:'), 10);
        const matriculaAluno = prompt('Informe a matrícula do aluno:');

        const aluno = new Aluno(nomeAluno, idadeAluno, matriculaAluno);
        try {
            this.servico.inserirAlunoNaDisciplina(codigoDisciplina, aluno);
            alert(`Aluno ${aluno.nome} inserido com sucesso na disciplina ${codigoDisciplina}.`);
        } catch (e) {
            alert(e.message);
        }
    }
}
