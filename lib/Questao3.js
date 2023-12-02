const Questao3 = (code) => {
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

    // Verifica se o objeto pokedex é um objeto no escopo global
    if (!window.pokedex || typeof window.pokedex !== 'object') {
        errors.push('Erro: O objeto "pokedex" não foi criado corretamente.');
    } else {
        // Verifica se as propriedades cor foram definidas corretamente
        if (!window.pokedex.cor) {
            errors.push('Erro: A propriedade "cor" do objeto "pokedex" não foi definida corretamente.');
        }

        // Verifica se o método escanear foi criado
        if (typeof window.pokedex.escanear !== 'function') {
            errors.push('Erro: O método "escanear" não foi criado corretamente.');
        } else {
            // Testa o método escanear com o objeto pokemon do usuário
            if (!window.pokemon || typeof window.pokemon !== 'object') {
                errors.push('Erro: O objeto "pokemon" não foi criado corretamente.');
            } else {
                // Executa o método escanear e verifica se a saída é a esperada
                //window.pokedex.escanear(window.pokemon);
                const escaneamentoEsperado = [
                    `Nome: ${window.pokemon.nome}`,
                    `Nível: ${window.pokemon.nivel}`,
                    `Tipo: ${window.pokemon.tipo}`,
                ];

                if (!isEqual(consoleOutput.split('\n').filter(line => line.trim() !== ''), escaneamentoEsperado)) {
                    errors.push('Erro: A execução do método "escanear" não produziu a saída esperada.');
                }
            }
        }
    }

    if (errors.length === 0) {
        return { output: consoleOutput, message: 'Código correto!', errors };
    }

    const errorMessage = errors.join('\n');

    return { output: errorMessage, message: 'O código contém erros ou não atende aos requisitos.', errors: errorMessage };
};

const isEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
};

export default Questao3;
