window.onload = function () {
    // Random function
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    // Variables initialization and assignation
    let firstName = prompt("Insert your first name");
    let lastName = prompt("Insert your last name");
    let favColor = prompt("Insert your favourite color");
    let randomNumber = getRandomInt(10 , 99);

    // Log and print
    console.log(`${firstName}${lastName}${favColor}${randomNumber}`)

    document.getElementById("password-container").innerHTML = `${firstName}${lastName}${randomNumber}`;
}