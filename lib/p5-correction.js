const correctP5Code = (code) => {
  const validAnswers = [
    {
      nome: "Pikachu",
      nivel: 25,
      tipo: "Elétrico",
    },
    //
  ];

  const errors = [];
  let consoleOutput = '';

  // Cria uma função temporária para capturar a saída
  const originalConsoleLog = console.log;
  console.log = (...args) => {
    consoleOutput += args.join(' ') + '\n';
  };

  // Tenta executar o código para verificar se há erros de sintaxe
  try {
    (function () {
      eval(code);
    })();
  } catch (error) {
    return { output: consoleOutput, message: 'Erro de sintaxe no código: ' + error.message, errors };
  } finally {
    // Restaura a função original de console.log
    console.log = originalConsoleLog;
  }

  // Verifica se o código cria um objeto 'pokemon'
  if (!window.pokemon || typeof window.pokemon !== 'object') {
    errors.push('Erro: O objeto "pokemon" não foi criado corretamente.');
  }

  // Aguarda a execução completa do código antes de verificar os objetos e métodos do p5.js
  setTimeout(() => {
    // Verifica se o código cria um objeto 'pokedex'
    if (!window.pokedex || typeof window.pokedex !== 'object') {
      errors.push('Erro: O objeto "pokedex" não foi criado corretamente.');
    }

    // Verifica se o código cria um método 'exibirDetalhes'
    if (!window.pokedex || !window.pokedex.exibirDetalhes || typeof window.pokedex.exibirDetalhes !== 'function') {
      errors.push('Erro: O método "exibirDetalhes" não foi criado corretamente.');
    } else {
      // Se a função existe, chama ela agora
      window.pokedex.exibirDetalhes();
    }
  }, 0);

  // Adiciona os erros à mensagem de saída
  const errorMessage = errors.length > 0 ? 'Erros:\n' + errors.join('\n') : '';

  // Verifica se a resposta do código corresponde a alguma resposta válida
  for (const validAnswer of validAnswers) {
    if (isEqual(consoleOutput.split('\n').filter(line => line.trim() !== ''), [
      `Nome: ${validAnswer.nome}`,
      `Nível: ${validAnswer.nivel}`,
      `Tipo: ${validAnswer.tipo}`,
    ])) {
      return { output: consoleOutput, message: 'Código correto!', errors };
    }
  }

  return { output: consoleOutput, message: 'A resposta do código não corresponde ao pokemon correspondente.', errors: errorMessage };
};

// Função para verificar igualdade entre arrays
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

export default correctP5Code;