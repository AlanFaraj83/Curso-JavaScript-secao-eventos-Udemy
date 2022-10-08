// 07 - Outros eventos de mouse

// No mouse temos também eventos como mousedown e mouseup,
//  semelhante aos das teclas.
// Dblclick para ativar com dois cliques.

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("mousedown",function() {
    console.log("Apertou o botão");
});

btn1.addEventListener("mouseup",function() {
    console.log("Soltou o botão");
});

btn2.addEventListener("dblclick",function() {
    console.log("clicou duas vezes");
});

btn2.addEventListener("contextmenu",function(e) {
    e.preventDefault();
    console.log("Botão direito");
});
