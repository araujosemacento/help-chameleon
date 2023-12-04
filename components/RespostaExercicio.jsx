"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";

export const ExercicioDialog = DialogPrimitive.Root;

export const ExercicioTrigger = DialogPrimitive.Trigger;

export const ExercicioAnswer = (props) => {
  const router = useRouter();

  return (
    <DialogPrimitive.Portal style={{ opacity: 0 }}>
      <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-accent-100/10 backdrop-blur-sm pointer-events-none" />
      <DialogPrimitive.Content
        /*onEscapeKeyDown={(e) => e.preventDefault()}*/
        onPointerDownOutside={(e) => e.preventDefault()}
        className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#E7D6F5] p-6 shadow-xl text-black place-content-center"
      >
        {props.errors == "" ? (
          <div className="flex flex-col text-xl font-bold text-center p-8 w-full items-center">
            Parabéns, você acertou!
            <img src="/chavoso.png" alt="chameleon chavoso" className="w-1/4" />
            <p className="text-base font-normal m-4 w-8/12 self-center">
              Você recebeu 50XP e pode avançar para a próxima questão! Parabéns
              pelo seu esforço!
            </p>
            <button
              onClick={() => {
                router.push(props.caminho);
              }}
              className={`flex p-4 w-full h-fit text-center font-bold active:translate-y-[5px] active:shadow-none  text-white justify-center items-center gap-2 outline-none rounded-2xl self-center transition-all bg-success-600 shadow-[0_5px_0_0_color(var(--success-500))] hover:bg-success-700`}
            >
              Continuar
            </button>
            <button
              onClick={() => {
                router.push("/");
              }}
              className={`flex p-4 w-full h-fit text-center font-bold active:translate-y-[5px] active:shadow-none text-black justify-center items-center gap-2 outline-none rounded-2xl self-center transition-all bg-gray-200 shadow-[0_5px_0_0_color(var(--gray-500))] hover:bg-gray-700`}
            >
              Sair do Exercício
            </button>
          </div>
        ) : (
          <div className="flex flex-col text-xl font-bold text-center p-8 w-full items-center">
            Não foi dessa vez!
            <img
              src="/nao_ironicamente.png"
              alt="não ironicamente"
              className="w-1/4"
            />
            <p className="text-base font-normal m-4 w-8/12 self-center">
              Você errou nesta parte do código. Talvez seja bom revisar um pouco
              essa parte do conteúdo.
            </p>
            <pre className="text-xs pb-4">{props.errors}</pre>
            <div className="flex flex-row gap-5 w-full">
              <button
                onClick={() => {
                  router.push(props.mesmoCaminho);
                }}
                className={`flex p-4 w-full h-fit text-center font-bold active:translate-y-[5px] active:shadow-none  text-white justify-center items-center gap-2 outline-none rounded-2xl self-center transition-all bg-fail-600 shadow-[0_5px_0_0_color(var(--fail-500))] hover:bg-fail-700`}
              >
                Tentar novamente
              </button>
              <button
                onClick={() => {
                  router.push("/");
                }}
                className={`flex p-4 w-full h-fit text-center font-bold active:translate-y-[5px] active:shadow-none text-black justify-center items-center gap-2 outline-none rounded-2xl self-center transition-all bg-gray-200 shadow-[0_5px_0_0_color(var(--gray-500))] hover:bg-gray-700`}
              >
                Sair do Exercício
              </button>
            </div>
          </div>
        )}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};
