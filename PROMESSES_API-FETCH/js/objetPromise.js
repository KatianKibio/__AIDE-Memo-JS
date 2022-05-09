// une fonction synchrone

var getNumber = ()=> {
    return 1789
}
console.log("Get Number : ",getNumber());

// ici cela rendra undefined car les seconde sont trop longue (meme 0 secondes)
// la solution sera d'executer la promesse

var getNumberTwo = ()=> {
    setTimeout(() => {
        return 1793
    }, 0)
}

console.log("Get NumberTwo : ",getNumberTwo());

// comme ci-dessous


var getNumberWithPromise = ()=> {
   
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve([476, 1789, 1793])
            },5000)
        })
 
}

// Ont ne peux pas acceder à son contenu de cette manière là
console.log("Get NumberTwo : ",getNumberWithPromise());

//voici coment faire à présent
getNumberWithPromise().then((value)=>{
    console.log(value);
})

// exercice avec age (une promesse)

var age = 5
var whatAgeAreYou = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(age === 5){
                resolve(age)
            }else
                reject("Age is not defined")
        },2500)
    })
}

whatAgeAreYou()
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})

//-------------SANDBOX TRAINING KAT-------------
var yourAge = 25
var canYou = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(yourAge>= 18){
                resolve(`Tu as ${yourAge} ans, donc tu peux entrer.`)
            } else {
                reject(`Tu n'as que ${yourAge} ans, tu es trop jeune pour entrer.`)
            }
        },2000)
    })
}

canYou()
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})
//-------------SANDBOX TRAINING KAT------------- ---END

//::::::::::::::::::::Promesses en Variable:::::::::::::::::::::::::

// Ont peux stocker la promesse dans une variable
// var maPromese = new Promise
// var autrePromesse = Promise.reject(false)

//une promesse qui va toujour rejeté
var autrePromesse = Promise.reject("Promesse toujours rejeté")
autrePromesse
.catch((error)=>{
    console.log("display of error :",error);
})

//une promesse qui va toujour resolvé
var promiseAlwaysResolved = Promise.resolve("Promesse toujours résolue")
promiseAlwaysResolved
.then((resolu)=>{
    console.log("display of resolu :",resolu);
})

// promes choix possible entre resolve ou reject
var bool = new Promise((resolve, reject) =>{
    resolve('test')
})

bool
.then((resolved)=>{
    console.log(resolved);
})

//....................................................................

