// instruction asynchrone
setTimeout(() => {
    var time = (new Date()).toLocaleTimeString()
    console.log('Heure :'+time);
    document.getElementById('app').innerHTML = time
},3000)

// instruction synchrone sont ditent bloquante
// ils bloque le moteur js jusqu'à ce qu'il y ai satisfaction de leurs revendication
console.log("A");
console.log("B");
console.log("C");
console.log("D");


//
setTimeout(() => {
    var heure = (new Date()).toLocaleTimeString()
    console.log('XX : '+heure);
    document.getElementById('heure').innerHTML = heure
},1000)