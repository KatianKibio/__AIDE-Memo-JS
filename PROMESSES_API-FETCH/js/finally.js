var promesse = new Promise((resolve, reject)=>{
    var bool = true
    if(!bool){
        resolve('La resolution')
    }else{
        reject('erreur trouvé')
    }
})

promesse
    .then((result)=>console.log(result))
    .finally(()=>console.log('- - - - - - - - - -'))
    .catch((e)=>console.log(e))
    .finally(()=>console.log('- - - - - - - - - -'))