//Asynchrone = on attends pas la réponse - le code continue à s'exécutyer
// L'asynchone permet de contiunuer à exécuter javascsript et prendre de l'avance si le traitement est un peu lent côté serveur

console.log("Initialisation de la requête");
console.log('- - - - - - - - - - - - - - - ');

console.log("- - - Création de l'objet XHR - - -");
const maVariable = new XMLHttpRequest()

console.log("- - - Création / ouverture de la connection - - -");
// ↓ Ici on appel un web service qui envoi des données fausses
maVariable.open('GET', 'https://reqres.in/api/users')

console.log("- - - Lancement de la connection - - -");
// La seul manière de voir que... la requête, c'est d'aller dans l'onglet Réseau
maVariable.send()

console.log("pour le moment il n'affichera rien car la requête est créer\nmais on a rien fait avec le retour de la requête");
console.log("F12 → onglet Réseau → Ici on verra une requête vers https://reqres.in/api/users");

console.log('- - - - - - - - - - - - - - - ');
console.log("Initialisation de la requête + DELAY");//Simuler un serveur lent

const maRequeteXHR = new XMLHttpRequest()
maRequeteXHR.open('GET', 'https://reqres.in/api/users?delay=3')
maRequeteXHR.send()
console.log('Bonjour')

console.log('- - - - - - - - - - - - - - - ');
console.log("La méthode open() peu changer le comportement de la reqûete grâce au 3ème paramètre");

const uneRequeteXHR = new XMLHttpRequest()
// Le 3ème Paramètre = true par défaut
uneRequeteXHR.open('GET', 'https://reqres.in/api/users?delay=3', false)//Agit de manière synchrone
uneRequeteXHR.send()
console.log('Shalom') 

console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::");
console.log("- - - Ecouter les changement d'états de la requête - - -");

const requeteTracer = new XMLHttpRequest()// 0 → La requête à juste été créer
console.log(requeteTracer.readyState);// 0 → La requête à juste été créer

requeteTracer.addEventListener('readystatechange', function(){
    console.log(requeteTracer.readyState);
})

requeteTracer.open('GET', 'https://reqres.in/api/users?delay=3')// 1 → La requête à été ouverte
requeteTracer.send()//Requête ENVOYER - RECEPTION DES INFOS
console.log('Bonjour')

// 0 → La requête à juste été créer
// 1 → La requête à été ouverte
// 2 → Ont a reçu ses entête
// 3 → Ont est en train de charger la réponse
// 4 → Ont a reçu toutes la réponse

console.log('- - - AFFICHER LA REPONSE → xhr.response - - -');
console.log('- - - DONC FAIRE UN IF - - -');

const xhr = new XMLHttpRequest()
xhr.addEventListener('readystatechange', function(){//function = le callback
    if(xhr.readyState === 4) {// 4 → Ont a reçu toutes l'intégralité de la réponse (ici les utilisateuer)
        console.log(xhr.response)// Ont affiche la réponse
    }
})
xhr.open('GET', 'https://reqres.in/api/users?delay=3')
xhr.send()

//Le readyState va permettre de suivre l'évolution de la requête du tout début
//jusqu'à ce qu'on ai reçu la réponse compléte et qu'on puissent la traiter

console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::");
console.log("- - - LA REPONSE 6 LES ETATS - - -");
//Si on appel une page html → la réponsse sera du HTML
//Si on appel une api qui retourne du JSON → le retour sera du JSON
//DONC Important : → s'assurer du format de la réponse avant de manipuler une réponse
//AUSSI s'assurer que la réponse soit bien valide CAR :
    //Une requête terminer ne s'ignifie pas qu'elle s'est terminé SANS ERREUR //→ n°4

    //Il faut regardé le status HTTP de la réponse → Onglet Réseaux
        // ETATS //
            // 200 = OK
            // 201 = CREATED
            // 304 = NOT MODIFIED (variante de 200)
        // LES ERREURS 400 SONT PLUTOT COTE CLIENT
            // 404 = NOT FOUND (la réponse continent une page d'erreur)
            // 403 = ACCESS à la ressouce est refusé - le lien est bon mais ont à pas l'autorisation d'y accéder
        // LES ERREURS 500 SONT PLUTOT COTE SERVEUER
            // 500 = ERREUR côté serveur (probleme sur le serveur lors du traitement de la demande donc ont ne peu avoir la réponse)

console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::");
console.log("- - - .POST === 201 - - -");

const myXHR = new XMLHttpRequest()
myXHR.addEventListener('readystatechange', function(){
    if(myXHR.readyState === 4 && myXHR.status === 201) {//vérification si LA REQUETE EST TARITER ET LA REPONSE EST VALIDE
        console.log(myXHR.reponse);
    }
})
myXHR.open('GET', 'https://reqres.in/api/users?delay=3')
myXHR.send()