let tour = prompt("nombre de tour");
let tour2 = prompt("nombre de tour2");
let j = 1;
for(let i = 1; i <= tour; i++){
    document.write("C'est le tour de manège n°"+ i);
    document.write("<hr>");
    document.write("<br>");
}

while (j <= tour2){
    document.write("C'est le tour de manège n°"+ j);
    document.write("<br>");
    j++;
}