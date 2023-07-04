export class Calculadora{

    constructor(n1, n2){

        this.num1 = parseFloat(n1);
        this.num2 = parseFloat(n2);
       
      }
      operacao(op){
       let res;
        if(op == "+"){
          res =this.num1 + this.num2;
       }

      else if(op == "-"){
        res =this.num1 - this.num2;
     }

    else if(op == "*"){
      res =this.num1 * this.num2;
   }

   else if(op == "/"){
    res =this.num1 / this.num2;
 }
  
 else{
   let msg = "valor inválido"
   return msg;
 }

 return res;
      }

}

       
  
