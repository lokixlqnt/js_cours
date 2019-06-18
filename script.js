console.log('test');

var nom = document.getElementById('nom').value;
var prenom = document.getElementById('prenom').value;

var p = document.createElement("p");

function checkIfEmpty() {
  if (this === "") {
    return false;
  }
}


document.querySelector("#nom").addEventListener("blur", function() {
  checkIfEmpty();
});
document.querySelector("#prenom").addEventListener("blur", function() {
  checkIfEmpty();
});

document.querySelector("#bouton").addEventListener("click", function() {
  var nom = document.getElementById('nom').value;
  var prenom = document.getElementById('prenom').value;
  document.querySelector("div").appendChild(p);
  document.querySelector("p").innerHTML = 'Votre nom est ' + nom + ' et votre prénom est ' + prenom;

});
