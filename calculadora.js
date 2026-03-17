/* eslint-env node */ 
// A linha acima avisa ao VS Code que estamos no Node.js, silenciando erros do objeto 'process'.

// Importamos o módulo readline para capturar dados do prompt de comando, ou seja, (Importa o  módulo nativo para ler entradas do teclado).
const readline = require('readline');

// Configuração da interface de entrada e saída (Terminal)
const rl = readline.createInterface({
    input: process.stdin,  // Define que a entrada vem do que você digita no prompt.
    output: process.stdout // Define que a saída será exibida no texto do terminal.
});

/**
 * Função utilitária para fazer perguntas no terminal de forma síncrona/esperada
 * Como o Node.js é assíncrono, criamos esta promessa para que o código 
 * "pare" e espere o usuário digitar antes de seguir para a próxima linha.
 */
const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function calculadora() {
    console.log('\n--- CALCULADORA DE TERMINAL ---');
    
    // O comando 'await' faz o programa esperar a resposta da função question.
    const menu = 'Escolha uma operação:\n1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão real (/)\n5 - Divisão inteira (%)\n6 - Potenciação (**)\nOpção: ';
    const operacao = Number(await question(menu));

    // Validação de entrada para garantir que o usuário escolheu uma opção do menu.
    if (!operacao || operacao >= 7) {
        console.log('❌ Erro - operação inválida!');
        return calculadora(); // Reinicia
    }

    // Captura dos números e conversão imediata para o tipo Number.
    const n1 = Number(await question('Digite o primeiro valor: '));
    const n2 = Number(await question('Digite o segundo valor: '));

    // Validação de segurança: isNaN verifica se o que foi digitado não é um número.
    if (isNaN(n1) || isNaN(n2)) {
        console.log('❌ Erro - parâmetros inválidos! Digite apenas números.');
        return calculadora();
    }

    let resultado;    
    
    /**
     * Lógica das operações:
     * O Switch Case direciona para a conta matemática correta.
     */
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
            resultado = n1 % n2; // Operação de Módulo (Resto da Divisão)
            console.log(`✅ Resultado: O resto da divisão entre ${n1} e ${n2} é ${resultado}`);
            break;
        case 6: 
            resultado = n1 ** n2; // Operação de Potenciação (Exponencial)
            console.log(`✅ Resultado: ${n1} elevado à ${n2}ª potência é ${resultado}`);
            break;
    }

    // Controle de Fluxo Final: Pergunta se o usuário quer continuar ou sair.
    const deNovo = await question('\nDeseja fazer outra operação?\n1 - Sim\n2 - Não\nOpção: ');
    
    if (deNovo == '1') {
        calculadora(); // Chamada recursiva para novo cálculo.
    } else {
        console.log('Até mais, Esmeraldo!');
        rl.close(); // Encerra a interface do terminal e fecha o processo do Node.
    }
}

// Inicia a execução da aplicação.
calculadora();