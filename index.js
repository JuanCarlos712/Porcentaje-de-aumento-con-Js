const aumento = ()=>{
    let cred = document.getElementsByName('credito')[0].value;
    let tipo = document.querySelector("input[name='rbTarjeta']:checked").value;

    if(!cred){ 
        alert("Credito erróneo,\ningreselo correctamente");
    }

    if(cred<=0){ 
        alert("Error, ingrese bien el credito");
    }

    if(cred>0){
        if(tipo=="op1"){
            r1 = cred * 1.25; 
            alert("Credito anterior: "+cred+"\nCredito nuevo: "+r1);
        }

        if(tipo=="op2"){
            r1 = cred * 1.35; 
            alert("Credito anterior: "+cred+"\nCredito nuevo: "+r1);
        }

        if(tipo=="op3"){
            r1 = cred * 1.40; 
            alert("Credito anterior: "+cred+"\nCredito nuevo: "+r1);
        }
        
        if(tipo=="op4"){
            r1 = cred * 1.5; 
            alert("Credito anterior: "+cred+"\nCredito nuevo: "+r1);
        }
    }
    
}
