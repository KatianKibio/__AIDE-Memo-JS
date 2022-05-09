console.log('-------------------------------------------------');
console.log('- - - addEventListener - - -');



console.log('-------------------------------------------------');
console.log('- - - OBJECT : EVENT - - -');
console.log(`L'objet Event représente un événement JavaScript. Il contient un ensemble de propriétés et de méthodes communes à tous les événements. Nous pourrons les manipuler à notre guise pour modifier les caractéristiques de notre événement.`);
console.log('-------------------------------------------------');

console.log('- - - propriétés - - -');
console.log('- - -\ntarget\ndefaultPrevented\nbubbles\n- - -');
console.log('- - - méthodes - - -');
console.log('- - -\ncreateEvent\npreventDefault\nstopPropagation\n- - -');


console.log('-------------------------------------------------');
console.log('- - - Les événements globaux - - -');
console.log(`Les événements globaux ne sont pas directement liés à une interaction avec l'utilisateur, mais plutôt à une action de script.`)
console.log(`L'événement load, par exemple, est automatiquement déclenché par le script quand toutes les ressources de la page sont chargées (images, feuille de style CSS, script JavaScript, etc.).`);

console.log('- - - - -\nload\noffline\nabort\nended\nsuccess\n- - - - -');

console.log('Exemple avec load :');

window.addEventListener("load", function () {
    alert("Les ressources de la page ont été chargées !");
    console.log('CHARGER')
})


console.log('-------------------------------------------------');
console.log('- - - Les événements souris - - -');
console.log(`Les événements souris permettent d'écouter un ensemble d'interactions que l'utilisateur peut faire avec sa souris.`);

console.log('- - - - -\nclick\nmouseenter\nmouseleave\nmouseup\n- - - - -');

console.log('Exemple avec click :');

let jeConfirme = document.getElementById('btn-confirm')

function confirmation(eventJeConfirm) {
    confirm('Souhaites-tu envoyer le formulaire maintenant ?')
    console.log(eventJeConfirm);
}

jeConfirme.addEventListener('click', confirmation)

console.log('- - - Á ÉVITER - - -');
console.log('mouseover\nmouseout');
console.log('- - - UTILISER PLUTÔT - - -');
console.log('mouseenter\nmouseleave');

console.log('Exemple avec mouseenter :');

let jePasseSur = document.getElementById('mdp')

function jePasse(eventJePAsseSur) {
    alert('Inscrit ton mots de passe')
    console.log(eventJePAsseSur);
}

jePasseSur.addEventListener('mouseenter', jePasse)

console.log('-------------------------------------------------');
console.log('- - - Les événements clavier - - -');
console.log(`Les événements claviers sont liés à toute utilisation du clavier par l'utilisateur. Par exemple, avec l'événement keydown, le code ci-dessous sera déclenché lorsque la touche du clavier sera enfoncée.`);

console.log('- - - - -\nkeyup\nkeydown\n- - - - -');

console.log('Exemple avec keydown :');

var key = document.getElementById('key')

function keyboard(eventKey) {
    alert(`Vous venez d'appuyer sur une touche du clavier`)
    console.log(eventKey);
}
//key up = quand la touche est relachée
key.addEventListener('keydown', keyboard)//quand la touche est envoncé

console.log('- - - Á PROSCRIRE - - -');
console.log('keypress');
console.log(`CAR il ne fonctionne pas pour toutes les touches du clavier (Alt, Ctrl, Shift, par exemple).`);
console.log('- - - UTILISER PLUTÔT - - -');
console.log('keyup\nkeydown\n- - - - -');

console.log('-------------------------------------------------');
console.log('- - - Les événements de formulaire - - -');
console.log(`sont, par définition, liés à toutes interactions avec un élément de formulaire HTML. L'événement submit est, par exemple, déclenché quand un élément <form> est soumis, que ce soit au clic sur un élément <button> ou <submit>, ou même par une action de script.`);

console.log('Exemple avec submit :');

var boutonSoumettre = document.getElementById('soumettre')

function jeSoumets(eventboutonSoumettre) {
    eventboutonSoumettre.preventDefault()

    alert('Vous êtes sur le point de soumettre le formulaire')
    console.log(eventboutonSoumettre);
}

boutonSoumettre.addEventListener('submit', jeSoumets)

console.log('-------------------------------------------------');
console.log('-------------------------------------------------');

console.log('- - - BONNES PRATIQUES - - -');
console.log('- - - DEBOUNCE() - - -');
console.log(`debounce() permet de bloquer l'appel à une fonction pendant un certain délai (en millisecondes).`);
console.log(`Le code ci-dessous permet de déclencher l'affichage de l'alerte au bout de 2 secondes si l'utilisateur n'a pas cliqué sur le bouton pendant ce délai.`);

var btn1 = document.getElementById('btn-debounce')

btn1.addEventListener('click', debounce(function (e) {
    alert('aprés le clic, le message prends 2 secondes pour s\'afficher')
}, 2000))

console.log('Copier coller le code ci dessous a la suite du code d\'en haut')
//_______________________________________________________________
function debounce(callback, delay) {

    var timer;

    return function () {

        var args = arguments;

        var context = this;

        clearTimeout(timer);

        timer = setTimeout(function () {

            callback.apply(context, args);

        }, delay)

    }

}
console.log(`debounce() nous permet de réduire les problèmes de performances qui seraient liés à une fonction qui s'exécute trop de fois dans un intervalle de temps restreint. Nous pouvons maintenant contrôler le délai minimum avant deux appels de cette fonction.`);
//_______________________________________________________________

console.log('- - - THROTTLE() - - -');
console.log(`debounce() permet de bloquer l'appel à une fonction pendant un certain délai (en millisecondes).`);
console.log(`Le code ci-dessous permet de déclencher l'affichage de l'alerte toutes les 5 secondes seulement.`);

var btn2 = document.getElementById('btn-throttle')

btn2.addEventListener('click', throttle(function(e){
    alert('attends encore 5 secondes pour pouvoir réappuyer.')
}, 5000))


console.log('Copier coller le code ci dessous a la suite du code d\'en haut')
//_______________________________________________________________
function throttle(callback, delay) {

    var last;

    var timer;

    return function () {

        var context = this;

        var now = +new Date();

        var args = arguments;

        if (last && now < last + delay) {

            clearTimeout(timer);

            timer = setTimeout(function () {

                last = now;

                callback.apply(context, args);

            }, delay);

        } else {

            last = now;

            callback.apply(context, args);

        }

    };

}
//_______________________________________________________________
