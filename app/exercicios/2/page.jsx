"use client"

import { React, useState } from 'react';
import { useRouter } from 'next/navigation';
import CodeEditor from '@/components/CodeEditor';
import Questao2 from '@/lib/Questao2';
import CodeResult from '@/components/CodeResult';

const Exercicio = () => {
  const router = useRouter();
  const [code, setCode] = useState('');
  const [correctionResult, setCorrectionResult] = useState({ output: '', message: '' });

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleCorrection = () => {
    const result = Questao2(code);
    setCorrectionResult(result);
  };

  const goToHomePage = () => {
    router.push('/');
  };

  return (

    <div className="flex flex-col h-full w-full overflow-auto">
      <div className="flex flex-row w-full p-10 pb-2 items-center gap-2">
        <img src="/magomeleon.png" className="w-10"></img>
        <h2 className="text-xl text-accent-600">Exercício 2</h2>
      </div>
      <main className="flex flex-col md:flex-row-reverse w-full h-full p-4">
        <section className="flex flex-col w-full h-1/4 md:w-2/4 md:h-full place-content-center p-4 md: items-center md:mr-24">
          <img
            className="h-full md:h-fit md:w-1/2 mb-24"
            src="/pikachu.png"
            alt="Pikachu"
          />
        </section>
        <section className="flex flex-col w-full h-3/4 md:w-3/4 md:h-full p-10 pt-2 justify-evenly text-justify">
          <p>
          Ei, um pokémon apareceu, é um Pikachu de nível 2! Pikachus são pokémons relativamente comuns de se encontrar. Ele está enfraquecido, utilize a pokébola que você criou para capturá-lo.
          </p>
          <p className="font-bold">
          Em JavaScript, adicione o método capturar que imprimirá “Você capturou o Pikachu”, ao objeto Pokébola e execute-o.
          </p>
          <div className="flex flex-col w-full">
            <CodeEditor value={code} onChange={handleCodeChange} />
            <button
              className="flex p-2 px-4 h-fit text-center font-bold text-sm bg-accent-500 rounded-2xl transition shadow-[0_4px_0_0_color(var(--accent-700))] hover:bg-accent-400 active:translate-y-[4px] active:shadow-none  text-white justify-center items-center gap-2 self-start translate-x-10"
              onClick={handleCorrection}
            >
              <p className="text-lg">Verificar</p>
            </button>
            <CodeResult output={correctionResult.output} message={correctionResult.message} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Exercicio;