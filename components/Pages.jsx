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

export function Entrar({ onSelect }) {
  const { user, signInWithGoogle, signInWithGithub } = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Erro ao tentar logar com o Google:", error);
    }
  };

  const handleGithubSignIn = async () => {
    try {
      await signInWithGithub();
    } catch (error) {
      console.error("Erro ao tentar logar com o GitHub:", error);
    }
  }

  const reroute = (index) => {
    onSelect(index);
  };

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
      <section className="flex flex-col gap-4 w-1/2 p-2">
        <Button
          onClick={() => reroute("register")}
          color="deep-purple"
          className="m-2 place-self-end border-4 border-transparent border-b-accent-600 border-x-2 border-x-accent-600 border-t-[1px] border-t-accent-600"
        >
          Cadastro
        </Button>
        <div className="flex place-content-center w-full h-full">
          <main
            className="flex flex-col gap-4 p-8 w-3/4 self-center justify-center bg-background-200 rounded-3xl"
            style={{ boxShadow: "rgba(0, 0, 0, 0.33) 0px 3px 9px" }}
          >
            <h1 className="text-center text-xl">
              Entrar com uma conta já existente:
            </h1>
            <div className="flex flex-row w-full gap-6 justify-center">
              <Button
                onClick={handleGoogleSignIn}
                color="deep-purple"
                className="flex flex-row gap-2 items-center"
              >
                <img
                  src="https://api.iconify.design/akar-icons:google-fill.svg?color=%23ffffff"
                  alt="google logo"
                />
                Google
              </Button>
              <Button
                onClick={handleGithubSignIn}
                color="deep-purple"
                className="flex flex-row gap-2 items-center"
              >
                <img
                  src="https://api.iconify.design/akar-icons:github-fill.svg?color=%23ffffff"
                  alt="github logo"
                />
                Github
              </Button>
            </div>
            <div className="flex flex-row items-center gap-4 m-2">
              <hr className="w-1/2 border-text-500" />
              <p className="text-text-500 uppercase font-sono">ou</p>
              <hr className="w-1/2 border-text-500" />
            </div>
            <div className="flex flex-col gap-4 text-justify">
              <Input
                color="deep-purple"
                type="number"
                label="Nº de Matrícula"
                className=""
              ></Input>
              <Input
                color="deep-purple"
                type="password"
                label="Senha"
                className=""
              ></Input>
            </div>
            <a
              href="#"
              className="text-xs self-end text-text-600 hover:text-text-800"
            >
              Esqueceu a senha?
            </a>
            <div className="flex flex-col justify-center">
              <Button color="deep-purple" className="m-2">
                Entrar
              </Button>
              <a
                href="#"
                className="text-sm self-center pt-2 font-semibold border border-transparent hover:border-b-text-900"
              >
                Termos de Uso
              </a>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
export function Cadastrar({ onSelect }) {
  const { user } = useAuth();

  const reroute = (index) => {
    onSelect(index);
  };

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
      <section className="flex flex-col gap-4 w-1/2 p-2">
        <Button
          onClick={() => reroute("login")}
          color="deep-purple"
          className="m-2 place-self-end border-4 border-transparent border-b-accent-600 border-x-2 border-x-accent-600 border-t-[1px] border-t-accent-600"
        >
          Login
        </Button>
        <div className="flex place-content-center w-full h-full">
          <main
            className="flex flex-col gap-4 p-8 w-3/4 self-center justify-center bg-background-200 rounded-3xl"
            style={{ boxShadow: "rgba(0, 0, 0, 0.33) 0px 3px 9px" }}
          >
            <div className="flex flex-row items-center justify-center gap-2">
              <h1 className="text-center text-xl">Crie uma conta:</h1>
              <Tooltip content={<div className="text-center">Caso queira criar uma nova conta associada a sua conta Google ou Github, utilize as opções disponíveis na página de login.</div>}>
                <InformationCircleIcon className="w-5 animate-pulse hover:animate-none" />
              </Tooltip>
            </div>
            <div className="flex flex-col gap-4 text-justify">
              <Input
                color="deep-purple"
                type="text"
                label="Nome de Usuário"
                className=""
              ></Input>
              <Input
                color="deep-purple"
                type="email"
                label="E-mail"
                className=""
              ></Input>
              <Input
                color="deep-purple"
                type="number"
                label="Nº de Matrícula"
                className=""
              ></Input>
              <Input
                color="deep-purple"
                type="password"
                label="Senha"
                className=""
              ></Input>
            </div>
            <div className="flex flex-row items-center">
              <Checkbox required={true} color="deep-purple" />
              <span className="text-text-700">
                Li e aceito os
                <a
                  href="#"
                  className=" ml-1 text-text-900 hover:text-accent-700"
                >
                  termos e condições de uso
                </a>
              </span>
            </div>
            <div className="flex flex-col justify-center">
              <Button color="deep-purple" className="m-2">
                Criar conta
              </Button>
            </div>
          </main>
        </div>
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
  const { user } = useAuth();

  return <div className="m-auto text-text-900">Ranking</div>;
}

export function Perfil() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col h-full w-full overflow-auto">
      <section className="flex flex-row w-full items-center justify-between p-8 px-16">
        <div className="flex flex-col gap-3 w-[40vw]">
          <h2 className="text-accent-600">Nome</h2>
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
          src="https://i.pravatar.cc/300"
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
