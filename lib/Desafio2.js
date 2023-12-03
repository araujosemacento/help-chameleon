const Desafio1 = (code) => {
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

   // Verifica se o objeto Bulbasaur foi criado corretamente
   if (!window.Bulbasaur || typeof window.Bulbasaur !== 'object') {
      errors.push('Erro: O objeto "Bulbasaur" não foi criado corretamente.');
    } else {
      // Verifica as propriedades do objeto Bulbasaur
      const expectedBulbasaurProps = ['Nome', 'Tipo', 'Nível', 'HP'];
      for (const prop of expectedBulbasaurProps) {
        if (!window.Bulbasaur[prop]) {
          errors.push(`Erro: A propriedade "${prop}" do objeto "Bulbasaur" não foi definida corretamente.`);
        }
      }
    }

  // Verifica se o objeto Pikachu foi criado corretamente
  if (!window.Pikachu || typeof window.Pikachu !== 'object') {
    errors.push('Erro: O objeto "Pikachu" não foi criado corretamente.');
  } else {
    // Verifica as propriedades do objeto Pikachu
    const expectedPikachuProps = ['Nome', 'Tipo', 'Nível', 'HP'];
    for (const prop of expectedPikachuProps) {
      if (!window.Pikachu[prop]) {
        errors.push(`Erro: A propriedade "${prop}" do objeto "Pikachu" não foi definida corretamente.`);
      }
    }

    // Verifica os métodos do objeto Pikachu
    const pikachuMethods = ['choqueDoTrovao', 'investidaTrovao', 'trovao', 'caudaDeFerro'];
    for (const method of pikachuMethods) {
      if (typeof window.Pikachu[method] !== 'function') {
        errors.push(`Erro: O método "${method}" do objeto "Pikachu" não foi criado corretamente.`);
      }
    }
  }

  if(window.Bulbasaur && window.Bulbasaur.HP <= 0) {
    return { output: consoleOutput, message: 'Você derrotou o Bulbasaur', errors };
  }

  if (errors.length === 0) {
    return { output: consoleOutput, message: 'Código correto!', errors };
  }

  const errorMessage = errors.join('\n');

  return { output: errorMessage, message: 'O código contém erros ou não atende aos requisitos.', errors: errorMessage };
};

export default Desafio1;
