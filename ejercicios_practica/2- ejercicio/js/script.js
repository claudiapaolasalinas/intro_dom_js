"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener cada uno de los botones utilizando su ID,
luego cambiar el texto de los botones por:
PEGAR / COPIAR / CORTAR

2) Obtener cada uno de los botones,
luego a cada uno agregar la clase "agua"

*/


const boton1 = document.querySelector("#boton1");
boton1.textContent = "PEGAR";

const boton2 = document.querySelector("#boton2");
boton2.textContent = "COPIAR";

const boton3 = document.querySelector("#boton3");
boton3.textContent = "CORTAR";




const boton11 = document.querySelector("#boton1");
boton11.classList.add("electricidad");

const boton22 = document.querySelector("#boton2");
boton22.classList.add("electricidad");

const boton33 = document.querySelector("#boton3");
boton33.classList.add("electricidad");

