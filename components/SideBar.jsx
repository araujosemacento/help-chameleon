/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { Button } from "@material-tailwind/react";
import { DocumentTextIcon, ChartBarIcon, BoltIcon, TrophyIcon, UserIcon } from "@heroicons/react/24/solid";

export default function Sidebar({ onSelect }) {

  const [selected, setSelected] = React.useState(5);

  const handleSelectSidebar = (index) => {
    setSelected(index);
    onSelect(index);
  }

  return (
    <aside className="flex flex-col h-full w-full max-w-[25vw] p-4 shadow-xl rounded-r-2xl shadow-blue-gray-900/5 bg-background-200 text-text-800">
      <div className="flex flex-row gap-4 w-full p-2">
        <img src="/hameleon.svg" alt="logo" className="w-[3vw] invert dark:invert-0" />
        <h3 className="place-self-center text-[1.5vw] text-text-900">Programação II</h3>
      </div>
      <hr className="my-2 border-accent-600" />
      <div className="flex flex-col w-full gap-6 mt-4">
        <Button onClick={() => handleSelectSidebar(1)} className="bg-transparent border border-transparent hover:border-background-100 items-center flex" style={selected === 1 ? { boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)" } : {}}>
          <DocumentTextIcon className="w-[2vw] mr-5 text-text-800" />
          <p className="text-[1vw] text-text-800">Exercícios</p>
        </Button>
        <Button onClick={() => handleSelectSidebar(2)} className="bg-transparent border border-transparent hover:border-background-100 items-center flex" style={selected === 2 ? { boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)" } : {}}>
          <ChartBarIcon className="w-[2vw] mr-5 text-text-800" />
          <p className="text-[1vw] text-text-800">Teste de Nível</p>
        </Button>
        <Button onClick={() => handleSelectSidebar(3)} className="bg-transparent border border-transparent hover:border-background-100 items-center flex" style={selected === 3 ? { boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)" } : {}}>
          <BoltIcon className="w-[2vw] mr-5 text-text-800" />
          <p className="text-[1vw] text-text-800">Desafios</p>
        </Button>
        <Button onClick={() => handleSelectSidebar(4)} className="bg-transparent border border-transparent hover:border-background-100 items-center flex" style={selected === 4 ? { boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)" } : {}}>
          <TrophyIcon className="w-[2vw] mr-5 text-text-800" />
          <p className="text-[1vw] text-text-800">Ranking</p>
        </Button>
        <Button onClick={() => handleSelectSidebar(5)} className="bg-transparent border border-transparent hover:border-background-100 items-center flex" style={selected === 5 ? { boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)" } : {}}>
          <UserIcon className="w-[2vw] mr-5 text-text-800" />
          <p className="text-[1vw] text-text-800">Perfil</p>
        </Button>
      </div>
    </aside>
  );
}
