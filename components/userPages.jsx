/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useAuth } from "@/context/AuthContext";
import {
  Avatar,
} from "@material-tailwind/react";
import {
  LockClosedIcon,
} from "@heroicons/react/24/solid";

export function Exercicios() {
  const { user } = useAuth();

  return <div className="m-auto text-text-900">Exercícios</div>;
}

export function Nivel() {
  const { user } = useAuth();

  return <div className="m-auto text-text-900">Nível</div>;
}

export function Desafios() {
  const { user } = useAuth();

  return <div className="m-auto text-text-900">Desafios</div>;
}

export function Ranking() {
  const { user, signOut } = useAuth();

  return <div className="m-auto text-text-900">Ranking</div>;
}

export function Perfil() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col h-full w-full overflow-auto">
      <section className="flex flex-row w-full items-center justify-between p-8 px-16">
        <div className="flex flex-col gap-3 w-[40vw]">
          <h2 className="text-accent-600">{`${
            user ? user.displayName : "Usuário"
          }`}</h2>
          <p className="text-text-900 font-semibold">Matrícula:</p>
          <p className="text-text-900">
            We try not to sting. It&apos;s usually fatal for us. So you have to
            watch your temper. Very carefully. You kick a wall, take a walk,
            write an angry letter and throw it out. Work through it like any
            emotion.
          </p>
        </div>
        <Avatar
          variant="circular"
          alt="Remy Sharp"
          src={`${user ? user.photoURL : "https://i.pravatar.cc/300"}`}
          className="w-[10vw] h-[10vw]"
        />
      </section>
      <hr className="my-2 border-accent-600 w-5/6 self-center" />
      <section className="grid grid-cols-2 gap-4 w-full p-8 px-16">
        <div className="flex flex-row gap-3 w-full h-16 bg-background-200 drop-shadow-md rounded-3xl items-center p-8">
          <LockClosedIcon className="w-6 h-6 text-text-900 mr-6" />
          <p className="text-text-900 font-bold">Conquista Bloqueada</p>
        </div>
        <div className="flex flex-row gap-3 w-full h-16 bg-background-200 drop-shadow-md rounded-3xl items-center p-8">
          <LockClosedIcon className="w-6 h-6 text-text-900 mr-6" />
          <p className="text-text-900 font-bold">Conquista Bloqueada</p>
        </div>
        <div className="flex flex-row gap-3 w-full h-16 bg-background-200 drop-shadow-md rounded-3xl items-center p-8">
          <LockClosedIcon className="w-6 h-6 text-text-900 mr-6" />
          <p className="text-text-900 font-bold">Conquista Bloqueada</p>
        </div>
        <div className="flex flex-row gap-3 w-full h-16 bg-background-200 drop-shadow-md rounded-3xl items-center p-8">
          <LockClosedIcon className="w-6 h-6 text-text-900 mr-6" />
          <p className="text-text-900 font-bold">Conquista Bloqueada</p>
        </div>
        <div className="flex flex-row gap-3 w-full h-16 bg-background-200 drop-shadow-md rounded-3xl items-center p-8">
          <LockClosedIcon className="w-6 h-6 text-text-900 mr-6" />
          <p className="text-text-900 font-bold">Conquista Bloqueada</p>
        </div>
        <div className="flex flex-row gap-3 w-full h-16 bg-background-200 drop-shadow-md rounded-3xl items-center p-8">
          <LockClosedIcon className="w-6 h-6 text-text-900 mr-6" />
          <p className="text-text-900 font-bold">Conquista Bloqueada</p>
        </div>
        <div className="flex flex-row gap-3 w-full h-16 bg-background-200 drop-shadow-md rounded-3xl items-center p-8">
          <LockClosedIcon className="w-6 h-6 text-text-900 mr-6" />
          <p className="text-text-900 font-bold">Conquista Bloqueada</p>
        </div>
        <div className="flex flex-row gap-3 w-full h-16 bg-background-200 drop-shadow-md rounded-3xl items-center p-8">
          <LockClosedIcon className="w-6 h-6 text-text-900 mr-6" />
          <p className="text-text-900 font-bold">Conquista Bloqueada</p>
        </div>
        <div className="flex flex-row gap-3 w-full h-16 bg-background-200 drop-shadow-md rounded-3xl items-center p-8">
          <LockClosedIcon className="w-6 h-6 text-text-900 mr-6" />
          <p className="text-text-900 font-bold">Conquista Bloqueada</p>
        </div>
        <div className="flex flex-row gap-3 w-full h-16 bg-background-200 drop-shadow-md rounded-3xl items-center p-8">
          <LockClosedIcon className="w-6 h-6 text-text-900 mr-6" />
          <p className="text-text-900 font-bold">Conquista Bloqueada</p>
        </div>
        <div className="flex flex-row gap-3 w-full h-16 bg-background-200 drop-shadow-md rounded-3xl items-center p-8">
          <LockClosedIcon className="w-6 h-6 text-text-900 mr-6" />
          <p className="text-text-900 font-bold">Conquista Bloqueada</p>
        </div>
        <div className="flex flex-row gap-3 w-full h-16 bg-background-200 drop-shadow-md rounded-3xl items-center p-8">
          <LockClosedIcon className="w-6 h-6 text-text-900 mr-6" />
          <p className="text-text-900 font-bold">Conquista Bloqueada</p>
        </div>
        <div className="flex flex-row gap-3 w-full h-16 bg-background-200 drop-shadow-md rounded-3xl items-center p-8">
          <LockClosedIcon className="w-6 h-6 text-text-900 mr-6" />
          <p className="text-text-900 font-bold">Conquista Bloqueada</p>
        </div>
        <div className="flex flex-row gap-3 w-full h-16 bg-background-200 drop-shadow-md rounded-3xl items-center p-8">
          <LockClosedIcon className="w-6 h-6 text-text-900 mr-6" />
          <p className="text-text-900 font-bold">Conquista Bloqueada</p>
        </div>
      </section>
    </div>
  );
}
