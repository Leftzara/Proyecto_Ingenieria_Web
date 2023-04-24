

    function validar(rut) {
    var suma=0;
    var arrRut = rut.split("-");
    var rutSolo = arrRut[0];
    var verif = arrRut[1];
    var continuar = true;
    for(i=2;continuar;i++){
    suma += (rutSolo%10)*i;
    rutSolo = parseInt((rutSolo /10));
    i=(i==7)?1:i;
    continuar = (rutSolo == 0)?false:true;
    }
    resto = suma%11; dv = 11-resto;
    if(dv==10){
    if(verif.toUpperCase() == 'K') return
   true;
    }else if (dv == 11 && verif == 0)
    return true;
    else if (dv == verif) return true;
    else return false;
    return false;
   }

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("formulario").addEventListener("submit",function(evento){
        console.log("paso por aqui..");
        evento.preventDefault();
    });   
});



const forms = document.querySelectorAll('.needsvalidation');
let password = document.getElementById("contrasenya");

const campos= document.getElementById("campos");


(()=>{
    "use strict"
    const forms = document.querySelectorAll(".needs-validation")
    Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
    if (!form.checkValidity()) {if(!checkPattern() && password.value!==""){
        campos.children[3].getElementsByClassName("invalidfeedback")[0].innerHTML = "Contraseña no valida";
        } if(!checkPattern() && password.value!==""){
            campos.children[3].getElementsByClassName("invalidfeedback")[0].innerHTML = "Contraseña no valida";
            }
            event.preventDefault()
            event.stopPropagation()
            }
            form.classList.add('was-validated')
            }, false)
            })   
        })()
    
     


    function checkPattern(){
        var elem = document.getElementById("contrasenya");
        var pattern = elem.getAttribute("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$");
        var re = new RegExp(pattern);
        if (re.test(elem.value)) {
        return true;
        } else {
        return false;
        }
        }

   

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

