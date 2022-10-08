// 06 - Eventos de tecla(key events)

// Sempre que uma tecla é pressionada,são gerados dois eventos:
//   keyup e keydown;
// Podemos realizar ações nestes eventos também;
// Keyup é quando soltamos a tecla;
// keydown é quando apertamos.

window.addEventListener("keydown", function(e) {

    if(e.key == 'q') {
        console.log("Apertou a letra q");
    } else if (e.key == "Enter") {
        console.log("Apertou enter");
    }

});

window.addEventListener("keyup", function(e) {

    if(e.key == "Enter") {
        console.log("Soltou o enter");
    }

});

