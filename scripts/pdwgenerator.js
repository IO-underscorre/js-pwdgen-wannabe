// Variables initialization and assignation
let firstName = prompt("Insert your first name");
let lastName = prompt("Insert your last name");
let favColor = prompt("Insert your favourite color");
const notSoRandomNumber = 23;

// Log and print
let passwordString = `${firstName}${lastName}${favColor}${notSoRandomNumber}`;

console.log(passwordString)

document.getElementById("password-container").innerHTML = passwordString;