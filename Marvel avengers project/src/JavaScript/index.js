const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter',() => {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado')

      personagem.classList.add('selecionado');

    /* troca personagem/nome grande */

    const idSelecionado = personagem.attributes.id.value; 

    if(idSelecionado === 'ultron'){
      return;
    }

    const imagemJogador1 = document.getElementById('personagem-jogador-1');
    imagemJogador1.src = `./src/img/${idSelecionado}.png`

    const nomeJogador1 = document.getElementById('nome-jogador-1');
    
    const nomeSelecionado = personagem.getAttribute('data-name');
    nomeJogador1.innerHTML = nomeSelecionado
  })
});