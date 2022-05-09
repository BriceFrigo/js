let nombre = prompt("veuillez saisir mois en numero '12' ")
let mois30 = [4, 6, 9, 11];
let mois31 = [1, 3, 5, 7, 8, 10, 12]

if (nombre >= 1 && nombre <= 12) {

  if (nombre == 2) {
    document.write("Votre mois contiens 28 jours");
  }
  else if (nombre == mois30[0] || mois30[1] || mois30[2 || mois30[3]]) {
    document.write("Votre mois contiens 30 jours");
  }

  else {
    document.write("Votre mois contiens 31 jours");
  }
}
else {
  console.log("error");
}
