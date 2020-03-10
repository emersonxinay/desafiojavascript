var list = [{
"completed":false,
"id":1,
"title":"Delectus aut autem",
},
{
"completed":false,
"id":2,
"title":"Quis ut nam facilis et officia qui",
},
{
"completed":false,
"id":3,
"title":"Fugiat veniam minus",
},
{
"completed":true,
"id":4,
"title":"Et porro tempora",
},
{
"completed":false,
"id":5,
"title":"Laboriosam mollitia et enim quasi adipisci quia providentillum",
},
{
"completed":false,
"id":6,
"title":"Qui ullam ratione quibusdam voluptatem quia omnis",
},
{
"completed":false,
"id":7,
"title":"Illo expedita consequatur quia in",
"userId":1
},
{
"completed":true,
"id":8,
"title":"Quo adipisci enim quam ut ab",
},
{
"completed":false,
"id":9,
"title":"Molestiae perspiciatis ipsa",
},
{
"completed":true,
"id":10,
"title":"Illo est ratione doloremque quia maiores aut",
}];
function sortListTodo(){
  var ol_todo = document.getElementById('todo');
  var ol_done = document.getElementById('done');
  list.forEach((key, value, map)=> {
    var li = document.createElement("li");
    li.id = key.id;
    li.appendChild(document.createTextNode(key.title));
    if (key.completed == true) {
      ol_todo.appendChild(li)
    }
    else {
      ol_done.appendChild(li)
    }
  });
}
window.onload = function (){
  sortListTodo();
  var todo_list_li = document.getElementById("todo").querySelectorAll("li");
  todo_list_li.forEach((item, index) => {
    item.addEventListener("click", function(){
      completeTask(item.id)}, false);
  });
}
function completeTask(object_id){
  var todo_list_li = document.getElementById("todo").querySelectorAll("li");
  var done_list = document.getElementById('done');

  todo_list_li.forEach((item, index)=>{
      if (item.id == object_id) {
        item.parentNode.removeChild(item);
        done_list.appendChild(item)

      }
  });
}
