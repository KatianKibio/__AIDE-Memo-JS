const maPromesse = new Promise((resolve, reject)=>{
    const random = Math.floor(Math.random() * 100)
    
    if(random > 50){
        resolve({status: 'sucess', random})
    }

    reject({status: 'error', random})
})

console.log(maPromesse);

//---------------------------------
console.log('----------------------------------------------------');
const maPromesseTimeOut = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        const random = Math.floor(Math.random() * 100)
    
        if(random > 50){
            resolve({status: 'sucess', random})
        }
    
        reject({status: 'error', random})
    })
})

    

console.log(maPromesseTimeOut);
