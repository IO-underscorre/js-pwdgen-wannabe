window.onload = function () {
    // Random function
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    // Variables initialization and assignation
    let firstName = prompt("Insert your first name");
    let lastName = prompt("Insert your last name");
    let favColor = prompt("Insert your favourite color");
    let randomNumber = getRandomInt(10 , 99);

    let passwordString = `${firstName}${lastName}${favColor}${randomNumber}`

    // Log and print
    console.log(passwordString)

    document.getElementById("password-container").innerHTML = passwordString;
}