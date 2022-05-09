// Il peut nous arriver d'avoir des erreurs de forme au niveau de notre objet json
// exemple avec une erreur → en enlevant le m de stadium → stadiu 
// → TypeError: data.stadium is undefined

try { //Comment recupéré les erreur → le bloc try...catch

    const json = '{"stadiu":{"id":"18","label":"Stade de France","fields":[{"id":2,"label":"Terrain de foot","area":200},{"id":5,"label":"Terrain de rugby","area":null}]}}'
    const data = JSON.parse(json)

    console.log(data.stadium.fields[1].label)// Terrain de rugby
} catch (erreur) {
    console.log('- - - Une erreur ici ! - - -')
    console.log(erreur)
    console.log('- - - - - - - - - - - - - - -')
}
// On peut faire un try → catch si on veut faire une autre opération
// ou afficher par exemple un texte à l'utilisateur pour lui indiquer 
// par exemple qu'il y a une erreur au niveau de la recupèration des stades

// Donc vous pouvez personaliser l'appel grâce à un bloc try catch
// si il y a une erreur avec votre méthode JSON.parse()