const Desafio2 = (code) => {
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

    // Verifica se o objeto Pikachu foi criado corretamente
    if (!window.Pikachu || typeof window.Pikachu !== 'object') {
        errors.push('Erro: O objeto "Pikachu" não foi criado corretamente.');
    } else {
        // Verifica as propriedades do objeto Pikachu
        const expectedPikachuProps = ['Nome', 'Tipo', 'Sexo', 'Nível', 'HP', 'SP', 'Status'];
        for (const prop of expectedPikachuProps) {
            if (!window.Pikachu[prop]) {
                errors.push(`Erro: A propriedade "${prop}" do objeto "Pikachu" não foi definida corretamente.`);
            }
        }
    }

    if (!code.includes('console.log(Pikachu.Nome)')) {
        errors.push('Erro: console.log não definido.');
      }

    if (errors.length === 0) {
        return { output: consoleOutput, message: 'Código correto!', errors };
    }

    const errorMessage = errors.join('\n');

    return { output: errorMessage, message: 'O código contém erros ou não atende aos requisitos.', errors: errorMessage };
};

export default Desafio2;