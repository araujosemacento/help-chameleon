/* eslint-disable @next/next/no-img-element */
"use client";
import { useMobile } from "@/context/MobileContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
//import SideBar from "@/components/SideBar";
import { Checkbox } from "@material-tailwind/react";
import React, { useState, useEffect, useRef } from "react";

export default function Cadastro() {
  const { isMobile, windowSize } = useMobile();
  const { user, createSignUpUser } = useAuth();
  const router = useRouter();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [submitCooldown, setSubmitCooldown] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setSubmitCooldown(true);
      await createSignUpUser(
        nameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
    } catch (error) {
      console.log("Erro ao criar conta: ", error);
    }
    setSubmitCooldown(false);
  };

  useEffect(() => {
    if (!user) {
      setLoading(false);
    } else {
      router.push("/");
    }
  }, [router, user]);

  return (
    <div className="flex w-full h-full text-text-900">
      {loading ? (
        <img className="m-auto" src="gear.svg" alt="loading" />
      ) : (
        <div className="flex flex-col overflow-auto w-full h-full text-text-900 px-8 py-4">
          <nav className="flex flex-row w-full md:justify-between justify-center">
            <div className="flex flex-row gap-4 items-center">
              <img
                src="hameleon.svg"
                alt="logo"
                className="w-10 invert dark:invert-0"
              />
              <h2 className="text-2xl">ProgQuest</h2>
            </div>
            {!isMobile && (
              <button
                onClick={() => router.push("/login")}
                className="p-2 px-4 text-center font-bold text-lg bg-accent-500 rounded-2xl transition shadow-[0_5px_0_0_var(--accent-700)] hover:shadow-[0_5px_0_0_var(--accent-500)] hover:bg-accent-400 active:translate-y-[4px] active:shadow-none text-white"
              >
                Fazer login
              </button>
            )}
          </nav>
          <main className="flex w-full h-full justify-center items-center">
            <section className="flex flex-col w-[90%] md:w-[60%] lg:w-[35%] place-content-center border border-background-500 rounded-3xl shadow-[0_0_10px_1px_var(--background-200)]">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full h-full gap-4 p-6"
              >
                <h2 className="self-center">Crie seu perfil</h2>
                <input
                  required
                  ref={nameRef}
                  type="text"
                  placeholder="Nome de Usário"
                  className="px-4 py-2 bg-background-300 rounded-3xl outline-none placeholder-text-700"
                />
                <input
                  required
                  ref={emailRef}
                  type="email"
                  placeholder="E-mail"
                  className="px-4 py-2 bg-background-300 rounded-3xl outline-none placeholder-text-700"
                />
                <input
                  required
                  ref={passwordRef}
                  type="password"
                  placeholder="Senha"
                  className="px-4 py-2 bg-background-300 rounded-3xl outline-none placeholder-text-700"
                />
                <div className="flex flex-row w-full items-center">
                  <Checkbox required color="deep-purple" />
                  <p className="text-text-600 font-bold">
                    Li e aceito os
                    <span className="cursor-pointer text-accent-500 hover:text-accent-700 ml-2">
                      termos e condições de uso
                    </span>
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={submitCooldown}
                  className="w-full p-3 text-center font-bold text-lg bg-accent-500 rounded-2xl transition shadow-[0_5px_0_0_var(--accent-700)] hover:shadow-[0_5px_0_0_var(--accent-500)] hover:bg-accent-400 active:translate-y-[5px] active:shadow-none text-white"
                >
                  Realizar cadastro
                </button>
              </form>
            </section>
          </main>
          {isMobile && (
            <div className="flex flex-col w-full text-center justify-center p-6 pt-0 gap-2">
              <p>Já tem uma conta?</p>
              <button
                onClick={() => router.push("/login")}
                className="font-bold text-sm text-accent-500 hover:text-accent-700"
              >
                Faça login!
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
