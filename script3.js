var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]
var parent_tag = document.getElementById('dias');
dias.map(function(x){
var doc_element = document.createElement("li");
node = document.createTextNode(x);
doc_element.appendChild(node);
parent_tag.appendChild(doc_element);
});
