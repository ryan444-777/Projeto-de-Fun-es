// 1. Cálculo da Soma
function calcularSoma() {
    const INDICE = 13;
    let SOMA = 0;
    let K = 0;

    while (K < INDICE) {
        K += 1;
        SOMA += K;
    }

    document.getElementById('resultadoSoma').textContent = `Resultado: ${SOMA}`;
}

// 2. Verificação de Fibonacci
function verificarFibonacci() {
    const n = parseInt(document.getElementById('numeroFibonacci').value, 10);
    let a = 0, b = 1;

    while (a < n) {
        [a, b] = [b, a + b];
    }

    const resultado = (a === n) ? "pertence à sequência de Fibonacci." : "NÃO pertence à sequência de Fibonacci.";
    document.getElementById('resultadoFibonacci').textContent = `O número ${n} ${resultado}`;
}

// 3. Cálculo de Faturamento
function calcularFaturamento() {
    // Dados simulados de faturamento
    const faturamento = [
        { dia: 1, faturamento: 100 },
        { dia: 2, faturamento: 200 },
        { dia: 3, faturamento: 0 },
        { dia: 4, faturamento: 400 }
        // Adicione mais dados conforme necessário
    ];

    const valores = faturamento
        .map(dia => dia.faturamento)
        .filter(f => f > 0);

    const menor = Math.min(...valores);
    const maior = Math.max(...valores);
    const media = valores.reduce((acc, val) => acc + val, 0) / valores.length;
    const diasAcimaMedia = valores.filter(f => f > media).length;

    document.getElementById('resultadoFaturamento').textContent =
        `Menor valor: ${menor}, Maior valor: ${maior}, Dias acima da média: ${diasAcimaMedia}`;
}

// 4. Percentual por Estado
function calcularPercentuais() {
    const faturamentoEstados = {
        "SP": 67836.43,
        "RJ": 36678.66,
        "MG": 29229.88,
        "ES": 27165.48,
        "Outros": 19849.53
    };

    const total = Object.values(faturamentoEstados).reduce((acc, val) => acc + val, 0);
    const percentuais = {};

    for (const [estado, valor] of Object.entries(faturamentoEstados)) {
        percentuais[estado] = (valor / total) * 100;
    }

    let resultado = "";
    for (const [estado, percentual] of Object.entries(percentuais)) {
        resultado += `${estado}: ${percentual.toFixed(2)}%<br>`;
    }

    document.getElementById('resultadoPercentuais').innerHTML = resultado;
}

// 5. Inversão de String
function inverterString() {
    const str = document.getElementById('stringInput').value;
    let invertida = "";

    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }

    document.getElementById('resultadoInversao').textContent = `String invertida: ${invertida}`;
}
