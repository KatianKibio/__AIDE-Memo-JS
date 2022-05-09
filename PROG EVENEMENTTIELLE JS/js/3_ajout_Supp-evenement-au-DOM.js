console.log('▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒');
console.log('AddEventListener');

console.log('• Parametre obligatoire');
console.log('► type : (click, mouseenter, keyupu, etc.)');
console.log("► listener : notre fonction js qui sera exécutée");
console.log('- - - - -');
console.log('• Parametre facultatif');
console.log('► option :');
console.log("   capture : un booléen indiquant le sens de propagation de l'événement : parent puis élément, ou élément puis parent.");
console.log("   once : un booléen indiquant si l'événement doit être supprimé après son appel, si la valeur est true alors il ne sera émis qu'une seule fois.");
console.log("   passive : un booléen indiquant que l'événement ne sera jamais émis.");

console.log('▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒');
console.log('RemoveEventListener');
console.log("BONNE PRATIQUE :\nSupprimer un eventListener quand on en a plus besoin est une excellente pratique, car il peut être coûteux pour le navigateur qui doit observer un nœud de DOM supplémentaire.");

var monBouton = document.getElementById('btn')

function clickMe() {
    confirm('clické')
}

monBouton.addEventListener('click', clickMe)

console.log('NOTE :');
console.log("removeEventListener prend les mêmes paramètres que la fonction d'ajout.\nPour réaliser la suppression, les paramètres type et listener doivent obligatoirement être identiques à la création et à la suppression.");

// Ne fonctionnera pas car le paramètre listener n'est pas le même
//monBouton.removeEventListener("click", myFunction); 

// Ne fonctionnera pas car le paramètre type n'est pas le même
//monBouton.removeEventListener("mousedown", clickMe);

// Fonctionnera car les parametres sont identique
monBouton.removeEventListener("click", clickMe);
//Donc la boite de dialogue ne s'affichera plus

console.log('A RETENIR :');
console.log("La méthode d'ajout d'un écouteur d'événements est la signature de celui-ci. Pour le supprimer,\nnous devons obligatoirement renseigner les mêmes paramètres.");

console.log('▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒');
console.log('La délégation des événements');
console.log('- - - - - - - - - - - - - - -');
console.log(`La délégation d'événement est une pratique consistant à lier un événement non pas sur l'élément ciblé, mais sur l'un de ses ancêtres.\nLa délégation est très utile dans le cas où nous souhaitons lier un événement sur un élément de DOM qui n'existe pas encore au moment du chargement de la page,\ncomme par exemple un bouton qui serait ajouté dynamiquement au DOM par une action de script.\nCréer un événement sur cet élément à l'aide de addEventListener au chargement de la page ne fonctionnera pas.\nIl est alors nécessaire de modifier la syntaxe de addEventListener pour créer une délégation.`);

var element = document.getElementById('event_2')

element.addEventListener('click', function(e) {

  var initElem = e.target;

    if(initElem.className == 'no-event'){

        return;

    }

    alert("Actif seulement sur Délégation 2")

})