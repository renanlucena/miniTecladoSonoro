function tocaSom(seletorAudio){

   const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else console.log('Elemento nao encontrado ou seletor invalido');
}

const listaDeTeclas = document.querySelectorAll('.tecla'); 




for(let i=0;i < listaDeTeclas.length; i++){

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`
    
    
    listaDeTeclas[i].onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(e){
        if(e.code === 'Enter' || e.code ==='Space'){   
            tecla.classList.add('ativa');
        }
              
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}
