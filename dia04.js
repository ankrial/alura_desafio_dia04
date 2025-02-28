// Creado: Alberto Jiu
let numeroMaximo = 10;
let intentos = 3;
let opcion = 1;
let adivinoNumero = 1;

while (opcion == 1) {
    let numero_a_adivinar = Math.floor(Math.random() * numeroMaximo + 1);
    console.log(numero_a_adivinar)
    
    // Empezamos el juego
    alert("¡Bienvenido al juego de adivinanza de números!");
    alert("Tienes 3 intentos para adivinar el número entre 0 y 10.");

    for (let i = 0; i < intentos; i++) {
        let adivinanza = parseInt(prompt("Introduce tu adivinanza:"));   
        if (adivinanza === numero_a_adivinar) {
            alert("¡Felicidades! ¡Has adivinado el número!");
            adivinoNumero = 1;
            break;
        } else {
            alert(`No has acertado. Te quedan ${intentos - (i + 1)} intentos.`);        
            adivinoNumero = 0;
        }
    }
    if (adivinoNumero == 0) {
        alert(`Lo siento, no has adivinado el número. El número era: ${numero_a_adivinar}`);
    }
    opcion = prompt("Deseas Volver a Intentar Adivinar?: \n 1 = SI \n 2 = NO");
    console.log(opcion);
}
