var result = document.getElementsByName("result")[0];
var calculator = document.getElementsByName("calculator")[0];

var calcTotal = function(){
calculator.value = eval(calculator.value);
}
document.querySelectorAll(".btn").forEach(item => {
  item.addEventListener('click', event => {
    calculator.value += item.innerHTML
  })
})
function limpiar(){
  calculator.value =" ";
}
