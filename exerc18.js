/*
@Autor : Yuri Francisco Domingos 
Data : 02 - 06 - 2020
Objectivo : mostrar os primos existentes nos 100
*/

function isPrime(n)
{
  if ( n < 2 ) return false;
  if ( n == 2 ) return true;

var aux = Math.sqrt(n)

for ( var i = 2; i < aux; i++)
 {
    if ( n%i == 0)
    {
       return false;
    }
}
  return true;

}



function firstPrimer(nCount)
{
   var n = 0;
   var i = 2;


  while ( n < nCount )
   {
       if (  isPrime(i))
        {
             console.log(" n --> "+i)
             n++;
       }

     i+=2;
 }

}


var n = firstPrimer(100);

console.log(firstPrimer(100))
