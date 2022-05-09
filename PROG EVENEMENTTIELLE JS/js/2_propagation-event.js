//window.addEventListener('load', function (){
//    console.log('CHARGER')
//})
console.log('▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒');
console.log('Propagation des événements capture ↓ et bouillonement ↑ - - le bubbling ↓↑');//Bouillonement ↓↑ 

var pere = document.getElementById('father')
var fils = document.getElementById('son')

// NE REMONTERA PAS CAR IL N'Y A RIEN AVANT LUI
pere.addEventListener('click', () => {
    alert('C\'est le père')
})

// REMONTERA VERS LE PARENT CDAR IL EST SON ENFANT
fils.addEventListener('click', () => {
    alert('C\'est le fils')
})

console.log('- - - - - - - - - - -');

console.log(`observe le comportement au click sur Enfants dans le html.`);
console.log('......................');
console.log('Il remonte vers "c\'est le père"');

console.log('▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒');
console.log('Modification du comportement d\'un événement');//Bouillonement ↓↑
console.log('Methode N° 1 : Event.stopPropagation');

var mere = document.getElementById('mother')
var fille = document.getElementById('daughter')

// NE REMONTERA PAS CAR IL N'Y A RIEN AVANT LUI
mere.addEventListener('click', () => {
    alert('C\'est la mère')
})

//NE REMONTERA PAS VERS LE PARENT GRACE A STOP PROPAGATION
fille.addEventListener('click', (arreteLaPropaIci) => {// ICI
    arreteLaPropaIci.stopPropagation()// ICI
    alert('C\'est la fille')
})

console.log('- - - - - - - - - - -');
console.log(`Methode N° 2 : addEventListener('event,callback,capture?`)
console.log(`• Cette solution consiste à modifier le paramètre optionnel de la méthode addEventListener() et de la passer à true.`);
console.log(`• Dans ce cas, le code exécutera l'événement durant la phase de capture et annulera la phase de bouillonnement.`);
// boy.addEventListener('click', () =>{}, true) →→ COMME ÇA
var daddy = document.getElementById('daddy')
var boy = document.getElementById('boy')

daddy.addEventListener('click', () => {
    alert('Daddy')
}, true)// ICI

boy.addEventListener('click', () => {
    alert('Boy')
}, true)//ICI AUSSI

console.log(`• Dans le cas présent, on ignore la phase de bouillonnement et les événements sont exécutés pendant la phase de capture.`);
console.log(`• Ainsi, en cliquant sur children, l'alerte parent s'affichera en premier, puis l'alerte children en second. Le comportement est inversé.`);

console.log('▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒');
