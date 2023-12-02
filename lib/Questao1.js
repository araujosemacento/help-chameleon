const Questao1 = (code) => {
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

  // Verifica se o objeto pokeball é um objeto no escopo global
  console.log(window.pokeball);
  if (!window.pokeball || !(window.pokeball instanceof window.Pokebola)) {
    errors.push('Erro: O objeto "pokeball" não foi criado corretamente a partir da função construtora "Pokebola".');
  } else {
    // Verifica se as propriedades cor e tipo foram definidas corretamente
    if (!window.pokeball.cor || !window.pokeball.tipo) {
      errors.push('Erro: As propriedades "cor" e "tipo" do objeto "pokeball" não foram definidas corretamente.');
    }
  }

  if (errors.length == 0) {
    return { output: consoleOutput, message: 'Código correto!', errors };
  }

  const errorMessage = errors.length > 0 ? errors.join('\n') : '';

  return { output: errorMessage, message: 'A resposta do código não corresponde ao pokemon correspondente.', errors: errorMessage };
};

export default Questao1;
