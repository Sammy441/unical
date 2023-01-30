const age = parseInt(prompt("how old are you?"));
const acompanied = confirm("are you accompanied by an adult");

if (age >= 13 || (age < 13 && acompanied)) {
  alert("you may come in");
} else {
  alert("you cant come in ");
}