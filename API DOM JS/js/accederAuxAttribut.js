//########################################################
// ACCES AUX ATTRIBUTS //
console.log('--------------------------------------------------------')
console.log('- - - - Attribute - - - -')
const lastname = document.getElementById('lastname')
for (let attribute of lastname.attributes) {
    console.log(attribute)
}

console.log('--------------------------------------------------------')
console.log('- - - - Attribute.textContent - - - -')
const afficheTextContent = document.getElementById('text-content')
for (let inAfficheTextContent of afficheTextContent.attributes) {
    console.log(inAfficheTextContent.textContent)
}

console.log('--------------------------------------------------------')
console.log('- - - - Attribute.name - - - -')
const attr_name = document.getElementById('pass-Id')
for (let in_name of attr_name.attributes) {
    console.log(in_name.name)
}

console.log('--------------------------------------------------------')
console.log("- - - - .getAttribute('***') - - - -")
// Recuperer un attibut en particulier (je connais déjà son nom)
// 3 exemple avec le type, le name et l'id
const attributeType = attr_name.getAttribute('type')
const attributeName = attr_name.getAttribute('name')
const attributeId = attr_name.getAttribute('id')
console.log(attributeType)
console.log(attributeName)
console.log(attributeId)

console.log("- - - - .getAttributeNames() - - - -")
const attributeTypePlus = attr_name.getAttributeNames()
console.log(attributeTypePlus)

console.log("- - - Par une boucle - - -")
for (let eachAttribute of attr_name.getAttributeNames()) {
    console.log(eachAttribute);
}
console.log("- - - Un autre par une boucle - - -")
console.log('- - - - voir -> Attribute.textContent - - - -')
for (let xx of afficheTextContent.getAttributeNames()) {
    console.log(xx);
}

console.log('--------------------------------------------------------')
console.log("- - - - .getAttributeNode('***') - - - -")
//lastname.getAttributeNode('id') - l'afficher par un log
console.log(lastname.getAttributeNode('id'))//id="lastname"
console.log("- - - avec .value - - -")
console.log(lastname.getAttributeNode('id').value)//affiche la valeur, ici, lastname

console.log('--------------------------------------------------------')
console.log("- - - -  voila comment Vérifier si un noeud à bien un attribut('***') - - - -")
console.log('innerText et hasAttribute');
const elements = document.getElementsByTagName('li')
const autreElements = document.getElementsByTagName('p')

console.log("- - - ex: avec 'li' - - -");
for (let element of elements) {
    if (element.hasAttribute('class')) {
        console.log(element.innerText)//innerText affice le contenu de la balise html
    }
}
console.log("- - - ex: avec 'p' - - -");
for (let eachElement of autreElements) {
    if (eachElement.hasAttribute('id')) {
        console.log(eachElement.innerText)
    }
}
console.log('Savoir si un element à des attributs en général')
console.log("- - - ex: avec 'th' - - -")
const tableau = document.getElementsByTagName('th')

//for (let tab of tableau) {
//    if (tab.hasAttribute()) {// J'ai une erreur (pourtant j'ai fais comme la video)
//        console.log(tab.innerText)
//    }
//}

console.log('--------------------------------------------------------')
console.log("- - '.setAttribute('cheked', 'checked'- -");
const checkbox = document.getElementById('box')// recuperation d l'input
const checkbox2 = document.getElementById('box2')// recuperation d l'input

//si je veux qu'elle soit cocher par default en JS
checkbox.setAttribute('checked', 'checked')
//si je veux qu'elle soit décocher en JS
checkbox2.removeAttribute('checked')
