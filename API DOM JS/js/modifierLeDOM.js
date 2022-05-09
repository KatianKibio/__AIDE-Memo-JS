//########################################################
// MODIFIER LE DOM //

//Selecteur id
//console.log('Selecteur id');
//let id_li = document.getElementById('noeud')
//console.log(id_li)
//console.log('---------------------------------------------------');

console.log("--------------------------------");
console.log("document.createElement()");

let maListe = document.getElementById('lyliste')

let nouvelleItem = document.createElement('li')
nouvelleItem.innerText = 'item 4 : ajouter en append'
maListe.append(nouvelleItem)

let autreItem = document.createElement('h1')
autreItem.innerText = '8T76 87 68'
maListe.append(autreItem)

maListe.append('maListe.append')



console.log(`La méthode append() permet d'ajouter des éléments HTML, mais également directement du texte. Ainsi, nous aurions pu remplacer li.innerText = 'item3' par li.append('item 3').`);

console.log('--------------------------------');
console.log(`Element.prepend('div')`);

let listeBox = document.getElementById('box')

let itemBox = document.createElement('li')
itemBox.innerText = 'item 0 : ajouter en prepend'
listeBox.prepend(itemBox)


console.log('--------------------------------');
console.log(`Element.remove('div')`);

let moinCaseDeux = document.getElementById('case-2')
moinCaseDeux.remove()

let moinliste = document.getElementById('allCase')
moinliste.remove()



console.log('--------------------------------');
console.log(`Element.removeChild('child')`);

let pourPlusTard = document.getElementById('alphabet')
let case_B = document.getElementById('caseB')
let case_E = document.getElementById('caseE')
let case_A = document.getElementById('caseA')

//pourPlusTard.removeChild(case_B)
pourPlusTard.removeChild(case_E)

pourPlusTard.append(pourPlusTard.removeChild(case_B)
)
pourPlusTard.append(pourPlusTard.removeChild(case_A
))