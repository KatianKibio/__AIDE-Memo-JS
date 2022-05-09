

var getData = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve([
                {
                    name: "Prouduct 1",
                    price: 5999,
                    soldPrice: 2999,
                    category: "A",
                    image: "images/MAPS.png"
                },
                {
                    name: "Prouduct 2",
                    price: 7999,
                    soldPrice: 2999,
                    category: "A",
                    image: "images/MAPS_2.jpg"
                },
                {
                    name: "Prouduct 3",
                    price: 9999,
                    soldPrice: 2999,
                    category: "B",
                    image: "images/FOREST.jpg"
                }
                
            ])
        },3000)
    })
}


var useData = async ()=>{
    var data = await getData()
    var displayTab = document.getElementById('app')
    displayTab ? displayTab.innerHTML = "" : null

    data.forEach(product => {
        var productItem = `
            <div class="product-item">
                <img src="${product.image}" width="150" alt="image modelisation 3D">
                <div class="product-details">
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">
                        <span class="sold-price">${product.soldPrice/100}</span>
                        <span class="regular-price"><del>${product.price/100}</del></span>
                    </div>
                </div>
            </div>
        `
        displayTab.innerHTML += productItem
        //console.log(productItem)
    });
}



useData()