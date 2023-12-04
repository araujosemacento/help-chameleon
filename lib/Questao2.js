const Questao2 = (code) => {
    const errors = [];
    let consoleOutput = '';

    const originalConsoleLog = console.log;
    console.log = (...args) => {
        consoleOutput += args.join(' ') + '\n';
    };

    try {
        // Execute o código do usuário no contexto global
        (function () {
            window.eval.call(window, code);
        })();
    } catch (error) {
        return { output: consoleOutput, message: 'Erro de sintaxe no código: ' + error.message, errors };
    } finally {
        console.log = originalConsoleLog;
    }

    // Verifica se a função construtora Pokebola está definida
    if (typeof window.Pokebola !== 'function') {
        errors.push('Erro: A função construtora "Pokebola" não foi definida corretamente.');
    }

    // Verifica se o objeto pokebola é um objeto no escopo global
    if (!window.pokebola || !(window.pokebola instanceof window.Pokebola)) {
        errors.push('Erro: O objeto "pokebola" não foi criado corretamente a partir da função construtora "Pokebola".');
    } else {
        // Verifica se as propriedades cor e tipo foram definidas corretamente
        if (!window.pokebola.cor || !window.pokebola.tipo) {
            errors.push('Erro: As propriedades "cor" e "tipo" do objeto "pokebola" não foram definidas corretamente.');
        }

        // Verifica se o método capturar foi criado
        if (typeof window.pokebola.verificar !== 'function') {
            errors.push('Erro: O método "verificar" não foi criado corretamente.');
        } else {
            // Executa o método verificar e verifica se a saída é a esperada
            window.pokebola.verificar();
            const capturaMensagem = 'Você capturou o Pikachu';
            if (!consoleOutput.includes(capturaMensagem)) {
                errors.push(`Erro: A execução do método "verificar" não produziu a mensagem esperada: "${capturaMensagem}".`);
            }
        }
    }

    if (errors.length === 0) {
        return { output: consoleOutput, message: 'Código correto!', errors };
    }

    const errorMessage = errors.join('\n');

    return { output: errorMessage, message: 'O código contém erros ou não atende aos requisitos.', errors: errorMessage };
};

export default Questao2;
