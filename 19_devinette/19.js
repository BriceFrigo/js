let robot = Math.floor(Math.random() * 101);
console.log(robot)

for(let i = 0; i <= 6; i++){
    let joueur = prompt("Entrez un nombre entre 1 et 100 !");
    if(joueur > robot ){
        alert("Le chifre et trop grand !");
    }else if(joueur < robot){
        alert("Le chifre et trop petit !");
    }else{
        alert("Votre chiffre et hors limiteeee plus ultraaaa");
    }
    else if(joueur === robot){
        document.write("Vous avez gagner");
       break;
    }
}
