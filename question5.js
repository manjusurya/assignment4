  
var x = [];
function iterate(){
    for(var i = 0; i<16; i++){
       
       x[i] = i ;  
       console.log(x[i]);
    }
    for(var i = 0; i<16; i++){
    
   
        if(x[i]%2==0)
        {
            document.getElementById("result1").innerHTML += x[i]+" " +" is even" +"</br>";
            
        }
        else{
            document.getElementById("result1").innerHTML += x[i]+" " +"is odd" +"</br>";
        }
    
}
}