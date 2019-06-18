var choice = document.getElementById('choice').value;
var content = document.getElementById('content').value;
var id = document.getElementById('id').value;
var border = document.getElementById('border').value;




document.querySelector("#button").addEventListener("click", function() {
  var choice = document.querySelector("#choice").value;
  var content = document.querySelector("#content").value;
  var id = document.querySelector("#id").value;
  var border = document.querySelector("#border").value;
  var element = document.createElement(choice);
  element.className = border;
  element.innerHTML = content;
  element.id = id;
  document.querySelector('#master').appendChild(element);
});
