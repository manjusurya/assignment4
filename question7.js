function findlarge(){

    var x = parseInt( document.getElementById("text1").value);
    var y =parseInt( document.getElementById("text2").value);
   
   if(x>y){
       document.getElementById("result").innerHTML= x+ "is largest"

   }
   else{
       document.getElementById("result").innerHTML = y+ "is largest"
   }
}