// 01 - Como acionar um evento
// Devemos atrelar o evento a um elemento,por exemplo um botão;
// Depois inserir um listener e o tipo de evento como argumento;
// Aí o elemento responderá por este evento e,obviamento,os ouitros
//  da pagina não;

let btn = document.querySelector("button");

btn.addEventListener("click", () =>{
    console.log("clicou em mim!");
});