


function average(array)
{
  let  n = array.length;
  let acomulated = 0;

 for ( var i = 0; i < n; i++)
 {
   acomulated +=array[i];
 }

return (acomulated / n );

}


var Array = [1, 3, 9, 15, 90];

let AVG = average(Array)

console.log("O valor da media "+AVG)



