 var x = 0;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("text1").value = "";
}

function display_array()
{
     
    
   for (var y=0; y<1; y++)
   {
   
     if(array[y]%2==0)
     {
      document.getElementById("Result1").innerHTML = "first element is not a Prime number."
     }
     else
     {
      document.getElementById("Result1").innerHTML = "first element is a Prime number."
     }
   }
  


   document.getElementById("result").innerHTML= " the array is"+array ;
}