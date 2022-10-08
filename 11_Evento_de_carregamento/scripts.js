// 11- Eventos de page load
// Podemos atrelar um evento quando a página carrega,pelo
//  evento load.
// E antes dos usuário fechar a página pelo evento beforeunload.



//window.addEventListener("load", function() {
//    alert("Asssine os nossos termos de uso");
// });

window.addEventListener("beforeunload", function() {
    event.returnValue = null;
});