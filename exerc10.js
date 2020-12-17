/*
@Autor : Yuri Francisco Domingos
Data : 2 - 06 -2020
exercicio numero  : 10
*/


function somaArray(array)
{
  var soma = 0;

  for ( let i = 0; i < array.length; i++)
  {
    soma +=array[i];
 }
  return soma;
}


var Array = [2, 3, -1, 5, 7, 9, 10, 15, 95];

var soma = somaArray(Array)

console.log(" a soma de todos elementos do array eh "+soma)
 

