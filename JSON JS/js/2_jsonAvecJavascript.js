//Commment utiliser json avec du javascript

//Création d'un tableau d'objet javascript
const fields = [
    {
        id: 2,
        label: "Terrain de foot",
        area: 200
    },
    {
        id: 5,
        label: "Terrain de rugby",
        area: null
    }
]

//Création d'un Objet nommé data
const data = {
    stadium: {
        id: 18,
        label: "Stade de France",
        fields: fields
    }
}
// Une fois que l'on a nos tableau javascript on va pouvoir les sérialiser (les transformer en json)
const json = JSON.stringify(data)
// stringify permet de convertir n'importe quel type javascript (tableau, objet, entier etc.)
// directement en representation json qui sera stocker dans une chaine de caractère

// Affichage dans la console de la représenration json
console.log(json);
// {"stadium":{"id":18,"label":"Stade de France","fields":[{"id":2,"label":"Terrain de foot","area":200},{"id":5,"label":"Terrain de rugby","area":null}]}}
