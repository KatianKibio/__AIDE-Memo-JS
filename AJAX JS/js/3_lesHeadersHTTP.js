//::::::::::::::::::::::::::::::::::::::::::::::::::::
//::::::::::::::::::::::::::::::::::::::::::::::::::::
console.log('//::::::::: //// 1 - LE PROTOCOLE HTTP //// ::::::::::::::');
// lorsque ont envoye une requête à un serveur et qu'elle nous envoye une réponse,
// les deux message, la requête et la réponse, sont formaté selon le protocole HTTP.
// le protocole HTTP stipule que chaque message doit avoir un en-tête et un contenu



// Les entête de la requête et les entête de la réponse ne sont pas les même
// Mais dans tout les cas ça désigne les métadonnés du message

// Il existe une liste déjà prédéfini par le protocole HTTP,
// donc on peut s'y fier dans tout les

// Il est aussi possible de créer ses propres en-entête, pour des cas plus particulier
// dans ses cas là il faudra les préfixer par x-
// exemple dans 404 GET favicon.ico → Entête de la Réponse → X-Content-Type-Options : nosniff (une entête personaliser par le serveur)


//::::::::::::::::::::::::::::::::::::::::::::::::::::
//::::::::::::::::::::::::::::::::::::::::::::::::::::
console.log('//:::: //// 2 - AJOUTER UN HEADER À NOTRE REQUÊTE //// ::::')

// 1ER ÉTAPE POUR MANIPULER DES ENTÊTE EST DE RAJOUTER UNE ENTÊTE À NOTRE REQUÊTE
// setRequestHeader

const xhr = new XMLHttpRequest()
xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(xhr.response);
        } else {
            alert('Une erreur est survenue !')
        }
    }
})

xhr.addEventListener('error', function () {
    alert('Une ERREUR est survenue !')
})
xhr.open('GET', 'https://reqres.in/api/users/1')
//On ne peu rajouter des header que entre la méthode .open() et la méthode .send()
xhr.setRequestHeader('accept-language', 'fr-FR')// Voir le résultat dans l'entête de la requête
xhr.send()

console.log('::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::');
console.log('::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::');
// Certains headers ont des valeurs par défaut
// Parmis les headers les plus courrant on retrouvera le header
console.log('accept');
// accept : qui permet de donner une indication sur le type de contenu que le client s'attends à traiter
// (par défaut on attends tout les types de contenu) mais c'est là qu'on pourra spécifier
// si on attends à du XML, à du JSON etc.
console.log('accept-language');
// accept-langage : qui permet de définir la langue dans laquel on s'attends à récupérer le contenue
console.log('content-Type');
// content-Type : qui va bcp être utiliser quand on va faire des requête en PUT ou en POST
// Il permet de définir le type de contenu de la requête
// Sa permet de dire : "Je t'envoie du JSON", "je t'envoie du XML", "fais en ce que tu peux"
// de son côté le serveur va lire ce header (exemple : content-Type, fr-FR) et ce dira
// ok, on m'a envoyer du JSON donc je sais comment le traiter
console.log('accept-Charset');
// accept-Charset : si on veut demander au serveur un encodage particulier dans la réponse
console.log('RETENIR CECI :');
// GARDER EN MEMOIRE QUE LES HEADERS SONT DES INDICATIONS AU SERVEUR SUR LA MANIERE DONC ON ATTENDS LA REPONSE
// ÇA NE VEUT PAS DIRE QUE LE SERVEUR VA SUIVRE SES INDICATION (ÇA DEPENDS DE L'IMPLEMENTATION)
// MAIS ÇA PERMET D'ORIENTER LE SERVEUR VERS CE QU'ON VEUT


//::::::::::::::::::::::::::::::::::::::::::::::::::::
//::::::::::::::::::::::::::::::::::::::::::::::::::::
console.log('------------------------------------------------------------');
console.log('//:::: //// 3 - GERER LES HEADERS DE LA REPONSE //// ::::')

// QUAND ON ENVOIE UNE REQUETE A UN SERVEUR? ON PEU PAS FORCEMENT ETRE SUR DU FORMAT DE LA REPONSE.
// C'EST PAS PARCE QUE ON A MIS QU'ON ACCEPTER QUE DU XML QUE LE SERVEUR VA NOUS ENVOYER DU XML.
// LE SERVEUR VA FAIRE CE QU'IL PEUT MAIS SI IL N'A PAS ETE CONFIGURER POUR LE XML,
// IL NOUS ENVERA LES DONNEES EN JSON PAR EXEMPLE.
// DANS TOUT LES CAS, IL NOUS ENVERA UNE ENTETE AVEC PLUSIEUR ELEMENTS DONT NOTAMANT LE TYPE DE CONTENU.
// AINSI SI ON S'ATTENDAIS A DU XML, ONT PEUT QUAND MEME VERIFIER LE TYPE DE CONTENU POUR POUVOIR LE GERE COMME IL FAUT.
// AU MOMMENT OU LE SERVEUR NOUS ENVOIE SA REPONSE, IL NOUS ENVERA AUSSI DES HEADERS HTTP, CONTENANT LES META DONNEES DE CETTE REPONSE. 
// ET DANS SES META DONNEES, ON RETROUVE LE TYPE DE CONTENU QU'IL Y A DANS CETTE REPONSE.

