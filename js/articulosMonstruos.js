import { getMonstruos } from "./accesoDatos.js";

const monstruos = await getMonstruos();
const $articulos = document.getElementById("articulos");
const $spinner = document.getElementById("spinner2");
$spinner.classList.add("ocultar");

if(monstruos.length)
{
    monstruos.forEach(monstruo => 
    {
        $articulos.insertAdjacentHTML("beforeend",
        `<article>
            <p>Nombre: ${monstruo.nombre}</p>
            <p><i class="fa-solid fa-mask text-white"></i> Alias: ${monstruo.alias}</p>
            <p><i class="fa-solid fa-book text-white"></i> Tipo: ${monstruo.tipo}</p>
            <p><i class="fa-regular fa-face-surprise"></i> Miedo: ${monstruo.miedo}</p>
            <p><i class="fa-solid fa-shield text-white"></i> Defensa: ${monstruo.defensa}</p>
        </article>`);
    });
}