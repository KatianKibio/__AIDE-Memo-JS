/*

var monH1 = document.querySelector('h1')

monH1.addEventListener('click', function() {
    alert('Coucou')
})

console.log(monH1);
// --------------------------------------------
var thirdArticle = document.querySelectorAll('.article')[2] //.querySelector('h2')

thirdArticle.addEventListener('click', function() {
    alert('mon article')
})

console.log(thirdArticle);
*/

// --------------------------------------------
//CREATION DE NOEUDS
//document.createElement('aside')
//document.createTextNode('Le texte de mon noeud')
//aside.cloneNode(true)

// --------------------------------------------
// INSERTION DE NOEUDS
//noeudParent.insertBefore(noeud, noeudReference)
//noeudReference.noeudParent = noeudParent
//
//parent.appendChild(noeud)
// noeud est ajouté à la fin des fils parent

// Si le noeud inséré ou ajouté existe dejà dans le document,
// il est déplacé, donc supprimé de la position existante
// et inséré/ajouté à la position demandée.

// --------------------------------------------
// SUPPRESSION ET REMPLACEMENT DE NOEUDS
//parent.removeChild(noeud)
//// noeud est supprimé des fils de parent
//
//parent.replaceChild(remplaçant, remplacé)
// remplaçant prends la place de remplacé comme fils de parent


// --------------------------------------------
// L'OBJET NODE : SES PROPRIETES
//nodeName          parentNode
//nodeType          childNodes
//nodeValue         firstChild, lastChild
//previousSibling   nextSibling
/*var elementNode = (name) => {

}
*/
var elementNode = (nom) => {
    if (nom && typeof(nom) === "string") {
        return document.createElement(nom)//.....
    }
    return null
}

var textNode = (nom) => {
    if (nom && typeof(nom) === "string") {
        return document.createTextNode(nom)//.....
    }
    return null
}

var ul = elementNode("ul")
//APPEND CHILD
for (let index = 1; index < 8; index++) {// pour 8 'li'
    let li = elementNode("li");// j'implemente + 1 'li'
    let content = textNode("Element javascript N°" + index)// j'implement +1 content (index+1)
    li.appendChild(content)// Dans le 'li' j'ajoute l'enfant 'content'
    ul.appendChild(li)// Dans le 'ul' j'ajoute l'enfant 'li'
}// Je boucle jusqu'à avoir 8 'li'
//console.log(ul);
// INSERONS LES NOEUDS
document.getElementById("app").appendChild(ul)