// ::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::
// METHODE HTTP GET HEAD ET DELETE SONT SOUVENT UTILISER
// QUAND IL SAGIT DE MANIPULER DES DONNEES
// ::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::

// GET / HEAD → RECUPERER DES DONNEES
// DELETE → SUPPRIMER DES DONNEES

const xhr = new XMLHttpRequest()
xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(':::::::::::::::::::::::::::::::::::::::::::');
        console.log('- - - - GET - - - -');
        console.log(xhr.response);
    }
})

xhr.open('GET', 'https://reqres.in/api/users')
xhr.send()

// - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - -

const xhr1 = new XMLHttpRequest()
xhr1.addEventListener('readystatechange', function () {
    if (xhr1.readyState === 4 && xhr1.status === 200) {
        console.log(':::::::::::::::::::::::::::::::::::::::::::');
        console.log('- - - - HEAD - - - -');
        console.log(xhr1.response);
    }
})

xhr1.open('HEAD', 'https://reqres.in/api/users')
xhr1.send()
//Affiche <emoty string>
//le contenu de la réponse est vide car on a pas reçu la réponse - la réponse n'hexiste pas
//Sert à savoir si un service est disponible - Trés rapide de récupérer des header
//sert à pingué le serveur pour savoir si il est près à accepter une requête

// - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - -

const xhr2 = new XMLHttpRequest()
xhr2.addEventListener('readystatechange', function () {
    if (xhr2.readyState === 4 && xhr2.status === 200) {
        console.log(':::::::::::::::::::::::::::::::::::::::::::');
        console.log('- - - - GET user id = 1- - - -');
        console.log(xhr2.response);
    }
})

xhr2.open('GET', 'https://reqres.in/api/users/1')//récupere l'utillisateur qui a pour id "1"
xhr2.send()

// ::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::

const xhr3 = new XMLHttpRequest()
xhr3.addEventListener('readystatechange', function () {
    if (xhr3.readyState === 4 && xhr3.status === 200) {
        console.log(':::::::::::::::::::::::::::::::::::::::::::');
        console.log('- - - - DELL user id = 2 - - - -');
        console.log(xhr3.response);
    }
})

xhr3.open('DELETE', 'https://reqres.in/api/users/2')//supprimera l'utillisateur qui a pour id "2"
xhr3.send()//Donc ne s'affichera pas  dans la console

// ::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::


// POST → CREER DES DONNEES
// PUT → METS A JOUR DES DONNES

const xhr4 = new XMLHttpRequest()
xhr4.addEventListener('readystatechange', function () {
    if (xhr4.readyState === 4 && xhr4.status === 200) {
        console.log(':::::::::::::::::::::::::::::::::::::::::::');
        console.log('- - - - POST  - - - -');
        console.log(xhr4.response);
    }
})
xhr4.open('POST', 'https://reqres.in/api/users')//ne pas mettre d'identifiant

//Ajouter → encodeURIComponent
// Cette fonction permet de traduire tout les caractères spéciaux
// au format url pour éviter les problèmes

//envoye des données dans le corps d'une requête
xhr4.send(encodeURIComponent('first_name=John&last_name=Doe'))//forme clé=valeur & clé=valeur
//ont peu trouver son id dans reponse

//~~~~~~~~~~~~~~~ 1 ere MANIERE DE METTRE A JOUR UNE DONNEES EXISTANTE ~~~~~~~~~~~~~~~//
const xhr4_A = new XMLHttpRequest()
xhr4_A.addEventListener('readystatechange', function () {
    if (xhr4_A.readyState === 4 && xhr4_A.status === 200) {
        console.log(':::::::::::::::::::::::::::::::::::::::::::');
        console.log('- - - - POST  - - - -');
        console.log(xhr4_A.response);
    }
})
xhr4_A.open('PUT', 'https://reqres.in/api/users/101')//mise à jour de l'user 101
xhr4_A.send(encodeURIComponent('first_name=Katian'))//Changement de son prénom en Katian //updatedAt


//~~~~~~~~~~~~~~~ 2 eme MANIERE DE METTRE A JOUR UNE DONNEES EXISTANTE ~~~~~~~~~~~~~~~//
// Plus propres // Permet de ne pas s'embeter avec la syntaxe plus haut
// LES FORMS DATA = Un objet dans lequel ont va donner une liste de clé/valeur
// il s'occupera de realiser le encodeURIComponent et de former tout ça au bon format

//METHODE A PRIORISER à L'AUTRE
const xhr5 = new XMLHttpRequest()
xhr5.addEventListener('readystatechange', function () {
    if (xhr5.readyState === 4 && xhr3.status === 201) {//201 CREATED
        console.log(':::::::::::::::::::::::::::::::::::::::::::');
        console.log('- - - - POST - FormData - - - -');
        console.log(xhr5.response);
    }
})

xhr5.open('POST', 'https://reqres.in/api/users')
let form = new FormData()
//APPEND SIGNIFIE = ajoute aux donnees actuel celle que je vais te donner
form.append('first_name', 'Robert')//2 parametre
form.append('last_name', 'Dupond')//1 clé / 1 valeur
xhr5.send(form)//S'occupe de réaliser le contenu au bon format

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::GESTION DES ERREURS::::::::::::::::::::::::::::::::::
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//Pour gerer les erreurs en cas de problemes dans la reponse
const gestionError = new XMLHttpRequest()

gestionError.addEventListener('readystatechange', function () {
    if (gestionError.readyState === 4) {
        if (gestionError.status === 200) {
            console.log(gestionError.response);
        } else {
            alert('Une erreur est survenue !')
        }
    }
})

//EN CAS D'ERREUR INTERNE DE L'OBJET XHR C'EST CETTE EVENEMENT QUI SERA APPELE
//ONT ECOUTE L'EVENEMENT ERROR
gestionError.addEventListener('error', function () {//code expliqué ci-dessous
    alert('---- une erreur est survenue !')
})

gestionError.open('GET', 'https://reqres.in/api/users')//si je rajoute users/101 il y aura une erreur
gestionError.send()

//Lobjet xhr lui-même peut aussi signaler des erreurs
//exemple : si on as perdu la connexion internet 
    //et qu'on essai quand même d'envoyer une requête

//VOICI COMMENT LES RECUPERER
    //gestionError.addEventListener('error', function(){
    //    alert('une erreur est survenue !')
    //})


  