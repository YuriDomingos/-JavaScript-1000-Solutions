/*
@Autor  : Yuri Francisco Domingos 
Data    : 02 - 06 - 2020

*/


function  OnlyPositiveNumber(array)
{
  let array2 = [];

 for ( var i = 0; i < array.length;  i++)
 {
     var aux = array[i];
      
     if ( aux > 0 )
     {
       array2.push(aux)
     }
 }

  return array2;

}


//------------ using other formule 

function  OnlyPositiveNumberSecondStrategy ( array)
{
   var array2 = [];
  for ( var el of array )
  {
     if ( el > 0 )
      {
         array2.push(el)
      }
  }
  
  return array2;

}

function threadOPtion(array)
{
  return array.filter(el => el >= 0)
}



//-----  Implementatipn  


var ARRAY = [ 3,5,-7,2,-1,9];

var  getValues = OnlyPositiveNumber(ARRAY)

console.log (getValues); 


var secV = OnlyPositiveNumberSecondStrategy ( ARRAY)
 console.log(secV)

var b = threadOPtion(ARRAY)

 console.log(b)
