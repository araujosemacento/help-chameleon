/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";

export const Sair = DialogPrimitive.Root;
export const SairTrigger = DialogPrimitive.Trigger;

export const SairContent = (props) => {
  const router = useRouter();

  return (
    <DialogPrimitive.Portal style={{ opacity: 0 }}>
      <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-accent-100/10 backdrop-blur-sm pointer-events-none" />
      <DialogPrimitive.Content
        /*onEscapeKeyDown={(e) => e.preventDefault()}*/
        onPointerDownOutside={(e) => e.preventDefault()}
        className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#E7D6F5] p-6 shadow-xl text-black place-content-center"
      >
        <div className="flex flex-col text-xl font-bold text-center p-8 w-fit">
          <img className="w-1/3 self-center" src="/bota.png" alt="image" />
          Deseja mesmo sair?
          <p className="text-base font-normal m-4 self-center">
            Todo seu progresso nesse exercício será perdido.
          </p>
          <DialogPrimitive.Close className="flex flex-row gap-8">
            <button
              onClick={() => {
                localStorage.setItem("paginaPrincipal", props.caminho);
                if (props.exercicio) {
                  router.push("/");
                } else {
                  window.location.reload(false);
                }
              }}
              className={`flex p-4 w-1/2 h-fit text-center font-bold active:translate-y-[5px] active:shadow-none  text-white justify-center items-center gap-2 outline-none rounded-2xl self-center transition-all bg-accent-600 shadow-[0_5px_0_0_color(var(--accent-500))] hover:bg-accent-700`}
            >
              Sair
            </button>
            <button
              className={`flex p-4 w-1/2 h-fit text-center font-bold active:translate-y-[5px] active:shadow-none  text-black justify-center items-center gap-2 outline-none rounded-2xl self-center transition-all bg-gray-200 shadow-[0_5px_0_0_color(var(--gray-500))] hover:bg-gray-300`}
            >
              Continuar
            </button>
          </DialogPrimitive.Close>
        </div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};
