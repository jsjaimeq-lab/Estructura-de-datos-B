
const template = document.getElementById("card-producto");
const contenedor = document.getElementById("contenedor");

const productos = [
    {nombre: "frutiño", precio: "1000", descripcion:"Producto para realizar jugos con mayor facilidad"},
    {nombre: "galleta Oreo", precio: "1800", descripcion:" galleta compuesta de dos capas hechas de chocolate y en la mitad con crema"},
    {nombre: "chocoramo", precio: "2500", descripcion:"delicioso"}
];

productos.forEach(p => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".nombre").textContent = p.nombre;
    clon.querySelector(".precio").textContent = p.precio;
    clon.querySelector(".descripcion").textContent = p.descripcion;
    contenedor.appendChild(clon);
});
