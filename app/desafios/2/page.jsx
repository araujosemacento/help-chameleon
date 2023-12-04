"use client"

import { React, useState } from 'react';
import { useRouter } from 'next/navigation';
import CodeEditor from '@/components/CodeEditor';
import CodeResult from '@/components/CodeResult';
import Desafio1 from '@/lib/Desafio2';
import { ExercicioDialog, ExercicioTrigger, ExercicioAnswer } from "@/components/RespostaExercicio";

const Desafio = () => {
  const router = useRouter();
  const [code, setCode] = useState('var Bulbasaur = { Nome: "Bulbasaur", \n Tipo: "Planta", \n Nível: 30, \n HP: 20, \n} \n \n');
  const [correctionResult, setCorrectionResult] = useState({ output: '', message: '' });

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleCorrection = () => {
    const result = Desafio1(code);
    setCorrectionResult(result);
  };

  const goToHomePage = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col h-full w-full overflow-auto">
      <div className="flex flex-row w-full p-10 pb-2 items-center gap-2">
        <img src="/magomeleon_2.png" className="w-10" alt="magomeleon_2" />
        <h2 className="text-xl text-accent-600">Desafio 2</h2>
      </div>
      <main className="flex flex-col md:flex-row-reverse w-full h-full p-4">
        <section className="flex flex-col w-full h-1/4 md:w-2/4 md:h-full place-content-center p-4 md: items-center md:mr-24">
          <img
            className="h-full md:h-fit md:w-1/2 mb-24"
            src="/pokebola.png"
            alt="Pokebola"
          />
        </section>
        <section className="flex flex-col w-full h-3/4 md:w-3/4 md:h-full p-10 pt-2 justify-evenly text-justify">
          <p className="mb-4"> Em JavaScript, crie um objeto Pikachu, ele deve ter como propriedades: </p>

          <p className="mb-4"> Nome: Pikachu | Tipo: Elétrico | Nível: 3 | HP: 20 </p>

          <p className="mb-4"> O Pikachu deve ter quatro métodos que representam os ataques e recebem como parâmetro o oponente, sendo eles: </p>

          <p>choqueDoTrovão (que reduz o HP do oponente em 10)</p>

          <p>investidaTrovao (que reduz o HP do oponente em 5)</p>

          <p>trovao (que reduz o HP do oponente em 10)</p>

          <p className="mb-4">caudaDeFerro (que reduz o HP do oponente em 5).</p>

          <p className="mb-4">Os métodos devem imprimir “O Pikachu usou o [ATAQUE] em [OPONENTE] que ficou com [HP]”. </p>

          <p className="mb-4">Em seguida, ataque o Bulbasaur e derrote-o.</p>

          <div className="flex flex-col w-full">
            <CodeEditor value={code} onChange={handleCodeChange} />
            <ExercicioDialog>
              <ExercicioTrigger
                onClick={handleCorrection}
                className={`flex p-2 px-4 h-fit text-center font-bold text-sm active:translate-y-[4px] active:shadow-none  text-white justify-center items-center gap-2 self-end translate-x-10 outline-none rounded-2xl transition-all`}
              >
                <p className="text-lg">Verificar</p>
                <ExercicioAnswer errors={correctionResult.output} caminho={"/"} mesmoCaminho = {"/exercicios/2"} />
              </ExercicioTrigger>
            </ExercicioDialog>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Desafio;
