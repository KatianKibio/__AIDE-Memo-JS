// creation de maliste de fonctions
var maListeDeFonction = {
    h1Click: function () {
        console.log("J'AI CLIQUÉ")
        if(this && this.style.color == "black") {
            this.style.color = "goldenrod"
        } else {
            this.style.color = "black"
        }
    },
    //:::::::::::::::::::::::::::::
    clicSections: function () {
        console.log("CLAP")

        if (this && this.style.backgroundColor == "orange") {
            this.style.backgroundColor = "lightgreen" 
            this.style.color = "darkgreen"
        } else {
            this.style.backgroundColor = "orange"
            this.style.color = "brown"
        }
    }
}

var maFonction = () => {
    // Je pointe le h1
    var h1 = document.querySelector('h1')
    // je le lie au click
    h1.addEventListener('click', maListeDeFonction.h1Click)
    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // je cible mes balises sections
    var mesBalisesSections = document.getElementsByClassName('section')
    // j'ecoute aux clics
    for (let index = 0; index < mesBalisesSections.length; index++) {
        const baliseSection = mesBalisesSections[index];
        baliseSection.addEventListener('click', maListeDeFonction.clicSections)
    }
}

