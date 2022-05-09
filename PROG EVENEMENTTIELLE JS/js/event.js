


var listenerFunction = {
    jeClick: function (event) {//l'ajout d'event ...
        var element = event.target;//CE POINT VIRGULE EST IMPORTZANT !!!
        console.log("Element : ", element);
        element.style.fontSize = "2.1rem"
        if (element && element.style.color == "red") {
            element.style.color = "blue"
        } else {
            element.style.color = "red"
        }
        console.log("BOUTTON CLICQUEZ !");
    }
}

var setupListener = () => {
    var leBoutton = document.querySelector('button')
    leBoutton.addEventListener('click', listenerFunction.jeClick)
}

//J'appel la fonction
setupListener()


// Le this donne l'élément
// Le event donne PLUS que l'élément

//______________________________________________

var aClicker = (event) => {
    console.log('CLICK');
    var bgBody = event.target;
    if (bgBody && bgBody.style.background == "black") {
        bgBody.style.background = "white"
        bgBody.style.color = "black"
    } else {
        bgBody.style.background = "black"
        bgBody.style.color = "white"
    }

}


var bgBody2 = document.querySelector('html')
bgBody2.addEventListener('click', aClicker)


aClicker()