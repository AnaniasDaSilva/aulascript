class Pessoa {
    nome;
    idade;

    falarNome(){
        return this.nome;
    }

    falarIdade(){
        return this.idade;
    }

}

const aluno = new Pessoa();
aluno.nome = "Marcos Silva";
aluno.idade = 18;

console.log("Nome do aluno: " + aluno.falarNome());
console.log("Idade do aluno: " + aluno.falarIdade());


const professor = new Pessoa();
professor.nome = "Thiago";
professor.idade = 41;

console.log("Nome do professor: " + professor.falarNome());
console.log("Idade do professor: " + professor.falarIdade());

