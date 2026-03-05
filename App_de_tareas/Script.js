const tarea = document.getElementById("tarea");
const agregar = document.getElementById("agregar");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");

const listaDecompras = document.querySelector("ul")
agregar.addEventListener("click", (e)=>{
    try {
        e.preventDefault();
        const li = document.createElement("ul");
        li.textContent = tarea.value;
        lista.appendChild(li);
    } catch (error) {
        
    }
    
    
});



