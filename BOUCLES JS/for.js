
// VAR //
var tabCar = ["Renault", "Citroen", "Mercedes"]

//:::: FOR :::://
console.log("Boucle for (simple)\n");
console.log();
for (let index = 0; index < 3; index++) {
  console.log(index +  " ---> " + tabCar[index]);
    
}

console.log("- - - - - - - - - - - -");

//:::: FOR OF:::://

for (const car of tabCar) {
    console.log("For of de l'array tabCar :: " + car);
}

console.log("- - - - - - - - - - - -");

//:::: FOR EACH:::://

tabCar.forEach(myCar => {
    console.log("For each de l'array tabCar :: " + myCar);
});

console.log("- - - - - - - - - - - -");


