/* eslint-disable @next/next/no-img-element */
"use client";
import { useMobile } from "@/context/MobileContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
//import SideBar from "@/components/SideBar";
import React, { useState, useEffect } from "react";
import Loading from "@/public/loading/loading";

export default function Login() {
  const { isMobile, windowSize } = useMobile();
  const { user } = useAuth();
  const router = useRouter();

  const [loading, setLoading] = useState(true);

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
        <Loading />
      ) : (
        <div className="flex flex-col overflow-auto w-full h-full text-text-900 px-8 py-4">
          <nav className="flex flex-row w-full md:justify-between justify-center">
            <div className="flex flex-row gap-4 items-center">
              <img
                src="hameleon.svg"
                alt="logo"
                className="w-10 invert dark:invert-0"
              />
              <h2 className="text-2xl">Programação II</h2>
            </div>
            {!isMobile && (
              <button
                onClick={() => router.push("/cadastro")}
                className="p-2 px-4 text-center font-bold text-lg bg-accent-500 rounded-2xl transition shadow-[0_5px_0_0_var(--accent-700)] hover:bg-accent-600 active:translate-y-[4px] active:shadow-none text-white"
              >
                Cadastre-se
              </button>
            )}
          </nav>
          <main className="flex w-full h-full justify-center items-center">
            <section className="flex flex-col w-[90%] md:w-[60%] lg:w-[35%] place-content-center gap-4 p-6 border border-background-500 rounded-3xl shadow-[0_0_10px_1px_var(--background-200)]">
              <h2 className="self-center">Fazer login</h2>
              <input
                required
                type="email"
                placeholder="E-mail"
                className="px-4 py-2 bg-background-300 rounded-3xl outline-none placeholder-text-700"
              />
              <input
                required
                type="password"
                placeholder="Senha"
                className="px-4 py-2 bg-background-300 rounded-3xl outline-none placeholder-text-700"
              />
              <div className="flex flex-row-reverse w-full">
                <button className="font-bold text-xs text-accent-500 hover:text-accent-700">
                  Esqueceu a senha?
                </button>
              </div>
              <button
                type="submit"
                className="w-full p-3 text-center font-bold text-lg bg-accent-500 rounded-2xl transition shadow-[0_5px_0_0_var(--accent-700)] hover:bg-accent-600 active:translate-y-[5px] active:shadow-none text-white"
              >
                Entrar
              </button>
              <div className="flex flex-row w-full gap-4 items-center my-2 p-2">
                <hr className="w-full border-text-600" />
                <p className="text-sm text-text-600">OU</p>
                <hr className="w-full border-text-600" />
              </div>
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <button className="flex w-full p-2 px-4 text-center font-bold text-sm bg-accent-500 rounded-2xl transition shadow-[0_4px_0_0_var(--accent-700)] hover:bg-accent-600 active:translate-y-[4px] active:shadow-none  text-white justify-center items-center gap-2">
                  <img
                    src="https://api.iconify.design/akar-icons:google-fill.svg?color=%23ffffff"
                    alt="Google icon"
                    className="w-6"
                  />
                  <p className="text-lg">Google</p>
                </button>
                <button className="flex w-full p-2 px-4 text-center font-bold text-sm bg-accent-500 rounded-2xl transition shadow-[0_5px_0_0_var(--accent-700)] hover:bg-accent-600 active:translate-y-[4px] active:shadow-none text-white justify-center items-center gap-2">
                  <img
                    src="https://api.iconify.design/mdi:github.svg?color=%23ffffff"
                    alt="Google icon"
                    className="w-6"
                  />
                  <p className="text-lg">Github</p>
                </button>
              </div>
              <div className="flex flex-row w-full justify-center">
                <button className="font-bold text-sm text-accent-500 hover:text-accent-700 mt-2">
                  Termos de Uso
                </button>
              </div>
            </section>
          </main>
          {isMobile && (
            <div className="flex flex-col w-full text-center justify-center p-6 pt-0 gap-2">
              <p>Não tem uma conta?</p>
              <button
                onClick={() => router.push("/cadastro")}
                className="font-bold text-sm text-accent-500 hover:text-accent-700"
              >
                Crie uma conta!
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
