"use client"

import { useState } from 'react';
import CodeEditor from './CodeEditor';
import CodeResult from './CodeResult';
import correctP5Code from '../lib/p5-correction';

const Exercise = () => {
  const [code, setCode] = useState('');
  const [correctionResult, setCorrectionResult] = useState({ output: '', message: '' });

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleCorrection = () => {
    const result = correctP5Code(code);
    setCorrectionResult(result);
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div style={{ flex: 1 }}>
        <h1>Exercício 1</h1>
        <p>Agora que você capturou o seu primeiro pokémon...</p>
        <CodeEditor value={code} onChange={handleCodeChange} />
        <button onClick={handleCorrection}>Corrigir Código</button>
      </div>

      <div style={{ flex: 1 }}>
        <CodeResult output={correctionResult.output} message={correctionResult.message} />
      </div>
    </div>
  );
};

export default Exercise;
