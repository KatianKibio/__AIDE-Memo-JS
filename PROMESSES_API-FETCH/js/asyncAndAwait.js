// fonction async et await


var getData = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve([
                {
                    name: "Prouduct 1",
                    price: 5999,
                    category: "A"
                },
                {
                    name: "Prouduct 2",
                    price: 7999,
                    category: "A"
                },
                {
                    name: "Prouduct 3",
                    price: 9999,
                    category: "B"
                }
            ])
        },3000)
    })
}

//cette façon de faire complique beaucoup les choses
var useData = ()=>{
    getData()
    .then(
        (data)=>{
            console.log(data);
        }
    )
    .catch((e)=>{
        console.log(e);
    })
}

useData()
//.........................END

//voici une manière plus simple et propre
//avec async et await => on attends

//
var useDataSimply = async ()=>{//async rend la fonction asynchrone
    var dataOne = await getData()//await nous permet d'attendre une promesse
    console.log(dataOne);//ici on met la promesse recuperer
}


useDataSimply()