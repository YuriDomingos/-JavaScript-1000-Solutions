/*
Autor  : Yuri Francisco Domingos 
Data : 02-06-2020
exercicio : 13 
Objectivo faxer  sequencia de fibonancci  

*/

var f0 = 0;
var f1 = 1;


for ( let i = 2; i <= 10; i++)
{
   fi = f0+f1;
  console.log(fi)

  f0 = f1
  f1 = fi
}
