var arr = [1,'dos','tres',4,5,6,'siete',8,9,'diez'];
section_ul_string  = document.getElementById('string');
  section_ul_par = document.getElementById('par');
  section_ul_impar = document.getElementById('impar');
function sortlist(){
  arr.map(function(x) {
    if (isNaN(x)) {
      addToList(section_ul_string, x)
    }
  else {

    if (x%2 == 0) {

      addToList(section_ul_par, x)
    }
    else {

      addToList(section_ul_impar, x)
    }
  }

});
}
function addToList(section,str){
  var node = document.createElement('li');

  node.appendChild(document.createTextNode(str))
  section.appendChild(node)
}
