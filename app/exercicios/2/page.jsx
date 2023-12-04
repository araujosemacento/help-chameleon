"use client"

import { React, useState } from 'react';
import { useRouter } from 'next/navigation';
import CodeEditor from '@/components/CodeEditor';
import Questao2 from '@/lib/Questao2';
import { Sair, SairTrigger, SairContent } from '@/components/Sair';
import { ExercicioDialog, ExercicioTrigger, ExercicioAnswer } from "@/components/RespostaExercicio";
import CodeResult from '@/components/CodeResult';

const Exercicio = () => {
  const router = useRouter();
  const [code, setCode] = useState('function Pokebola(tipo, cor) { \n this.tipo = tipo; \n this.cor = cor; \n } \n \nvar pokebola = new Pokebola("pokeball", "vermelha"); \n \n');
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
        <img src="/magomeleon_2.png" className="w-10"></img>
        <h2 className="text-xl text-accent-600">Exercício 2</h2>
        <Sair>
          <SairTrigger>
            <button className="flex w-fit-h-fit">
              <span className="material-symbols-outlined aspect-square text-text-900 hover:text-accent-500 rounded-lg p-1 active:bg-accent-700/25 text-[36px]">
                close
              </span>
            </button>
          </SairTrigger>
          <SairContent caminho={"exercicios"} exercicio={true} />
        </Sair>
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
            Ei, um pokémon apareceu, é um Pikachu de nível 2! Pikachus são
            pokémons relativamente comuns de se encontrar. Ele está
            enfraquecido, utilize a pokébola que você criou para capturá-lo.
          </p>
          <p className="font-bold">
            Em JavaScript, adicione o método capturar que imprimirá “Você
            capturou o Pikachu”, ao objeto Pokébola e execute-o.
          </p>
          <div className="flex flex-col w-full">
            <CodeEditor value={code} onChange={handleCodeChange} />
            <ExercicioDialog>
              <ExercicioTrigger
                onClick={handleCorrection}
                className={`flex p-2 px-4 h-fit text-center font-bold text-sm active:translate-y-[4px] active:shadow-none  text-white justify-center items-center gap-2 self-end translate-x-10 outline-none rounded-2xl transition-all`}
              >
                <p className="text-lg">Verificar</p>
                <ExercicioAnswer
                  errors={correctionResult.output}
                  caminho={"/exercicios/3"}
                  mesmoCaminho={"/exercicios/2"}
                />
              </ExercicioTrigger>
            </ExercicioDialog>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Exercicio;