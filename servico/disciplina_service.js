class DisciplinaServico {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        const existente = this.repositorio.pesquisar(codigo);
        if (existente) {
            throw new Error('Disciplina já cadastrada!');
        }
        const disciplina = new Disciplina(codigo, nome);
        this.repositorio.inserir(disciplina);
        return disciplina;
    }

    pesquisar(codigo) {
        return this.repositorio.pesquisar(codigo);
    }

    listar() {
        return this.repositorio.listar();
    }

    atualizar(disciplinaAtualizada) {
        this.repositorio.atualizar(disciplinaAtualizada);
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    inserirAlunoNaDisciplina(codigoDisciplina, aluno) {
        const disciplina = this.repositorio.pesquisar(codigoDisciplina);
        if (!disciplina) {
            throw new Error('Disciplina não encontrada!');
        }
        disciplina.alunos.push(aluno);
    }
}
