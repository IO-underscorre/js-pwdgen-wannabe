window.onload = function () {
    // Variables initialization and assignation
    let firstName = prompt("Insert your first name");
    let lastName = prompt("Insert your last name");
    let favColor = prompt("Insert your favourite color");
    const notSoRandomNumber = 23;

    // Log and print
    console.log(`${firstName}${lastName}${favColor}${notSoRandomNumber}`)

    document.getElementById("password-container").innerHTML = `${firstName}${lastName}${notSoRandomNumber}`;
}