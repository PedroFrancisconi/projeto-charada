const cardInner = document.getElementById('card-inner');
const containerCard = document.getElementById('container-card');
const campoPergunta = document.getElementById('pergunta');
const campoResposta = document.getElementById('resposta');
const inputResposta = document.getElementById('input-resposta');
const btnVerificar = document.getElementById('btn-verificar');
const btnNovaCharada = document.getElementById('btn-nova');
const btnPular = document.getElementById('btn-pular');
const campoPontos = document.getElementById('pontos');
const body = document.getElementById('body');

let respostaCorreta = "";
let pontos = 0;

buscaCharada();

async function buscaCharada() {
    try {
        // Resetar visual para nova charada
        inputResposta.value = "";
        
        // Garante que o card esteja virado para a frente (pergunta)
        cardInner.classList.remove('[transform:rotateY(180deg)]');
        
        // Reseta as cores do corpo para o estado inicial
        body.className = "bg-lime-100 flex flex-col items-center justify-center min-h-screen p-4 transition-colors duration-500";
        
        // URL da sua API
        const url = 'https://api-backend-two-omega.vercel.app/charadas/aleatorias';
        const response = await fetch(url);
        
        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro na API: ${response.status} ${response.statusText}`);
        }
        
        const dados = await response.json();

        // Atualiza os campos com os dados da API
        campoPergunta.textContent = dados.pergunta;
        campoResposta.textContent = dados.resposta;
        respostaCorreta = dados.resposta; // Salva a resposta correta

    } catch (erro) {
        // Exibe mensagem de erro no card e no console
        campoPergunta.textContent = "Erro ao conectar com o servidor.";
        console.error("Erro na busca:", erro);
    }
}

function verificarResposta() {
    const palpiteUsuario = inputResposta.value.trim().toLowerCase();
    const respostaFormatada = respostaCorreta.trim().toLowerCase();

    if (palpiteUsuario === respostaFormatada) {
        pontos++;
        campoPontos.textContent = pontos; // Atualiza o contador de pontos
        
       
        body.classList.replace('bg-lime-100', 'bg-green-200');
        
        cardInner.classList.add('[transform:rotateY(180deg)]');
        
        // Aguarda 2 segundos (2000 milissegundos) e busca uma nova charada
        setTimeout(buscaCharada, 2000);
    } else {
        // ERRO
        // Muda o fundo para vermelho
        body.classList.replace('bg-lime-100', 'bg-red-200');
        
        // Adiciona a animação de tremor no card
        containerCard.classList.add('animate-shake');
        
       
        setTimeout(() => {
            if (body.classList.contains('bg-red-200')) {
                body.classList.replace('bg-red-200', 'bg-lime-100');
            }
            containerCard.classList.remove('animate-shake');
        }, 1000);
    }
}

btnVerificar.addEventListener('click', verificarResposta);

inputResposta.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') verificarResposta();
});

btnNovaCharada.addEventListener('click', buscaCharada);
btnPular.addEventListener('click', buscaCharada);
