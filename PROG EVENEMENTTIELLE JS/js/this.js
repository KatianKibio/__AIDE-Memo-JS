//::::::::::::::::::::::::::::::::::::::::::::::::::::::
// De cette manière le this renvoie l'objet window
// les fonctions fléché ne permet pas de récupérer le bon 'this'
// il faut utiliser la forme "function laFoncrino(){}"
var leBoutton = document.querySelector('button')

var displayResponse = () => {
    console.log("BOUTTON CLICQUEZ !");
    console.log(this);
}

leBoutton.addEventListener('click', displayResponse)


//::::::::::::::::::::::::::::::::::::::::::::::::::::::
// De cette manière la fonction renvoi en this plus précis : ici button
function otherResponse() {
    console.log("Bip bip bip !");
    console.log(this);//button
    // on peut maintenant l'utiliser et changer ses valeurs
    if (this.style.color && this.style.color == "red") {
    // verif permetant de jongler entre deux valeurs garce à '&&'
        this.style.color = "green"
        this.style.background = "yellow"
    } else {
        this.style.color = "red"
        this.style.background = "black"
        this.style.fontSize = "1.5em"
        this.style.borderRadius = "15px"
    }



    console.log('-------------------------------\n');
}

leBoutton.addEventListener('click', otherResponse)

