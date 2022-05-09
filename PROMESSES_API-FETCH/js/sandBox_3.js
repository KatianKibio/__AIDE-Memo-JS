/*//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::: NEW PROMISE ::::::::::::::::::::::::::::::::::::::::::::::
const ok = new Promise((resolve, reject) => {
    var isOk = prompt("")
    if(isOk == "ok"){
        resolve({status: "C'est Ok"})
    } else {
        reject({status: "Dont right..."})
    }
})

ok.then((result)=>console.log(result),(reject)=>console.log(reject))// ?? reject fonctionne..

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::: THEN :::::::::::::::::::::::::::::::::::::::::::::::::::::
const dead = new Promise((resolve, reject) =>{
    var isDead = prompt("")
    if(isDead == "dead") {
        resolve({status: 'Sorry. He is Dead.'})
    } else {
        reject({status: 'He is alive !'})
    }
})
                  
dead.then((result)=>console.log(result), (error)=>console.log(error))// error est la norme ?

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::: CATCH ::::::::::::::::::::::::::::::::::::::::::::::::::::
const manOrWoman = new Promise((resolve, reject) =>{
    var gender = prompt("")
    if(gender == "man") {
        resolve({status: 'I am a man'})
    }  return reject({status: 'I am a woman'})
    
})
manOrWoman.then((result) => (console.log(result)))
manOrWoman.catch((error) => (console.log(error)))
*/
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::: FINALLY ::::::::::::::::::::::::::::::::::::::::::::::::::

/*const isOnTheRoad = new Promise((resolve, reject)=> {
    var onRoad = Math.floor(Math.random()*10)
    console.log("The number is : " + onRoad);
    if(onRoad <= 5) {
        resolve({status: 'I am on the road'})
    }   reject({status: "......BUG......"})
    
})
isOnTheRoad.finally(() => console.log("Finallement c'est pas si difficile"))*/
//isOnTheRoad.then((result) => console.log(result), (error) => console.log(error));

//::: ES6 :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::: ENCHAINEMENT :::::::::::::::::::::::::::::::::::::::::::::
//::::::::: tHEN.CATCH.FINALLY ::::::::::::::::::::::::::::::::::::::::::


const enchainement = new Promise((resolve, reject) => {
    var whatNumbers = Math.floor(Math.random() * 50)
    if(whatNumbers >= 25){
        resolve("C'est un succès");
    }   reject("Une erreur est survenue")
})
console.log(enchainement);

//EN SYNTAXE ES6
enchainement
    .then((response)=> console.log(response))// A nommé "response" par convention
    .then((response)=> {
        console.log(response)
        console.log(10 * 20);
    })
    .catch((error)=> {
        console.log(error)// A nommé "error" par convention
        console.log(4 * 400);
    })
    .finally(()=> {
        console.log("Toujours exécuter")
        console.log("--------------------------------------------------------------")
    })

//... ES7 ..................................................................
//::::::::FONCTIONNER DE FACON ASYNCHRONE:::::::::::::::::::::::::::::::::::
//:::::::::::::::::::: ASYNC :::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::: AWAIT :::::::::::::::::::::::::::::::::::::::::::::::

const asyncAndAwait = new Promise((resolve, reject) => {
    setTimeout(() => {
        var nombre = Math.floor(Math.random() * 50)
        if(nombre >= 25){
            resolve({status: "Panda"});
        }   reject({status: "Loup"})
    }, 1000)
})

//EN SYNTAXE ES7
// Firstly create the anonym function
const tilt = async () => {
    try{//secondly add the try - catch 
        const talt = await asyncAndAwait
        console.log(talt);
    }catch (error){
        console.error(error);
    }
}   
    
tilt()