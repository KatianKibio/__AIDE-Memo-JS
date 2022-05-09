//:::: DO WHILE :::://

var motor = [1.6, 1.9, 2.0]
var idMotor = -1
do {
    idMotor = idMotor +1
    console.log(idMotor + " : Il y a un moteur de puissance " + motor[idMotor] + "V dans cette machine.");
}while(idMotor < 2)

console.log("- - - - - - - - - - - -");

//:::: WHILE :::://

var myServices = ["Intégration","Ux Design","UI Design","Front-End","Back-ENd"]
var indexServices = 0

while (indexServices < 4) {
    indexServices ++
    console.log("number : " + indexServices);
}

console.log("- - - - - - - - - - - -");
