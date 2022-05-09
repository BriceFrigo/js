let nom = prompt("Quels jours somme nous");
let res = nom.toLowerCase();
console.log(res);

    // if (res == 'Dimanche') {
    //     document.write('on est dimanche');
    // } 

    // else if(res == 'Samedi')  {
    //   document.write("On n'est Samedi");
    // }

    // else if(res == 'Vendredi')  {
    //   document.write("On n'est Vendredi");
    // }

    // else if(res == 'Jeudi')  {
    //   document.write("On n'est Jeudi");
    // }

    // else if(res == 'Mercredi')  {
    //   document.write("On n'est Mercredi");
    // }

    // else if(res == 'Mardi')  {
    //   document.write("On n'est Mardi");
    // }

    // else if(res == 'Lundi')  {
    //   document.write("On n'est Lundi");
    // }


    switch (res) {
      case "lundi":
          document.write("Nous somme Lundi");
        break;
    
      case "mardi":
          document.write("Nous somme Mardi");
        break;
    
      case "mercredi":
          document.write("Nous somme Mercredi");
        break;
    
      case "jeudi":
          document.write("Nous somme Jeudi");
        break;
    
      case "vendredi":
          document.write("Nous somme Vendredi");
        break;
    
      case "Samedi":
          document.write("Nous somme Samedi");
        break;

      case "Dimanche":
          document.write("Nous somme Dimache");
        break;

        default:
          document.write("Erreur");
          break;
    }
