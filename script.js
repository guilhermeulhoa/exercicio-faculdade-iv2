setTimeout(function ativaMensagem() {
    document.getElementById('lol').style.visibility = 'visible' ;
}, 7000);

lol.onclick = function () {
    document.getElementById('lol').style.visibility = 'hidden';
};