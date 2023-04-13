//Esse comando serve para ser executado o audio do instrumento dejesado
function tocaSom (idElmentoAudio) {
    document.querySelector(idElmentoAudio).play();
}

//Esse comando serve para buscar todas as teclas do aluramid
const listaDeTeclas = document.querySelectorAll('.tecla');




//Essa função serve para criar um loop até que atinja o valor máximo de teclas do alura mid, e registra no console do navegador
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;
    
    console.log(idAudio);
    
    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    console.log(contador);
}
