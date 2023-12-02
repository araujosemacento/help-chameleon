/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { NivelDialog, NivelTrigger, NivelAnswer } from "@/components/RespostaNivel";

export default function Nivelamento() {
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const [resposta, setResposta] = React.useState(null);

  const handleAnswerSelected = (answer) => {
    setSelectedAnswer(answer);
    if (answer === 1) {
      setResposta(true);
    } else {
      setResposta(false);
    }
  };

  const handleResposta = () => {
    if (selectedAnswer === 1) {
      localStorage.setItem("testeDeNivelResposta1", "acerto");
    } else {
      localStorage.setItem("testeDeNivelResposta1", "erro");
    }
  }

  return (
    <div className="flex flex-col h-full w-full overflow-auto">
      <div className="flex flex-row w-full p-10 pb-4 items-center gap-2">
        <svg
          className="fill-accent-600 w-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
        >
          <path
            className="cls-1"
            d="M289.64,280.43q14.5-11.25,29.95-21.27a247.78,247.78,0,0,1,74.91-32.91,243.27,243.27,0,0,1,79.67-5.86,293.89,293.89,0,0,1,42.41,7c24.57,5.84,48.73,13,72.66,20.86,6.82,2.25,7.3.06,7-5.65a254,254,0,0,1,.12-36.7c3.06-34.25,21.17-48.19,55.12-43,30.84,4.76,59,16.75,85.92,31.8,31,17.31,58.89,38.55,81.91,65.81,30.08,35.6,45.74,77.25,51.45,123,.65,5.2,1.08,10.43,1.62,15.64-.27,16.67-1,33.29-4.91,49.61-7.54,31.37-26,47-58.2,50.87-16.89,2-33.55.21-50.33-.19-14.61-.36-29.25-1.14-43.78-1.92-18-1-36.13-1.77-54.15-2.38-26.12-.89-52.16-4.07-78.75-2.89.31,3.18,3.09,4.29,5,5.86a252.11,252.11,0,0,1,19.59,18.53c14.08,14.6,15.44,37.88,5.66,55.18-2.89,5.11-7.62.7-11.5-1.4-5.1-2.76-10.06-5.77-15-8.86-9.55-6-18.83-12.49-28.47-18.37-8.51-5.19-17.13-10.2-26-14.74s-18.2-7.37-26.91-11.73c-43.79-15.58-86.44-12.83-127.23,10-15.94,8.93-29.33,23.73-39.55,38.68a12.06,12.06,0,0,1-3.6,3.91c-3.26,1.87-4.84-.63-6.45-3-2-3-4.1-5.91-5.83-9.07a69.43,69.43,0,0,1-7.05-18c-2.52-11.2,1.48-20.64,8.62-29,9.47-11.12,20.8-20.13,32.48-28.76,3.36-2.48,6.66-5.06,11.05-8.41-5.47-.78-8.89,1.38-12.44,2.44-24.4,7.28-47.64,16.82-65.83,35.56-23.18,23.9-34.36,53.6-39.78,85.61-6.55,38.77-2.57,76.16,21.51,108.66C301.82,747.68,342.9,773,397,770.62c31.51-1.4,59.86-12.81,80.06-38.23,17.93-22.56,19.48-48.11,7.81-74.11-6.73-15-19.87-21.15-35.71-21.91-18.06-.86-18.13-.75-20.83,16.75-1.72,11.18-4.55,21.82-10.65,31.65-10.6,17.1-44.11,26.54-64.74,9.31-10-8.32-12.17-22.15-11.11-35.3,3.94-48.45,48.06-88.86,96.5-88,25.52.46,47.41,11.22,66.89,26.92,31.4,25.31,49.26,57.5,47.15,98.72-1.75,34.31-17.25,62.45-41.75,85.74C481.36,810,446.94,828.33,407.07,836c-34.53,6.65-67.43-.08-99.94-11.52-16.82-5.93-33.39-12.7-48.49-21.81-16.23-9.8-32.38-19.85-46.77-32.78-27.4-24.65-48.61-53.32-62.4-87.36C126.53,626,124,567.66,136.42,508.42c9.83-46.82,31.16-90.53,58.8-129.33a476.88,476.88,0,0,1,56.09-65.31A458.14,458.14,0,0,1,289.64,280.43Zm494,71.36c.08-49.48-53-80.73-95.76-59.62-35.55,17.54-46.72,59.45-23.87,89.53a68.4,68.4,0,0,0,87.33,19C772,389.54,782.45,371.86,783.66,351.79Z"
          />
          <path
            className="cls-1"
            d="M706.89,361.66a25.4,25.4,0,1,1,.76-50.8c13.51.23,25.35,12.53,24.87,25.85C732,350.75,720.62,361.85,706.89,361.66Z"
          />
        </svg>
        <h2 className="text-xl text-accent-600">Pergunta 1</h2>
      </div>
      <main className="flex flex-col md:flex-row-reverse w-full h-full p-4">
        <section className="flex flex-col w-full h-1/4 md:w-1/4 md:h-full place-content-center p-4 md: items-center md:mr-24">
          <img
            className="h-full md:h-fit md:w-full mb-24"
            src="/mestre_dos_magos.png"
            alt="Mestre dos Camaleagos"
          />
          <NivelDialog>
            <NivelTrigger
              onClick={handleResposta}
              className={`flex p-2 px-4 h-fit text-center font-bold text-sm active:translate-y-[4px] active:shadow-none  text-white justify-center items-center gap-2 self-end translate-x-10 outline-none rounded-2xl transition-all ${
                selectedAnswer !== null
                  ? "pointer-events-auto bg-accent-500 shadow-[0_4px_0_0_color(var(--accent-700))] hover:bg-accent-400"
                  : "pointer-events-none bg-accent-200 shadow-[0_4px_0_0_color(var(--accent-300))] hover:bg-accent-400"
              }`}
            >
              <p className="text-lg">Verificar</p>
            </NivelTrigger>
            <NivelAnswer resposta={resposta} caminho={"/nivelamento/2"} />
          </NivelDialog>
        </section>
        <section className="flex flex-col w-full h-3/4 md:w-3/4 md:h-full p-10 pt-2 justify-evenly">
          <p>
            Qual termo é comumente utilizado em Programação Orientada a Objetos
            (POO) para se referir às características ou dados associados a um
            objeto?
          </p>
          <div className="flex flex-col w-full">
            {Array.from({ length: 5 }).map((button, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelected(index)}
                className={`flex flex-col h-fit w-fit md:flex-row items-center justify-center md:justify-normal aspect-square m-1 rounded-xl md:aspect-auto md:p-2 md:text-lg md:px-6 md:mx-6 hover:bg-accent-200 border-2 ${
                  selectedAnswer === index
                    ? "bg-accent-200 border-accent-500 text-accent-500 font-bold"
                    : "border-transparent text-text-900"
                }`}
              >
                {`${
                  index === 0
                    ? "a) Métodos"
                    : index === 1
                    ? "b) Propriedades"
                    : index === 2
                    ? "c) Herança"
                    : index === 3
                    ? "d) Polimorfismo"
                    : "e) Não sei"
                }`}
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
