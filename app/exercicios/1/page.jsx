"use client"

import { React, useState } from 'react';
import CodeEditor from '../../components/CodeEditor';
import Questao1 from '../../../lib/Questao1';

const Exercicio = () => {
  const [code, setCode] = useState('');
  const [correctionResult, setCorrectionResult] = useState({ output: '', message: '' });

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleCorrection = () => {
    const result = Questao1(code);
    setCorrectionResult(result);
  };

  return (
    <div style={{ display: 'flex', gap: '20px', flexDirection: 'row' }}>
      <div style={{ flex: 1 }}>
        <h1>Exercício 1</h1>
        <p>Agora que você capturou o seu primeiro pokémon...</p>
        <CodeEditor value={code} onChange={handleCodeChange} />
        <button onClick={handleCorrection}>Corrigir Código</button>
        <p>{correctionResult.output}</p>
        <p>{correctionResult.message}</p>
      </div>
    </div>
  );
};

export default Exercicio;
