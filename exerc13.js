/*
@Autor : Yuri Francisco Domingos 
Data : 02 - 06 - 2020
*/

function takeGreat(array)
{
  var max  = array[0];

  for ( var  i = 0; i < array.length; i++ )
  {  
        if ( array[i] > max )
        {
           max = array[i];
        }
   }

  return max;
}

var ARRAY = [ 4,3,2,4,-6,3,10];

var hereMax = takeGreat(ARRAY);
console.log("o max "+hereMax)
    

