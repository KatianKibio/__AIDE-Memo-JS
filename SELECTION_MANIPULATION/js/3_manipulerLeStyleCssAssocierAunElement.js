// LA PROPRIETE STYLE  ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// MANIPULER LE STYLE CSS |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// • La propriété style d'un élément permet de modifier les propriétés CSS pour cette élémenet
// • On utilise directement le nom de la propriété CSS après « conversion camelback »
    // font-size → fontSize
    // border-right-style → borderRightStyle
    // etc
// • Les valeurs sont toujours des chaînes de caractère
// • Les unités doivent être précisées

// JE CIBLE
var article = document.querySelectorAll('.article')[0]

/**/ 

console.log(article.style);
//affichera ► CSS2Properties(0)
    // il contient plusieurs attributs (presque toutes les proprièté css)
    // Il sont modifiable. Les style css ont des valeur vide → ""

// Essaie de changement de la couleur du texte de l'article
article.style.color = "red" // tester en changer la valeur de la couleur

// JE CIBLE LE BODY
var body = document.querySelector('body')
// JE MODIFIE SA COULEUR DE FOND
body.style.backgroundColor = "rgb(100,25,75)"//bordeau flashi
body.style.color = "goldenrod"

// changement de la police
var h1 = document.querySelector('h1')
h1.style.fontFamily = 'Verdana, serif'
h1.style.fontSize = '1.2em'
h1.style.textShadow = 'black 3px 3px'

/**/

console.log('---------------------------------------------');
// ATTENTION - A SAVOIR // |||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||

// L'attribut style ne permet pas
    // d'acceder aux valeurs des propriétés définies dans la feuille de style.
    // Il permet d'accéder seulement aux propriétés définies dans le document HTML ou via style

// GET COMPUTED STYLE DE L'OBJET WINDOW
// Pour accéder aux valeurs du style : il faut utiliser getComputedsStyle
    // getComputedStyle permet d'obtenir un objet regroupant l'ensemble des valeurs
    // des propriétés CSS appliquées par le navigateur pour un élément
    
// JE PEUX RECUPERER MAIS PAS MODIFIER LES VALEURS
// car les valeurs sont uniquement accessible en lecture
// parfois ont a besoin de connaître la valeur par défaut 
// afin de savoir si il faudra modifdié ou pas
// DOnc ceci nous permets déjà de récupérer
// et si je sais que c'est la couleur noir, je peux dire que je dois agir dessus
console.log('- - ACCESS AUX VALEURS - -');
console.log(window.getComputedStyle(article).color)
console.log(window.getComputedStyle(article).backgroundColor)
console.log(window.getComputedStyle(article).fontSize)
console.log(window.getComputedStyle(article).border)
// mais si je veux agir dessus là il faudra pensser à prendre l'élément
// et utiliser style et puis ex : color = "green" et la je peux changer
console.log('---------------------------------------------');

// RESUMÉ 
// getComputedStyle → DONNE ACCESS AUX VALEURS
// style → POUR MODIFIÉ LES VALEURS