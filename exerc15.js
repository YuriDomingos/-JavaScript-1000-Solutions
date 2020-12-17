
/*
@Autor  : Yuri Francisco Domingos 
Data : 02 - 06 - 2020
*/



function recursiveFibonacci(n)
{
   if ( n == 0) return 0;
   if ( n ==1 ) return 1;
  return  recursiveFibonacci(n-1)+ recursiveFibonacci(n-2);
}

var valuesFibo =  recursiveFibonacci(10)

console.log(valuesFibo)
