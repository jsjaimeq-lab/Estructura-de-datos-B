// BOTONOES DE LA CARDS PARA ABRIRI LA MODAL 

let botones = document.querySelectorAll(".btn-modal");

botones.forEach(boton => {
    boton.addEventListener("click", function(){
        let modal = new bootstrap.Modal(document.getElementById("miModal"));
        modal.show();
    })
});

// validacion del formulario 

document.getElementById('login').addEventListener('submit', function(e){
    e.preventDefault()

    let email = document.getElementById('email').value
    let contrasena = document.getElementById('password').value 
    let mensaje = document.getElementById('mensaje');

    const USER_DEFAULT = "juanjaimeyt@gmail.com";
    const PASSWORD = "123";


    if(email === "" || contrasena === ""){
        mensaje.innerHTML = " Todos los campos son obligatorios";
        mensaje.className = "text-warning";
    }else if(email === USER_DEFAULT && contrasena === PASSWORD){
        mensaje.innerHTML = "Bienvenido al sistema";
        mensaje.className = "text-success";
    }else{
        mensaje.innerHTML = " Error al procesar los datos ";
        mensaje.className = "text-danger";
    }
})

