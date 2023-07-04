export class Aluno{

  _cpf;

     constructor(n1, n2){
        this.nome = n1;
        this.sobreNome = n2;
      }

      set inserirCpf(cpf){
        this._cpf = cpf;
      }

      get inserirCpf(){
        return this._cpf;
      }

      falarNome(){
       return this.nome
      }

      falarsobreNome(){
        return this.sobreNome

      }
       
    }
