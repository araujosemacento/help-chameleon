"use client";

import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import { useRouter } from "next/navigation";

export const Pop = Popover.Root;
export const PopTrigger = Popover.Trigger;

export const PopContent = (props) => {
  const router = useRouter();

  return (
    <Popover.Portal>
      {props.state === "habilitado" ? (
        <Popover.Content
          sideOffset={20}
          className="flex flex-col gap-4 max-w-[33vw] rounded-lg bg-accent-200 p-8 shadow-[0_0_10px_2px_rgba(0,0,0,0.55)] data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut"
        >
          <h2 className="text-accent-700 text-xl font-bold">{props.titulo}</h2>
          <p className="text-accent-700 text-sm">{props.descricao}</p>
          <button
            className={`flex p-3 w-1/2 mt-3 h-fit text-center font-bold active:translate-y-[5px] active:shadow-none  text-white justify-center items-center gap-2 outline-none rounded-2xl self-center transition-all bg-accent-400 shadow-[0_5px_0_0_color(var(--accent-600))] hover:bg-accent-500`}
            onClick={() => {
              router.push(props.caminho);
            }}
          >
            Iniciar
          </button>
          <Popover.Arrow className="fill-accent-200 scale-[250%]" />
        </Popover.Content>
      ) : props.state === "desabilitado" ? (
        <Popover.Content
          sideOffset={20}
          className="flex flex-col gap-4 max-w-[33vw] rounded-lg bg-gray-200 p-8 shadow-[0_0_10px_2px_rgba(0,0,0,0.55)] data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut"
        >
          <h2 className="text-gray-700 text-xl font-bold">{props.titulo}</h2>
          <p className="text-gray-700 text-sm">{props.descricao}</p>
          <button
            className={`flex p-3 w-1/2 mt-3 h-fit text-center font-bold active:translate-y-[5px] active:shadow-none text-white justify-center items-center gap-2 outline-none rounded-2xl self-center transition-all bg-gray-400 shadow-[0_5px_0_0_color(var(--gray-600))]`}
            onClick={() => {
              router.push(props.caminho);
            }}
          >
            <span className="w-fit place-self-center material-symbols-outlined">lock</span>
          </button>
          <Popover.Arrow className="fill-gray-200 scale-[250%]" />
        </Popover.Content>
      ) : (
        <Popover.Content
          sideOffset={20}
          className="flex flex-col gap-4 max-w-[33vw] rounded-lg bg-success-200 p-8 shadow-[0_0_10px_2px_rgba(0,0,0,0.55)] data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut"
        >
          <h2 className="text-success-700 text-xl font-bold">{props.titulo}</h2>
          <p className="text-success-700 text-sm">{props.descricao}</p>
          <button
            className={`flex p-3 w-1/2 mt-3 h-fit text-center font-bold active:translate-y-[5px] active:shadow-none  text-white justify-center items-center gap-2 outline-none rounded-2xl self-center transition-all bg-success-400 shadow-[0_5px_0_0_color(var(--success-600))] hover:bg-success-500`}
            onClick={() => {
              router.push(props.caminho);
            }}
          >
            Iniciar
          </button>
          <Popover.Arrow className="fill-success-200 scale-[250%]" />
        </Popover.Content>
      )}
    </Popover.Portal>
  );
};
