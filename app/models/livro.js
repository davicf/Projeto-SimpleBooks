class Livro{
    constructor(titulo, ano, paginas, resumo, capa, nota, autor_id) {
        this.titulo = titulo;
        this.ano = ano;
        this.paginas = paginas;
        this.resumo = resumo;
        this.capa = capa;
        this.nota = nota;
        this.autor_id = autor_id;
    }
}


module.exports = Livro;