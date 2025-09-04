// Seleciona os elementos do DOM
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');
const diaSemanaEl = document.getElementById('diaSemana');
const dataEl = document.getElementById('data');

// Array com os dias da semana
const diasSemana = [
    "Domingo", 
    "Segunda-feira", 
    "Terça-feira", 
    "Quarta-feira", 
    "Quinta-feira", 
    "Sexta-feira", 
    "Sábado"
];

// Função para animar os números quando mudam
function animarNumero(el) {
    el.classList.add('atualizado');
    setTimeout(() => el.classList.remove('atualizado'), 200);
}

// Função principal que atualiza o relógio
function atualizarRelogio() {
    const agora = new Date();

    // Pega horas, minutos e segundos
    let h = agora.getHours();
    let m = agora.getMinutes();
    let s = agora.getSeconds();

    // Formata para sempre ter 2 dígitos
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    // Atualiza os números no HTML
    horasEl.textContent = h;
    minutosEl.textContent = m;
    segundosEl.textContent = s;

    // Adiciona animação
    animarNumero(horasEl);
    animarNumero(minutosEl);
    animarNumero(segundosEl);

    // Atualiza dia da semana e data
    diaSemanaEl.textContent = diasSemana[agora.getDay()];
    dataEl.textContent = agora.toLocaleDateString();
}

// Atualiza o relógio a cada 1 segundo
setInterval(atualizarRelogio, 1000);

// Chama a função logo no carregamento
atualizarRelogio();