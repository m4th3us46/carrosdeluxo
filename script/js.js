function navegacao(y){

    if (y === 1){

            
    document.getElementById("pA").style.display="flex";
    document.getElementById("pB").style.display="none";
    document.getElementById("pC").style.display="none";    
    
    }else if(y === 2){

            
    document.getElementById("pA").style.display="none";
    document.getElementById("pB").style.display="flex";
    document.getElementById("pC").style.display="none";    
    
    }else {

           
    document.getElementById("pA").style.display="none";
    document.getElementById("pB").style.display="none"
    document.getElementById("pC").style.display="flex"; 

    }

}