let sumarLento=(numero)=>{
    return new Promise((resolve,reject)=>{
       setTimeout(()=>resolve(numero+1),800);
       //setTimeout(()=>reject("Algo salio mal"),800);
        
       
    });

}
let sumarRapido=(numero)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>reject("Algo salio mal"),300);
      //  setTimeout(()=>resolve(numero+1),300);
    });

    }
    Promise.race([sumarLento(5),(sumarRapido(10))])
    .then(respuestas=>{
        console.log(respuestas);
    })
   .catch(console.log);