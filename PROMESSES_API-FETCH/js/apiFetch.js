/*
Méthodes de requetes

GET => récupération de données
POST => envoyer des données -> options Obligatoires
PUT => modifier les données sur le serveur (remplacement) -> options Obligatoires
DELETE => supprimer des données sur le serveur
PATCH => modifier des donées sur le serveur (partielle) -> options Obligatoires

*/

//Simulation de données sur un serveur
var data = [{ //GET nous donne de récuprer toutes cette information là
        name: 'test',
        price: 50,
        description: "lorem"
    },
    {
        name: 'test',
        price: 50,
        description: "lorem"
    },
    {
        name: 'test',
        price: 50,
        description: "lorem"
    },
    {
        name: 'test',
        price: 50,
        description: "lorem"
    },
    {
        name: 'test',
        price: 50,
        description: "lorem"
    }
]

/*  //CODE STATUS -> réponse regroupées en 5 Classes

Les réponses informatives (100 - 199)
Les répopnses de succès (200 - 299)
Les redirectiond (300 - 499)
Les erreurs de client (400 - 499)
Les erreurs de serveurs (500 - 599)

*/


//AJAX EST REMPLACER PAR L'API FETCH -> alternative plus efficace
var requete ='http://127.0.0.1:5500/__AIDE/__Aide%20Memo%20JS/PROMESSES_API-FETCH/apiFetch.html'
var requete2 ='https://www.momes.net/'
var getPizzaDatz = async () =>{
    let response = await fetch(requeste)
    let pizzas = response.json()
    console.log(pizzas);
}
/*
fetch(requete)//requete avec GET n'a pas besoin de mettre d'options
    .then(
        (response)=>{
            return response.json()
        }
    )
   .then((result)=>{
        console.log(result);
    })
    */