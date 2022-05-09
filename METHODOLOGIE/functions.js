
// Object contenant les foncstions listener
var listenerFunction = {
    jeClick: () => {
        console.log("Vous avez bien clicker")
    },
    jeDblclick: () => {
        console.log("Vous avez bien DOUBLE clicker")
    },

    jeKeypress: () => {
        console.log("Vous avez bien ......")
    }
}

//Mises en place des abonnements
var setupListener = () => {
    var myButton = document.querySelector('button.btn1')//selection
    myButton.addEventListener('click', listenerFunction.jeClick)//Abonnement
}

var setupListener_2 = () => {
    var myButton2 = document.querySelector('button.btn2')
    myButton2.addEventListener('dblclick', listenerFunction.jeDblclick)
}

var setupListener_3 = () => {
    var myButton3 = document.querySelector('input.text')
    myButton3.addEventListener('keypress', listenerFunction.jeKeypress)
}

// Fonction nommé auto-executé (en utilisant une variable), en fléché
var autocall = (() => {
    console.log("Je m'auto appelle");
})