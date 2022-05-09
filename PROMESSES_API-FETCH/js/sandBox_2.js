console.log('Promessse \n');




const greenOrRed = new Promise((resolve, reject) => {
    var randomNumber = Math.floor(Math.random() * 2)

    
    if (randomNumber === 1) {
        var iCanCross = true
        if (randomNumber === 1 && iCanCross === true) {
            console.log("iCanCross = " + iCanCross);
            console.log("Random = " + randomNumber);
            resolve({status: 'Yes I can cross.'})
        }  
    
    } else if (randomNumber === 0) {
        var iCanCross = false
        if (randomNumber === 0 && iCanCross === false) {
            console.log("iCanCross = " + iCanCross);
            console.log("Random = " + randomNumber);
            reject({status: 'Oh no! The light is red again..'})
        } 
    }    
})
        

console.log(greenOrRed);
