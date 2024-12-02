var elementoduvida = document.querySelectorAll('.duvida')
elementoduvida.forEach(function(duvida){   //"forEach" = para cada elemento
    duvida.addEventListener('click', function (){
        duvida.classList.add('fundo-verde')
        duvida.classList.add('ativa')
    })  
})