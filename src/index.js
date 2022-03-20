 /*quando clicar no pokemon da listagem temos que esconder o cartao do pokemon aberto e mostrar o cartao correspondente ao que foi selecionado na listagem
 para isso vamos utilizar dois elementos listagem e o cartao pokemon
 precizamos crias duas variaveis no js pra trabalhar com os elementos da tela
 vamos precisar trabalhar com um evento de clicar feito pelo usuario da listagem de pokemons
 -remover a class aberto so do cartao que esta aberto
 -ao clicar em um pokemon da listagem, pegamos o id desse pokemon para saber qual pokemon mostrar
 -remover a classe ativo que marca o pokemon selecionado
 -adicionar a class ativo no item da lista da lista selecionada*/
 /*precisamos criar duas variaveis no js pra trabalhar com os elementos da tela*/
 const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
 const pokemonsCard = document.querySelectorAll('.cartao-pokemon')
 listaSelecaoPokemons.forEach(pokemon => {/*informando a lista*/
     pokemon.addEventListener('click', () => {/*informando que quando clicar ocorrerar o que tiver na proxima lista*/
/* remover a class aberto, do cartaoq ue esta aberto*/
        const cartaoPokemonAberto = document.querySelector('.aberto')/*vai remover oque esta antes*/
        cartaoPokemonAberto.classList.remove('aberto')/*vai aparecer oque vc escolheu na list*/
/*ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartao mostrar*/
        const idPokemonSelecionado = pokemon.attributes.id.value
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)/*no qual vc clicar da lista ira aparecer*/
        cartaoPokemonParaAbrir.classList.add('aberto')


        /*remover a classe ativo que marca o pokemon selecionado*/
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')
        /*adicionar a classe ativo no item da lista selecionado*/
        const idPokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        idPokemonSelecionadoNaListagem.classList.add('ativo')
     })
 })