//peticion Post
//https://reqres.in/api/users"

let usuario={
    nombre:"Damian",
    edad:35
};


fetch ('https://reqres.in/api/users',{
    method:"POST",
    body:JSON.stringify(usuario),
    headers:{
        'Content-Type':'application/json'
    }
    
})
.then(resp=>resp.json())
.then(console.log)
.catch(error=>{
    console.log("error en la peticion");
    console.log(error);
})