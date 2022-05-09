//MANIPULATION DES ATTRIBUTS
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//les attributs html sont des propriétés
//class devient className
//for devient htmlFor
// la valeur peut être string number ou boolean
var formline = document.querySelector('.form-line')

console.log("La class est : " + formline.className)
console.log("L'id est : " + formline.id)
console.log("J'afficfe le 1er label : " + formline.querySelector('label'));
console.log('--------------------------------------------');
var label = formline.querySelector('label')
//undefined
console.log(label);
console.log("J'afficfe le for : " + label.htmlFor);

// MODIFICATION DE L'ATTRIBUT
label.htmlFor = " xxx xxx xxx"
console.log("Changement de l'attributs for : " + label.htmlFor);
label.htmlFor = ""
console.log("Changement de l'attributs for : " + label.htmlFor);
console.log('--------------------------------------------');
console.log('- - - GET ATTRIBUTE - - -');
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ONT PEU UTILISER LES METHODES // GET ATTRIBUTE
// SET ATTRIBUTE
// dans ce cas la valeur est une chaine de caractere
//plus de conversion vers className et htmlFor
console.log(formline.className);
console.log(formline.getAttribute('class'));//toujours une chaine de cacarctere
formline.className = "autreChose"
console.log("Changement de la valeur de la class de formline : ↓");
console.log(formline.className);
console.log(formline.getAttribute('class'))
console.log('- - - - - - - - - - - - - - - -');
console.log(formline.id);
console.log(formline.getAttribute('id'));//toujours une chaine de cacarctere
formline.id = ""
console.log("Effacement de la valeur de l'id de formline : ↓");
console.log(formline.id);
console.log(formline.getAttribute('id'))
console.log('- - - - - - - - - - - - - - - -');

console.log('--------------------------------------------');
console.log('- - - SET ATTRIBUTE - - -');
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
formline.setAttribute('id', 'test-value-2')// 2 parametre // 1er le nom de l'attribut à modifier // 2eme la nouvelle valeur à lui donner
//undefined
console.log(formline.getAttribute('id'))
//test-value-2
console.log(formline.id)
//test-value-2
