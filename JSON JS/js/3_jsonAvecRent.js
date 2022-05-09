// Souvent lorsque on va rerquêté des API, on va récupérer une chaine de caractère
// qui est la représentation json du retour de l'API.

// On peut donc copier la chaine de caractère json et la stocker dans une variable
// on l'appelera ici pour l'exemple const json = ''
const json = '{"stadium":{"id":18,"label":"Stade de France","fields":[{"id":2,"label":"Terrain de foot","area":200},{"id":5,"label":"Terrain de rugby","area":null}]}}'

// Je vais stocker dans une const data le résultat de la commande JSON.parse()
// JSON.parse() nous permet de faire l'opération inverse de stringify() qui est la sérialisation
// alors que JSON.parse c'est de la désérialisation
const data = JSON.parse(json)

// Affichage dans la console
console.log(data)

// On peut ensuite manipuler directement ce nouvelle objet comme on manipulera n'importe quel objet javascript
console.log(data.stadium)// Object { id: 18, label: "Stade de France", fields: (2) […] }
console.log(data.stadium.fields)// Array [ {…}, {…} ]
console.log(data.stadium.fields[0])// Object { id: 2, label: "Terrain de foot", area: 200 }
console.log(data.stadium.fields[1])// Object { id: 5, label: "Terrain de rugby", area: null }
console.log(data.stadium.fields[0].label)// Terrain de foot
console.log(data.stadium.fields[1].label)// Terrain de rugby

// Il peut nous arriver d'avoir des erreurs de forme au niveau de notre objet json
// exemple avec une erreur → voir le fichier : 3_jsonAvecRentERROR.js