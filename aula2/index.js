import { Aluno } from "./aluno.js";

const aluno1 = new Aluno("Mateus", "Alves");

aluno1.inserirCpf = 12344444444;

console.log(aluno1.falarNome());

console.log(aluno1.falarsobreNome());

console.log(aluno1.inserirCpf);