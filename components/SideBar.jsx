/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import { useMobile } from "@/context/MobileContext";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import React, { useState } from "react";
import "@/components/styles/SideBar.css";

export default function SideBar({ onSelectPage }) {
  const { isMobile, windowSize } = useMobile();
  const { user, signOutUser } = useAuth();
  const [selectedPage, setSelectedPage] = useState([]);

  useEffect(() => {
      setSelectedPage(localStorage.getItem("paginaPrincipal"));
  }, [selectedPage]);
  const handleSelectSideBar = (page) => {
    setSelectedPage(page);
    onSelectPage(page);
  };

  return (
    <aside
      className={`flex flex-col md:flex-col w-full h-20 justify-evenly md:justify-normal md:w-1/2 lg:w-1/3 xl:w-1/4 lg:w-88 md:h-screen overflow-hidden text-text-900 bg-accent-100 rounded-t-xl md:rounded-r-3xl md:rounded-l-none`}
    >
      <div className="hidden md:flex flex-row w-full p-8 items-center gap-2">
        <img src="/magomeleon_2.png" alt="logo" className="w-16" />
        <h2 className="text-2xl text-accent-600 font-bold">ProgQuest</h2>
      </div>
      <hr className="hidden md:flex mb-6 border-accent-600 w-3/4 self-center" />
      <div className="flex flex-row w-full justify-between h-full md:flex-col">
        <div className="flex flex-row w-full justify-evenly md:flex-col gap-1">
          <button
            onClick={() => handleSelectSideBar("exercicios")}
            className={`flex flex-col md:flex-row text-xs sm:text-sm gap-2 md:gap-2 items-center justify-center md:justify-normal aspect-square m-1 rounded-xl md:aspect-auto md:p-4 md:text-lg md:px-10 md:mx-6 hover:bg-accent-200 border-2 font-semibold ${
              selectedPage === "exercicios"
                ? "bg-accent-200 border-accent-500 text-accent-500 font-bold"
                : "border-transparent text-text-900"
            }`}
          >
            <span className="material-symbols-outlined scale-[125%]">
              exercise
            </span>
            Exercícios
          </button>
          <button
            onClick={() => handleSelectSideBar("nivel")}
            className={`flex flex-col md:flex-row text-xs sm:text-sm gap-1 md:gap-2 items-center justify-center md:justify-normal aspect-square m-1 rounded-xl md:aspect-auto md:p-4 md:text-lg md:px-10 md:mx-6 hover:bg-accent-200 border-2 font-semibold ${
              selectedPage === "nivel"
                ? "bg-accent-200 border-accent-500 text-accent-500 font-bold"
                : "border-transparent text-text-900"
            }`}
          >
            <span className="material-symbols-outlined scale-[125%]">
              award_star
            </span>
            Nível
          </button>
          <button
            onClick={() => handleSelectSideBar("desafios")}
            className={`flex flex-col md:flex-row text-xs sm:text-sm gap-1 md:gap-2 items-center justify-center md:justify-normal aspect-square m-1 rounded-xl md:aspect-auto md:p-4 md:text-lg md:px-10 md:mx-6 hover:bg-accent-200 border-2 font-semibold ${
              selectedPage === "desafios"
                ? "bg-accent-200 border-accent-500 text-accent-500 font-bold"
                : "border-transparent text-text-900"
            }`}
          >
            <span className="material-symbols-outlined scale-[125%]">bomb</span>
            Desafios
          </button>
          <button
            onClick={() => handleSelectSideBar("ranking")}
            className={`flex flex-col md:flex-row text-xs sm:text-sm gap-1 md:gap-2 items-center justify-center md:justify-normal aspect-square m-1 rounded-xl md:aspect-auto md:p-4 md:text-lg md:px-10 md:mx-6 hover:bg-accent-200 border-2 font-semibold ${
              selectedPage === "ranking"
                ? "bg-accent-200 border-accent-500 text-accent-500 font-bold"
                : "border-transparent text-text-900"
            }`}
          >
            <span className="material-symbols-outlined scale-[125%]">
              trophy
            </span>
            Ranking
          </button>
          <button
            onClick={() => handleSelectSideBar("perfil")}
            className={`flex flex-col md:flex-row text-xs sm:text-sm gap-1 md:gap-2 items-center justify-center md:justify-normal aspect-square m-1 rounded-xl md:aspect-auto md:p-4 md:text-lg md:px-10 md:mx-6 hover:bg-accent-200 border-2 font-semibold ${
              selectedPage === "perfil"
                ? "bg-accent-200 border-accent-500 text-accent-500 font-bold"
                : "border-transparent text-text-900"
            }`}
          >
            <span className="material-symbols-outlined scale-[125%]">
              account_circle
            </span>
            Perfil
          </button>
        </div>
        <button
          onClick={signOutUser}
          className="hidden md:flex flex-col md:flex-row text-xs sm:text-sm gap-1 md:gap-2 items-center justify-center md:justify-normal aspect-square m-1 md:mb-4 rounded-xl md:aspect-auto md:p-4 md:text-lg md:px-10 md:mx-6 hover:bg-accent-200 text-fail-300 border-2 border-transparent active:border-fail-500 active:text-fail-500 font-semibold "
        >
          <span className="material-symbols-outlined scale-[125%]">logout</span>
          Sair
        </button>
      </div>
    </aside>
  );
}
