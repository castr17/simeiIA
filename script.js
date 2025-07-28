const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que é homofobia?",
        alternativas: [
            {
                texto: "a) Uma expressão de carinho entre pessoas.",
                afirmacao: "Essa opção não está correta. Homofobia não é carinho, é preconceito contra pessoas LGBTQIA+."
            },
            {
                texto: "b) Uma forma de preconceito e discriminação contra pessoas LGBTQIA+.",
                afirmacao: "Você entendeu que homofobia é uma atitude de preconceito, discriminação e até violência contra pessoas LGBTQIA+."
            }
        ]
    },
    {
        enunciado: "Por que a inclusão é importante?",
        alternativas: [
            {
                texto: "a) Para que todas as pessoas se sintam respeitadas e seguras.",
                afirmacao: "Você percebe que a inclusão permite que todas as pessoas, independentemente de quem sejam, possam viver com dignidade, respeito e segurança."
            },
            {
                texto: "b) Porque só algumas pessoas merecem respeito.",
                afirmacao: "Essa opção não está correta. Todas as pessoas merecem respeito, sem exceção."
            }
        ]
    },
    {
        enunciado: "O que ainda dificulta o combate à homofobia?",
        alternativas: [
            {
                texto: "a) O preconceito, a falta de informação e o desrespeito.",
                afirmacao: "Você percebe que o preconceito, o desconhecimento e a falta de empatia dificultam o combate à homofobia."
            },
            {
                texto: "b) O excesso de leis e proteção às pessoas.",
                afirmacao: "Essa opção não está correta. As leis protegem direitos básicos e ajudam a combater a injustiça."
            }
        ]
    },
    {
        enunciado: "O que podemos fazer para ajudar na inclusão de pessoas LGBTQIA+?",
        alternativas: [
            {
                texto: "a) Praticar o respeito, combater o preconceito e promover a empatia.",
                afirmacao: "Você entendeu que pequenas ações, como respeito, empatia e informação, fazem grande diferença na construção de uma sociedade mais justa."
            },
            {
                texto: "b) Ignorar o problema, pois não é nossa responsabilidade.",
                afirmacao: "Essa opção não está correta. Ignorar o problema mantém o preconceito e a exclusão."
            }
        ]
    },
    {
        enunciado: "Por que é importante falar sobre diversidade nas escolas?",
        alternativas: [
            {
                texto: "a) Porque isso ajuda a criar respeito e combater o preconceito.",
                afirmacao: "Você reconhece que falar sobre diversidade nas escolas é essencial para educar crianças e jovens a respeitarem as diferenças e construírem um futuro mais inclusivo."
            },
            {
                texto: "b) Porque não é um assunto importante.",
                afirmacao: "Essa opção não está correta. Falar sobre diversidade é essencial para combater o preconceito e criar ambientes mais acolhedores."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Reflexão Final:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