// pour la suite aller dans le Réseaux → 200 GET reqres.in → en-tetes → en-tetes de la réponse →
// application/json; charset=utf-8

//COMMENT RECUPERER LA VALEUR DE CE HEADERS // → application/json; charset=utf-8

// IL EXISTE DEUX METHODE DANS L'OBJET XHR
// LA 1ERE →  // getAllResponseHeaders() → Est une méthode permetant de récupérer tout les headers qu'on est autorisé à lire
// Cette méthode là ne permet pas de récupérer un seul header


const xhr_2 = new XMLHttpRequest()
xhr_2.addEventListener('readystatechange', function () {
    if (xhr_2.readyState === 4) {
        if (xhr_2.status === 200) {
            console.log('METHODE 1');
            console.log("getAllResponseHeaders() → Est une méthode permetant de récupérer tout les headers qu'on est autorisé à lire. ↓↓↓\n");
            console.log('Je suis autorisé à lire : ');
            console.log(xhr_2.getAllResponseHeaders());// on log le contenu ICI
            // Display dans la console ↓ ↓ ↓
            // cache-control: max-age=14400
            // content-type: application/json; charset=utf-8 ← Ce qu'on voulais recupèrer
            // Cette méthode là ne permet pas de récupérer un seul header
            // Tout les éléments ↑↑ sont en faites une longue chaine de caractère
            // que l'on peut voir en appuyant sur RAW (brut)

            // pour récupérer un header en PARTICULIER  ON VA PREFERER LA 2EME méthode
            // qui est getResponseHeader()

            console.log('------------------------\n');
        } else {
            alert('Une erreur est survenue !')
        }
    }
})

xhr_2.addEventListener('error', function () {
    alert('Une ERREUR est survenue !')
})
xhr_2.open('GET', 'https://reqres.in/api/users/1')
//On ne peu rajouter des header que entre la méthode .open() et la méthode .send()
xhr_2.setRequestHeader('accept-language', 'fr-FR')// Voir le résultat dans l'entête de la requête
xhr_2.send()

// LA 2EME →  // getResponseHeaders()

const xhr_3 = new XMLHttpRequest()
xhr_3.addEventListener('readystatechange', function () {
    if (xhr_3.readyState === 4) {
        if (xhr_3.status === 200) {
            console.log('METHODE 2');
            console.log("getResponseHeader() → Prends en paramètre le nom du header à récupérer\n");
            console.log("DISPLAY DANS LA CONSOLE ↓↓↓\n");
            console.log(xhr_3.getResponseHeader('content-type'));// on log le contenu ICI
            // Display dans la console ↓ ↓ ↓
            // cache-control: max-age=14400
            // content-type: application/json; charset=utf-8 ← Ce qu'on voulais recupèrer
            //  UNE FOIS QUE J'AI RECUPERER CE CONTENT-TYPE (PAR EXEMPLE)
            //  JE PEUX PARSER EN JSON OU EN XML OU EN TOUT AUTRE FORMAT QUI M'EST RETOURNER ICI
            console.log('------------------------\n');
        } else {
            alert('Une erreur est survenue !')
        }
    }
})

xhr_3.addEventListener('error', function () {
    alert('Une ERREUR est survenue !')
})
xhr_3.open('GET', 'https://reqres.in/api/users/1')
//On ne peu rajouter des header que entre la méthode .open() et la méthode .send()
xhr_3.setRequestHeader('accept-language', 'fr-FR')// Voir le résultat dans l'entête de la requête
xhr_3.send()

// L'HEADER RENFERME DONC DES INFOS QUI PEU PARFOIS ETRE TRES PRECIEUSE
// SI ON VEUT FAIRE DU CODE GENERIQUE
// EN FAISANT UN APPEL A UN WEB SERVICE, D4UNE MANIERE GENERAL VOUS SAVEZ
// CE QU'IL VA VOUS ENVOYER. VOUS POUVEZ VOUS ATTENDRE A PARSER DU JSON OU DU XML OU AUTRE

// MAIS SI VOUS VOULEZ FAIRE UN OUTIL UN PEU GENERIQUE ET QUI S'ADAPTERA A TOUTES LES SITUATION,
// VOUS AUREZ PLUS BESOIN DE MANIPULER LES HEADERS ET DE REAGIR PAR RAPPORT AUX META DONNEES DE LA REPONSE.