/*
@Autor : Yuri  Francisco Domingos 
Data : 02 -06 - 2020
Objectivo : Verificar se um numero e primo
*/


function isPrime(n)
{
  if ( n < 2 ) return false;
  if ( n == 2) return true;
 
var maxSQRT = Math.sqrt(n);

for ( let i = 2; i < maxSQRT; i++)
{
   if ( n%i == 0)
   {
     return false;
    }
}
  return true;
}


console.log(isPrime(5))
