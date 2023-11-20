/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import SideBar from "@/components/SideBar";
import {
  Exercicios,
  TesteDeNivel,
  Desafios,
  Ranking,
  Perfil,
} from "@/components/Pages";

export default function User() {
  const [selected, setSelected] = React.useState(5);

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <div className="flex flex-row h-full">
      <SideBar onSelect={handleSelect} />
      <main className="flex flex-col w-full h-full overflow-auto">
        {selected === 1 && <Exercicios />}
        {selected === 2 && <TesteDeNivel />}
        {selected === 3 && <Desafios />}
        {selected === 4 && <Ranking />}
        {selected === 5 && <Perfil />}
      </main>
    </div>
  );
}
