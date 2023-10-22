"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener cada uno de los botones
y asignarle el evento de mouse "click"

Cuando un botón es presionado, se debe agregar la clase
"fuego" al botón (deberá cambiar de color)

*/

const boton1 = document.querySelector("#boton1");
boton1.addEventListener("click",
    function(){
        boton1.classList.add("fuego")
        boton2.classList.remove("fuego")
        boton3.classList.remove("fuego")
}
)

const boton2 = document.querySelector("#boton2");
boton2.addEventListener("click",
    function(){
        boton2.classList.add("fuego")
        boton1.classList.remove("fuego")
        boton3.classList.remove("fuego")
}
)

const boton3 = document.querySelector("#boton3");
boton3.addEventListener("click",
    function(){
        boton3.classList.add("fuego")
        boton2.classList.remove("fuego")
        boton1.classList.remove("fuego")
}
)

