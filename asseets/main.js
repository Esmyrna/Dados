// Chamando HTML:
const PrimeiraJogada = document.getElementById('btn-1');
const SegundaJogada = document.getElementById('btn-2');
const ResultadoJogador1 = document.getElementById('resultado-1');
const ResultadoJogador2 = document.getElementById('resultado-2');
const reset = document.getElementById('btn-restart');
const result = document.getElementById('result');

// Variaveis:
let permissao1 = true;
let permissao2 = true;
let PlacarPlay1 = [];
let PlacarPlay2 = [];
let pontuacao1 = 0;
let pontuacao2 = 0;
let contador = 0;

// Rodar dado 1:
const rodarDado = () => {

    if(permissao1 === true){
        let result1 = Math.floor(1 + 6 * Math.random());
        ResultadoJogador1.innerHTML = result1;
        PlacarPlay1.push(result1);
        console.log(PlacarPlay1);
    }
    else{
        alert('É a vez do outro jogador.')
    }
}
// Rodar dado 2:
const rodarDado2 = () => {
    if(permissao2 === true) {
        let result2 = Math.floor(1 + 6 * Math.random());
        ResultadoJogador2.innerHTML = result2;
        PlacarPlay2.push(result2);
        console.log(PlacarPlay2);
    } else {
        alert('É a vez do outro jogador.');
    }
}


const resultadinho = () => {

    if(PlacarPlay1[contador] > PlacarPlay2[contador]) {
        alert(`O vencedor da rodada ${contador + 1} é o jogador 1`);
    } else if (PlacarPlay2[contador] > PlacarPlay1[contador]) {
        alert(`O vencedor da rodada ${contador +  1} é o jogador 2`)
    } else if(PlacarPlay2[contador] === PlacarPlay2[contador]){
        alert('Empate')
    }

    contador++;

    // Exibindo o vencedor final ao chegar em 10 rodadas;
    if(PlacarPlay2.length == 10) {
        for(let i =0; i < 10; i++) {
            if(PlacarPlay1[i] > PlacarPlay2[i]){
                pontuacao1 += 1;
            }
            else if(PlacarPlay2[i] > PlacarPlay1[i]){
                pontuacao2 += 1;
            }
        }
    if(pontuacao1 > pontuacao2){
        alert(`O vencedor final é o jogador 1.`)
    }else if(pontuacao2 > pontuacao1) {
        alert(`O vencedor final é o jogador 2.`)
    }else if(pontuacao1 === pontuacao2) {
        alert(`O resultado final é empate.`)
    }else{
        alert(`Algo deu errado`)
    }
    }
    // Vencedor da rodada:    
}
    // Função para reiniciar o jogo:
    const restartGame = () => {
      
        pontuacao1 = 0;
        pontuacao2 = 0;
        contador = 0;
        PlacarPlay1 = [];
        PlacarPlay2 = [];
        permissao1 = true;
        permissao2 = false;
        ResultadoJogador1.innerHTML = '';
        ResultadoJogador2.innerHTML = '';
        
        alert(`Iremos reiniciar o jogo`);
        res1.innerHTML = '';
        res2.innerHTML = '';
    }

    // linkando botão:
    PrimeiraJogada.onclick = rodarDado;
    SegundaJogada.onclick = rodarDado2;
    reset.onclick = restartGame;
    result.onclick = resultadinho;