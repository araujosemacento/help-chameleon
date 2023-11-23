/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Inicio,
  Entrar,
  Cadastrar,
  Exercicios,
  TesteDeNivel,
  Desafios,
  Ranking,
  Perfil,
} from "@/components/Pages";
import Sidebar from "@/components/SideBar";
import React from "react";
export default function Home() {
  const [page, setPage] = React.useState("home");

  const handleSelect = (index) => {
    setPage(index);
  };

  return (
    <div className="flex flex-row h-full">
      {page !== "register" && page !== "login" && page !== "home" && (
        <Sidebar onSelect={handleSelect} />
      )}
      <main className="flex flex-row w-full h-full">
        {page === "home" && <Inicio onSelect={handleSelect} />}
        {page === "login" && <Entrar onSelect={handleSelect} />}
        {page === "register" && <Cadastrar onSelect={handleSelect} />}
        {page === "exercises" && <Exercicios />}
        {page === "test" && <TesteDeNivel />}
        {page === "challenges" && <Desafios />}
        {page === "ranking" && <Ranking />}
        {page === "profile" && <Perfil />}
      </main>
    </div>
  );
}
