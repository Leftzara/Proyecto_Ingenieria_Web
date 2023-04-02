document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("formulario").addEventListener("submit",function(evento){
        console.log("paso por aqui..");
        evento.preventDefault();
    });   
});


document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("formulario").addEventListener("submit",function(evento){
        let email=document.getElementById("email").value;
        let rut=document.getElementById("rut").value;
        let Contraseña=document.getElementById("Contraseña").value;
        let Recontraseña=document.getElementById("Recontraseña").value;
        const coleccion=document.getElementById("formulario").getElementsByTagName("li");
        if(email==""){
            coleccion[0].querySelector("span").innerHTML="El correo electrónico está vacio";
        }
        if(rut==""){
            coleccion[1].querySelector("span").innerHTML="el rut está vacio";
        }else{
            if(validar(rut)){
                coleccion[1].querySelector("span").innerHTML="";
            }else{
                coleccion[1].querySelector("span").innerHTML="rut inválido";
            }
        }
        evento.preventDefault();
    });   
});

