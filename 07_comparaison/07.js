let a = prompt("1er nombre");
let b = prompt("2ème nombre");

if (a < b){
  document.write(b + " est plus grand que " + a);
}
else if (a == b){
  document.write(a + " sont egal " + b);
}
else if (isNaN(a) && isNaN(b)){
  document.write("Ce n'est pas un nombre");
}
else{
  document.write(a + " est plus grand que " + b);
}
