"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import {
  MostrarNivel,
  MostrarTrigger,
  MostrarContent,
} from "@/components/MostrarNivel";

export const NivelDialog = DialogPrimitive.Root;

export const NivelTrigger = DialogPrimitive.Trigger;

export const NivelAnswer = (props) => {
  const router = useRouter();

  return (
    <DialogPrimitive.Portal style={{ opacity: 0 }}>
      <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-accent-100/10 backdrop-blur-sm pointer-events-none" />
      <DialogPrimitive.Content
        /*onEscapeKeyDown={(e) => e.preventDefault()}*/
        onPointerDownOutside={(e) => e.preventDefault()}
        className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#E7D6F5] p-6 shadow-xl text-black place-content-center"
      >
        {props.caminho !== "/" ? (
          props.resposta ? (
            <div className="flex flex-col text-xl font-bold text-center p-8 w-fit">
              Parabéns, você acertou!
              <p className="text-base font-normal m-4 w-8/12 self-center">
                Muito bem, agora siga em frente e faça as outras questões.
              </p>
              <button
                onClick={() => {
                  router.push(props.caminho);
                }}
                className={`flex p-4 w-1/2 h-fit text-center font-bold active:translate-y-[5px] active:shadow-none  text-white justify-center items-center gap-2 outline-none rounded-2xl self-center transition-all bg-success-600 shadow-[0_5px_0_0_color(var(--success-500))] hover:bg-success-700`}
              >
                Continuar
              </button>
            </div>
          ) : (
            <div className="flex flex-col text-xl font-bold text-center p-8 w-fit">
              Não foi dessa vez!
              <p className="text-base font-normal m-4 w-8/12 self-center">
                Você errou, mas o teste continua. Prossiga para a próxima
                questão.
              </p>
              <button
                onClick={() => {
                  router.push(props.caminho);
                }}
                className={`flex p-4 w-1/2 h-fit text-center font-bold active:translate-y-[5px] active:shadow-none  text-white justify-center items-center gap-2 outline-none rounded-2xl self-center transition-all bg-fail-600 shadow-[0_5px_0_0_color(var(--fail-500))] hover:bg-fail-700`}
              >
                Continuar
              </button>
            </div>
          )
        ) : props.resposta ? (
          <div className="flex flex-col text-xl font-bold text-center p-8 w-fit">
            Parabéns, você acertou!
            <p className="text-base font-normal m-4 w-8/12 self-center">
              Encerrou o teste com chave de ouro.
            </p>
            <button
              onClick={() => {
                localStorage.setItem("testeDeNivel", "recente");
                localStorage.setItem("primeiroTesteDeNivel", "false");
                if (
                  localStorage.getItem("testeDeNivelResposta1") === "acerto"
                ) {
                  localStorage.setItem("nivelUsuario", "avançado");
                  console.log(localStorage.getItem("nivelUsuario"));
                } else {
                  localStorage.setItem("nivelUsuario", "intermediário");
                  console.log(localStorage.getItem("nivelUsuario"));
                }
                localStorage.setItem("paginaPrincipal", "nivel");
                router.push("/");
              }}
              className={`flex p-4 w-1/2 h-fit text-center font-bold active:translate-y-[5px] active:shadow-none  text-white justify-center items-center gap-2 outline-none rounded-2xl self-center transition-all bg-success-600 shadow-[0_5px_0_0_color(var(--success-500))] hover:bg-success-700`}
            >
              Finalizar
            </button>
          </div>
        ) : (
          <div className="flex flex-col text-xl font-bold text-center p-8 w-fit">
            Não foi dessa vez!
            <p className="text-base font-normal m-4 w-8/12 self-center">
              Você errou, mas a gente tá aqui pra te ajudar a aprendr mais.
            </p>
            <button
              onClick={() => {
                localStorage.setItem("testeDeNivel", "recente");
                localStorage.setItem("primeiroTesteDeNivel", "false");
                if (
                  localStorage.getItem("testeDeNivelResposta1") === "acerto"
                ) {
                  localStorage.setItem("nivelUsuario", "intermediário");
                  console.log(localStorage.getItem("nivelUsuario"));
                } else {
                  localStorage.setItem("nivelUsuario", "iniciante");
                  console.log(localStorage.getItem("nivelUsuario"));
                }
                localStorage.setItem("paginaPrincipal", "nivel");
                router.push("/");
              }}
              className={`flex p-4 w-1/2 h-fit text-center font-bold active:translate-y-[5px] active:shadow-none self-center text-white justify-center items-center gap-2 outline-none rounded-2xl transition-all bg-fail-600 shadow-[0_5px_0_0_color(var(--fail-500))] hover:bg-fail-700`}
            >
              Finalizar
            </button>
          </div>
        )}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};
