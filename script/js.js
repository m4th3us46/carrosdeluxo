function navegacao(y){
    const carro1 = document.getElementById("pA");
    const carro2 = document.getElementById("pB");
    const carro3 = document.getElementById("pC");

    if (y === 1){

        carro1.style.display="flex";
        carro2.style.display="none";
        carro3.style.display="none";    
    
    }else if(y === 2){

        carro1.style.display="none";
        carro2.style.display="flex";
        carro3.style.display="none";    
    
    }else {

        carro1.style.display="none";
        carro2.style.display="none";
        carro3.style.display="flex";    

    }

}