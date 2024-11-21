class DisciplinaRepositorio {
    constructor() {
        this.disciplinas = [];
    }

    inserir(disciplina) {
        this.disciplinas.push(disciplina);
    }

    pesquisar(codigo) {
        return this.disciplinas.find(d => d.codigo === codigo);
    }

    listar() {
        return this.disciplinas;
    }

    atualizar(disciplinaAtualizada) {
        const index = this.disciplinas.findIndex(d => d.codigo === disciplinaAtualizada.codigo);
        if (index > -1) {
            this.disciplinas[index] = disciplinaAtualizada;
        }
    }

    remover(codigo) {
        const index = this.disciplinas.findIndex(d => d.codigo === codigo);
        if (index > -1) {
            this.disciplinas.splice(index, 1);
        }
    }
}
