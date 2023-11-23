/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useAuth } from "@/context/AuthContext";
import {
  Avatar,
  Button,
  Checkbox,
  Input,
  Tooltip,
} from "@material-tailwind/react";
import {
  LockClosedIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

export function Inicio({ onSelect }) {
  const { user } = useAuth();

  const reroute = (index) => {
    onSelect(index);
  };

  React.useEffect(() => {
    if (user) {
      reroute("profile");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="flex flex-row h-full w-full text-text-900">
      <section className="flex flex-col gap-4 w-1/2 p-2">
        <div className="flex flex-row gap-4 w-full p-2">
          <img
            src="/hameleon.svg"
            alt="logo"
            className="w-[3vw] invert dark:invert-0"
          />
          <h3 className="place-self-center text-[1.5vw] text-text-900">
            Programação II
          </h3>
        </div>
      </section>
      <section className="flex flex-col gap-4 w-1/2 p-2 place-content-center">
        <main
          className="flex flex-col gap-4 p-8 w-3/4 self-center bg-background-200 rounded-3xl"
          style={{ boxShadow: "rgba(0, 0, 0, 0.33) 0px 3px 9px" }}
        >
          <h1 className="text-center text-2xl">
            Bem-vindo(a) à cadeira de Programação II
          </h1>
          <div className="flex flex-col gap-4 text-justify">
            <p>
              He finally gets there. He runs up the steps into the church. The
              wedding is on. And he says, &quot;Watermelon? I thought you said
              Guatemalan. Why would I marry a watermelon?&quot; Is that a bee
              joke?
            </p>
            <p>
              We try not to sting. It&apos;s usually fatal for us. So you have
              to watch your temper. Very carefully. You kick a wall, take a
              walk, write an angry letter and throw it out. Work through it like
              any emotion.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <Button
              onClick={() => reroute("register")}
              color="deep-purple"
              variant="gradient"
              className="m-2"
            >
              Realizar Cadastro
            </Button>
            <Button
              onClick={() => reroute("login")}
              color="deep-purple"
              className="m-2 bg-opacity-70"
            >
              Fazer Login
            </Button>
          </div>
        </main>
      </section>
    </div>
  );
}

export function Exercicios() {
  const { user } = useAuth();

  return <div className="m-auto text-text-900">Exercícios</div>;
}

export function TesteDeNivel() {
  const { user } = useAuth();

  return <div className="m-auto text-text-900">Teste de Nível</div>;
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

  React.useEffect(() => {
    if (user) {
      console.log(user);
    } else {
      reroute("home");
    }
  });

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
