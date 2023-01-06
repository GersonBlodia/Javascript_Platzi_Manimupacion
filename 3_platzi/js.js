const valor1=document.querySelector('#valorA');
const valor2=document.querySelector('#valorB');
const resultado=document.querySelector('#resultado')
const frame=document.querySelector('#frame');
function Sumar() {
 const resultado=parseInt(valor1.value)+parseInt(valor2.value);
  document.getElementById('resultado').innerHTML=resultado;
}
