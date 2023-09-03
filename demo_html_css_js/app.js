'use strict';

const botao = document.querySelector('.btn');
botao.addEventListener('click', () => {
    //toogle troca uma classe pela a outra que eu quiser
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    const nomeDaClasse = document.body.className;
    if(nomeDaClasse === 'light-theme'){
        botao.textContent = 'Dark';
    }else{
        botao.textContent = 'Light';
    }

});