"use client"

import { React, useState } from 'react';
import { useRouter } from 'next/navigation';
import CodeEditor from '@/components/CodeEditor';
import CodeResult from '@/components/CodeResult';
import Desafio2 from '@/lib/Desafio1';
import { ExercicioDialog, ExercicioTrigger, ExercicioAnswer } from "@/components/RespostaExercicio";

const Desafio = () => {
  const router = useRouter();
  const [code, setCode] = useState('');
  const [correctionResult, setCorrectionResult] = useState({ output: '', message: '' });

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleCorrection = () => {
    const result = Desafio2(code);
    setCorrectionResult(result);
  };

  const goToHomePage = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col h-full w-full overflow-auto">
      <div className="flex flex-row w-full p-10 pb-2 items-center gap-2">
        <img src="/magomeleon_2.png" className="w-10" alt="magomeleon_2" />
        <h2 className="text-xl text-accent-600">Desafio 1</h2>
      </div>
      <main className="flex flex-col md:flex-row-reverse w-full h-full p-4">
        <section className="flex flex-col w-full h-1/4 md:w-2/4 md:h-full place-content-center p-4 md: items-center md:mr-24">
          <img
            className="h-full md:h-fit md:w-1/2 mb-24"
            src="/pikachu_bulbasaur.png"
            alt="Pokebola"
          />
        </section>
        <section className="flex flex-col w-full h-3/4 md:w-3/4 md:h-full p-10 pt-2 justify-evenly text-justify">

          <p className="mb-4">Em JavaScript, crie um objeto representando o Pokémon Pikachu. O Pikachu deve ter as seguintes </p>
          propriedades:

          <p>Nome: Pikachu </p>
          <p>Tipo: Elétrico </p>
          <p>Sexo: Feminino </p>
          <p>Nível: 3 </p>
          <p>HP: 20 </p>
          <p>SP: 10 </p>
          <p className="mb-4">Status: Vivo </p>

          <p>Após criar o objeto Pikachu, utilize console.log() para exibir a propriedade “Nome”. </p>

        <div className="flex flex-col w-full">
          <CodeEditor value={code} onChange={handleCodeChange} />
          <ExercicioDialog>
            <ExercicioTrigger
              onClick={handleCorrection}
              className={`flex flex-col h-fit w-fit md:flex-row items-center justify-center md:justify-normal aspect-square m-1 rounded-xl md:aspect-auto md:p-2 md:text-lg md:px-6 md:mx-6 hover:bg-accent-200 border-2`}
            >
              <p className="text-lg">Verificar</p>
              <ExercicioAnswer errors={correctionResult.output} caminho={"/desafios/2"} />
            </ExercicioTrigger>
          </ExercicioDialog>
          {/* <button
              className="flex p-2 px-4 h-fit text-center font-bold text-sm bg-accent-500 rounded-2xl transition shadow-[0_4px_0_0_color(var(--accent-700))] hover:bg-accent-400 active:translate-y-[4px] active:shadow-none  text-white justify-center items-center gap-2 self-start translate-x-10"
              onClick={handleCorrection}
            >
              <p className="text-lg">Verificar</p>
            </button>
            <CodeResult output={correctionResult.output} message={correctionResult.message} /> */}
        </div>
      </section>
    </main>
    </div >

  );
}

export default Desafio;
