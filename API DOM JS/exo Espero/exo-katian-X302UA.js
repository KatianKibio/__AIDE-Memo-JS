var monH1 = document.querySelector('h1')

monH1.addEventListener('click', function(){
    alert('Coucou')
})

console.log(monH1);
// --------------------------------------------
var thirdArticle = document.querySelectorAll('.article')[2]//.querySelector('h2')

thirdArticle.addEventListener('click', function(){
    alert('mon article')
})

console.log(thirdArticle);
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
var elementNode = (name)=>{

}

    var ul = elementNode("ul")

    for (let index = 1; index < 9; index++){
        var li = elementNode('li')
    }   œ