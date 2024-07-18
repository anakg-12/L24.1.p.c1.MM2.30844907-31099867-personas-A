/*Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos
datos y reporte al final: el porcentaje de mujeres procesadas y si hay más hombres, más
mujeres o ambos por igual.
Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael,
Liz, Marcos y Leo; la salida requerida presenta el siguiente formato:
Porcentaje de mujeres procesadas: 58.33%
Hay más mujeres
*/
import CL_Tpersonas from "./CL_Tpersonas.js";
import CL_persona from "./CL_persona.js";

let persona1 = new CL_persona ("Luisa", "F");
let persona2 = new CL_persona ("Ana", "F");
let persona3 = new CL_persona ("Jose", "M");
let persona4 = new CL_persona ("Carmen", "F");
let persona5 = new CL_persona ("Rosa", "F");
let persona6 = new CL_persona ("Jose", "M");
let persona7 = new CL_persona ("Maria", "F");
let persona8 = new CL_persona ("Luz", "F");
let persona9 = new CL_persona ("Rafael", "M");
let persona10 = new CL_persona ("Liz", "F");
let persona11 = new CL_persona ("Marcos", "M");
let persona12 = new CL_persona ("Leo", "M");

let Tpersonas = new CL_Tpersonas ();
Tpersonas.procesar (persona1);
Tpersonas.procesar (persona2);
Tpersonas.procesar (persona3);
Tpersonas.procesar (persona4);
Tpersonas.procesar (persona5);
Tpersonas.procesar (persona6);
Tpersonas.procesar (persona7);
Tpersonas.procesar (persona8);
Tpersonas.procesar (persona9);
Tpersonas.procesar (persona10);
Tpersonas.procesar (persona11);
Tpersonas.procesar (persona12);

let salida = document.getElementById ("salida"); 
salida.innerHTML+=" <br> porcentaje de mujeres: "+Tpersonas.porcenF().toFixed(2);
salida.innerHTML+=" <br> hay: "+Tpersonas.mas_asis();


