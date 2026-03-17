// Importamos o módulo readline para capturar dados do prompt de comando
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Função utilitária para fazer perguntas no terminal de forma síncrona/esperada
 * (Usamos uma Promise para simular o comportamento de pausa do prompt original)
 */
const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function calculadora() {
    console.log('\n--- CALCULADORA DE TERMINAL ---');
    
    const menu = 'Escolha uma operação:\n1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão real (/)\n5 - Divisão inteira (%)\n6 - Potenciação (**)\nOpção: ';
    const operacao = Number(await question(menu));

    if (!operacao || operacao >= 7) {
        console.log('❌ Erro - operação inválida!');
        return calculadora(); // Reinicia
    }

    const n1 = Number(await question('Digite o primeiro valor: '));
    const n2 = Number(await question('Digite o segundo valor: '));

    if (isNaN(n1) || isNaN(n2)) {
        console.log('❌ Erro - parâmetros inválidos! Digite apenas números.');
        return calculadora();
    }

    let resultado;
    
    // Lógica das operações
    switch (operacao) {
        case 1: 
            resultado = n1 + n2;
            console.log(`✅ Resultado: ${n1} + ${n2} = ${resultado}`);
            break;
        case 2: 
            resultado = n1 - n2;
            console.log(`✅ Resultado: ${n1} - ${n2} = ${resultado}`);
            break;
        case 3: 
            resultado = n1 * n2;
            console.log(`✅ Resultado: ${n1} * ${n2} = ${resultado}`);
            break;
        case 4: 
            resultado = n1 / n2;
            console.log(`✅ Resultado: ${n1} / ${n2} = ${resultado}`);
            break;
        case 5: 
            resultado = n1 % n2;
            console.log(`✅ Resultado: O resto da divisão entre ${n1} e ${n2} é ${resultado}`);
            break;
        case 6: 
            resultado = n1 ** n2;
            console.log(`✅ Resultado: ${n1} elevado à ${n2}ª potência é ${resultado}`);
            break;
    }

    const deNovo = await question('\nDeseja fazer outra operação?\n1 - Sim\n2 - Não\nOpção: ');
    
    if (deNovo == '1') {
        calculadora();
    } else {
        console.log('Até mais, Esmeraldo!');
        rl.close();
    }
}

// Inicia a aplicação
calculadora();