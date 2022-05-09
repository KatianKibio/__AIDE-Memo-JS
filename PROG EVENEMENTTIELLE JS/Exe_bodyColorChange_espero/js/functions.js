// objet contenant les fonctions listeners

var listernerFunction = {
    h2Click: function(event){
        console.log(this);
        console.log("Click détecté sur la balise h2");
    },
    bgSectionManage: function(){//Ici pas besoin de mettre event
        console.log(this);
        if(this && this.style.backgroundColor == "red"){// si c'est egal à red alors on va changer en grren
            this.style.backgroundColor = "green"// on change en green
            this.style.color = "white"
        } else {
            this.style.backgroundColor = "red"// sinon c'est pas egal à red - on change en red
            this.style.color = "white"
        }
    }
}

// Mise en place des abonnements
var setupListener = () => {
    var h2 = document.querySelector('section#html h2')
    // ↓↓ //h2.addEventListener('click', listernerFunction.h2Click)
    h2.onclick = listernerFunction.h2Click //SIMPLIFIER !

    // Cibler les sections
    var sections = document.getElementsByClassName("section")//sselection multiple
    // On va parcourir un tableasu d'élément
    for (let index = 0; index < sections.length; index++) {
        const section = sections[index];

        // ↓↓ //section.addEventListener('click', listernerFunction.bgSectionManage)
        section.onclick = listernerFunction.bgSectionManage // c'est plus rapide
    }
}