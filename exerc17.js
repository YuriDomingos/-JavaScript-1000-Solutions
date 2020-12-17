/*
 Autor : Yuri Francisco Domingos 
 Data  : 02 - 06 - 2020
 Exercicio : 17

*/

function sumDigit(n)
{
    var s = n.toString();
    var sum = 0;

 for ( var char of s )
 {
    var digit = parseInt(char);
   sum += digit
}

return  sum;

}


//--- impelementation 


var  n = sumDigit(123)

console.log(" A soma dos digitos  "+n)
