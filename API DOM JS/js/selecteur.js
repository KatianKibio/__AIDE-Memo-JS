//window.addEventListener('load', () => {
//    console.log(document.body.innerHTML)
//})

//window.addEventListener('load', ()=> {
//    window.confirm('Shalom')
//})

//########################################################
// LES SELECTEURS //
console.log('LES SELECTEURS');

//Selecteur id
console.log('Selecteur id');
let id_li = document.getElementById('noeud')
console.log(id_li)
console.log('Selecteur id.parentNode')
console.log(id_li.parentNode)
console.log('---------------------------------------------------');

//Selecteur tag name
console.log('Selecteur tag name');
var tag_h2 = document.getElementsByTagName('h2')
console.log(tag_h2)
console.log('---------------------------------------------------');

//Selecteur attribut name
console.log('Selecteur attribut name');
var name_all = document.getElementsByName('titre')
console.log(name_all)
console.log('---------------------------------------------------');

//Selecteur class
console.log('Selecteur class');
var lesClasses = document.getElementsByClassName('success')
console.log(lesClasses);
console.log('---------------------------------------------------');

//Query Selector / Query Selector All
console.log('Selecteur query selector');
var querySelection = document.querySelector('div.success')
console.log(querySelection)
console.log('- - - - - - - - - - - - - - - - - - - - - - - - - -');
console.log('Selecteur query selector all');
var querySelectionTout = document.querySelectorAll('div.success')
console.log(querySelectionTout)

//ENCHAINEMENT
console.log('ENCHAINEMENT');
var enchainemnent = document.getElementById('relais').getElementsByClassName('poppy')
console.log(enchainemnent)//A REVOIR CAR JE NE VOIS PAS CE RESULTAT DANS LE NAVIGATEUR

console.log('---------------------------------------------------');

